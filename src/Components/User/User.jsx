import * as React from 'react';
import Box from '@mui/material/Box';
import UserCard from '../UserCard/UserCard';
import Grid from '@mui/material/Grid';
import UserFollowers from '../UserFollowers/UserFollowers';



const User = () => {
  
    return <React.Fragment>
        <Box sx={{ my: 5 }}>
            
            <Grid container rowSpacing={{xs:8 , md:2}} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={12} md={6}>
    <UserCard></UserCard>
  </Grid>
  <Grid item xs={12} md={6}>
    <UserFollowers></UserFollowers>
  </Grid>
</Grid>

        </Box>
         </React.Fragment>;
}
export default User;