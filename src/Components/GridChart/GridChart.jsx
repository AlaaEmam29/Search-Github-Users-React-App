import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Pie3D from '../Pie3D/Pie3D';
import Column2DTemplate from '../Column2DTemplate/Column2DTemplate';
import Doughnut2D from '../Doughnut2D/Doughnut2D';
import Bar2D from '../Bar2D/Bar2D';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2025' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  
}));

const GridChart = () => {
    return <React.Fragment>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} rowSpacing={4}>
        <Grid item    md={6}>
          <Item > <Pie3D/></Item>
        </Grid>
        <Grid item  md={6}>
           <Item><Column2DTemplate/></Item>
        </Grid>
        <Grid item  md={6}>
          <Item><Doughnut2D/></Item>
        </Grid>
        <Grid item  md={6}>
            <Item>
            <Bar2D/>
            </Item>
        </Grid>
      </Grid>
    </Box>

        
         </React.Fragment>;
}
export default GridChart;