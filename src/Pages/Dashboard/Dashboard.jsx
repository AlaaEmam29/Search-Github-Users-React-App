import React from "react";
import {  Navbar, SearchForm, Repos, Loading, Info, User } from "../../Components/index.js";
import Container from '@mui/material/Container';
import { useGlobalContext } from "../../Context/Context.js";
import Alert from '@mui/material/Alert';

const Dashboard = () => {
    const { error, isLoading } = useGlobalContext();
    return <React.Fragment>
        <Navbar />
        <Container maxWidth="lg" sx={{ py: 5 }}>
            {error.status !== '403' ?
                <React.Fragment>
                    {isLoading ? <React.Fragment>
                        <SearchForm />
                        <Loading />
                    </React.Fragment>
                        : <React.Fragment>
                            <SearchForm />
                      <Info/>
                        <User/>
                        <Repos />
                    </React.Fragment>}
                </React.Fragment> : <Alert severity="error"
                    sx={{ letterSpacing: '0.25rem' }}
                >{error.msg}</Alert>}
        </Container>



    </React.Fragment>;
}
export default Dashboard;
