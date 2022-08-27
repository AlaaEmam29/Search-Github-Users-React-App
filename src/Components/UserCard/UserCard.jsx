import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';

import Box from '@mui/material/Box';
import { useGlobalContext } from '../../Context/Context';
const UserCard = () => {
    const { user } = useGlobalContext();
    const { avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
        twitter_username, } = user
    const navigateToGithub = () => {
        window.open(html_url, '_blank');
    }
     const navigateToWbsite= () => {
        window.open(`https://${blog}`, '_blank');
    }
    return <React.Fragment>
         <Box className="user-info" sx={{ height:'100%'}} >
        <div className="card-header">user</div>
    
        <Card sx={{
          maxWidth: 550 ,height:'inherit' }}  >
      <CardHeader
        avatar={<Avatar alt={name} src={avatar_url} />}
        action={
          <IconButton aria-label="settings">
                <Button variant="outlined" onClick={navigateToGithub}>Follow</Button>

          </IconButton>
        }
        title={name}
                    subheader=  {twitter_username ? `@${twitter_username}` : 'notfound'}
      />
                       
  

      
            <CardContent>
                    <Typography variant="p" component="div">
{bio || 'notfound'}

      </Typography>
       <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{fontSize : '1.5rem'}}>
                <MdBusiness/>
              </ListItemIcon>
              <ListItemText primary={company || 'notfound'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon sx={{fontSize : '1.5rem'}}>

                <MdLocationOn />
              </ListItemIcon>
              <ListItemText primary={location|| 'notfound'}/>
            </ListItemButton>
                            </ListItem>
                             <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon sx={{fontSize : '1.5rem'}}>
                <MdLink />
              </ListItemIcon>
              <ListItemText  primary={blog|| 'notfound'}   primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                  }} onClick={navigateToWbsite}/>
            </ListItemButton>
                            </ListItem>
                           
        </List>
      </nav>
      </CardContent>
     
       
     
    </Card>
        </Box>
    </React.Fragment>;
}
export default UserCard;