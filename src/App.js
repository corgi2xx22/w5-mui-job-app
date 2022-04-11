import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import JobList from "./component/JobList";
import NavBar from "./component/NavBar";
import jobs from "./data.json";
import React from "react";
import {useState} from "react";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
// import Brightness3Icon from "@material-ui/icons/Brightness3";
// import Brightness7Icon from "@material-ui/icons/Brightness7";


const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2),
    flexGrow: 1,
  },
  title: {
    flexGrow: 1
  }
}));


export default function App() {
  const [theme, setTheme] = useState(true);
  const classes = useStyles();
  const icon = !theme ? <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"/></svg>;
  const appliedTheme = createMuiTheme(theme ? light : dark);
  return (
    <ThemeProvider theme={appliedTheme} sx={{mt:5} }>
    <Paper>
      <CssBaseline />
     
      <NavBar />
       <IconButton
            edge="end"
            color="inherit"
            aria-label="mode"
            onClick={() => setTheme(!theme)}
          >
            {icon}
          </IconButton>
          <Typography>
             {!theme ? "Bright" : "Dark"}{" "}
            {!theme ? "Mode" : "Mode"} 
          </Typography>
      
      <Container maxWidth="lg">
        <JobList jobs={jobs} />
      </Container>

      </Paper>
    </ThemeProvider>
  );


}

export const light = {
  palette: {
    type: "light"
  }
};
export const dark = {
  palette: {
    type: "dark"
  }
};

