import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useGlobalContext } from '../../Context/Context';
import { IconButton } from '@mui/material';

const UserFollowers = () => {
    const { followers } = useGlobalContext();
    const navigateToGithub = (html_url) => {
        window.open(html_url, '_blank');
    }
    return <React.Fragment>
         <Box className="user-info" >

            {followers.length > 0 ?
    
    <>
                <div className="card-header">Followers</div>
 <Card sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
                <List sx={{
        width: 'inherit',
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}>
               
        
                    {followers.map((follower, index) => {
                        return <ListItem key={index}>
                            <ListItemAvatar>
                                <Avatar alt={follower.login} src={follower.avatar_url} />
                            </ListItemAvatar>
                            <ListItemText primary={<Typography variant="h5" style={{ textTransform: 'capitalize'  , letterSpacing:'0.01rem'}}>{follower.login}</Typography>}
                                secondary={<IconButton variant="p" style={{ fontSize: '1.2rem', color: 'rgba(0,0,0,0.5)' }} className="btn"
                                
                                onClick={() => navigateToGithub(follower.html_url)}>
                               {follower.html_url}</IconButton>} />
                        </ListItem>
                    } )}
             </List>   
            </Card>
    </>
                : <Typography variant="h5" style={{ textTransform: 'capitalize'  , letterSpacing:'0.01rem'}}>No Followers</Typography>}
        </Box>

    </React.Fragment>;
}
export default UserFollowers;