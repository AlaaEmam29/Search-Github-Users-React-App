import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import { useGlobalContext } from '../../Context/Context';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    '& span': {
        fontSize: '2rem',
        marginRight: '1rem',
    width: '3rem',
      height: '3rem',
      display: 'grid',
      placeItems: 'center',
        borderRadius: '50%',

        '&.pink': {
            color: '#e83e8c',
            backgroundColor: '#fde2e4',
        },
        '&.green': {
            color: '#28a745',
            backgroundColor: '#d1fae5',
        },
        '&.purple': {
            color: '#6f42c1',
            backgroundColor: '#e9d8fd',
        },
        '&.yellow': {
            color: '#ffc107',
            backgroundColor: '#fff3cd',
        },
    },
    '& h3 , & p': {
        margin: 0,
    },
    '& p': {
        fontSize: '1.2rem',
        textTransform: 'capitalize',
        letterSpacing: '0.1rem',
    },


}));
const Info = () => {
  const {user} = useGlobalContext();
  const { public_repos, followers, following, public_gists } = user
      const items = [
    {
      id: 1,
      icon: <GoRepo className='icon' />,
      label: 'repos',
      value: public_repos,
      color: 'pink',
    },
    {
      id: 2,
      icon: <FiUsers className='icon' />,
      label: 'followers',
      value: followers,
      color: 'green',
    },
    {
      id: 3,
      icon: <FiUserPlus className='icon' />,
      label: 'following',
      value: following,
      color: 'purple',
    },
    {
      id: 4,
      icon: <GoGist className='icon' />,
      label: 'gists',
      value: public_gists,
      color: 'yellow',
    },
  ];
    return <React.Fragment>
            <Box sx={{ flexGrow: 1 , py:5 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {items.map((item, index) => (
          <Grid item xs={2} sm={4} md={3} key={index}>
                <Item>
                    <span className={item.color}>{item.icon}</span>
                    <div>
                        <h3>{item.value}</h3>
                        <p>{item.label}</p>
                    </div>
                </Item>
          </Grid>
        ))}
      </Grid>
    </Box>

         </React.Fragment>;
}
export default Info;