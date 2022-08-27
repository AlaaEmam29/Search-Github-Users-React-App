import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext()
const AppProvider = ({ children }) => {
    const API_ENDPOINT = "https://api.github.com";
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState([]);
    const [userQuery, setUserQuery] = useState('')
    const [repos, setRepos] = useState([]);
    const [followers, setFollowers] = useState([]);
    const [error, setError] = useState({ show: false, msg: "" ,status:'200'});
    const [requests, setRequests] = useState(0);
const [waiting, setWaiting] = useState(true);

      function handleErrors(show=false, msg='',status='200') {
            setError({ show, msg ,status });
        }
    const fetchAllApi = async (url, userQuery = 'bradtraversy') => {
              setIsLoading(true);
        const userUrl = axios.get(`${url}/users/${userQuery}`);
        const reposUrl = axios.get(`${url}/users/${userQuery}/repos?per_page=100`);
        const followersUrl = axios.get(`${url}/users/${userQuery}/followers`);
        const requestsUrl = axios.get(`${url}/rate_limit`);
         await Promise.all([
            userUrl,
            reposUrl,
            followersUrl,
            requestsUrl,
        ]).then((response) => {
            const [user, repo,followers, requests] = response
            setUser(user.data);
            setRepos(repo.data);
            setFollowers(followers.data);
            setRequests(requests.data.rate);
            setIsLoading(false);
          
        }).catch(errors => {
            if (errors.response.status === 404) {
                handleErrors(true, "There Is No User With That Username","404")
            }   
            else if (errors.response.status === 403)
            {
                   handleErrors(true, "Sorry, you have exceeded your hourly rate limit!","403")

                }
            else {
                handleErrors(true, "Something Went Wrong","500")
            
}         
                   setIsLoading(false)


        })
    }
    let languages = repos.map((repo) => {
        return {
            label: repo.language,
            value: repo.language,
            stars: repo.stargazers_count,


        };
    }).filter((repo) => repo.label !== null || repo.value !== null)
    const RepoLanguages = languages.reduce((total, item) => {
        const { label, stars } = item;
        if (!label) return total;
        if (!total[label]) {
            total[label] = { label: label, value: 1, stars: stars };
        }
        else {
            total[label] = {
                ...total[label],
                value: total[label].value + 1,
                stars: total[label].stars + stars,
            };
        }
        return total;
    }, {});


    let sortable = Object.entries(RepoLanguages)
        .sort(([, a], [, b]) => a - b)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});



    sortable = Object.values(sortable).map((item) => {
        return { ...item, stars: item.stars };
    }).sort((a, b) => {
        return b.stars - a.stars;
    });
    let { stars, forks } = repos.reduce(
        (total, item) => {
            const { stargazers_count, name, forks } = item;
            total.stars[stargazers_count] = { label: name, stars: stargazers_count };
            total.forks[forks] = { label: name, forks: forks };
            return total;
        },
        {
            stars: {},
            forks: {},
        }
    );
    stars = Object.values(stars).slice(-5).reverse();
    forks = Object.values(forks).slice(-5).reverse();
    const handleQuery = (e) => {

        setUserQuery(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setWaiting(true)

        if (userQuery) {
            fetchAllApi(API_ENDPOINT,userQuery)
            handleErrors();
            setWaiting(false)

        }
        else if (userQuery === "") {

            setWaiting(false)
            handleErrors(true, "Please Enter Something");

        }
        else {
            setIsLoading(false)

            
            handleErrors(true, "Please enter a valid username");
        }
             setUserQuery('')

    }

    useEffect(() => {
        fetchAllApi(API_ENDPOINT)
    }, [])
    return <AppContext.Provider value={{

        isLoading,
        user,
        repos,
        followers,
        error,
        RepoLanguages,
        sortable,
        stars,
        forks,
        handleQuery,
        userQuery,
        requests,
        handleSubmit,
        waiting
    }}>{children}</AppContext.Provider>;
}
const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppProvider, useGlobalContext }