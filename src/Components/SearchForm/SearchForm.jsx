import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useGlobalContext } from "../../Context/Context";

const SearchForm = () => {
  const { handleQuery, userQuery, handleSubmit, error, requests } = useGlobalContext()
  return (
    <React.Fragment>
        {(error.status !=='403')&& <Typography component="p" sx={{letterSpacing : "0.15rem",color : "red"}}>{error.msg}</Typography>}  

      <Grid container spacing={4} sx={{ alignItems: "center" }}>
           <Grid item xs={12} md={8}>
          <Paper
              component="form"
              onSubmit={handleSubmit}
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "inherit",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
              placeholder="Search By Github Name"
              value={userQuery}
                onChange={handleQuery}
              />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
          </Paper>
            
             </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, color: "#333" }}
          >
            Request {requests.remaining} / {requests.limit}
          </Typography>
        </Grid>
          </Grid>

    </React.Fragment>
  );
};
export default SearchForm;
