import Header from "./Components/Header";
import { createTheme, ThemeProvider } from "@material-ui/core";
import "@fontsource/roboto";
import { Container } from "@material-ui/core";
import { CssBaseline } from '@mui/material';

import { indigo, orange } from "@material-ui/core/colors";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "3rem",
      color: "white"
    },
    h4: {
      color: "white"
    },
    h5: {
      color: "midnightblue",
      fontSize: "2rem",
      fontFamily: ['Roboto Condensed', 'sans-serif'].join(","),
    },
    textMSG:{
      fontSize: "3rem",
      fontFamily: ['Estonia', 'cursive'].join(","),
      color: "white"
    },
    textProfile:{
      fontSize: "1.5rem",
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(","),
      color: "black"
    },
    textCollegeTitle:{
      fontWeight: 600
    }  
  },
  palette: {
    type: "light",
    primary: {
      main: indigo[900],
      light: '#ff7961',
      dark: '#ba000d',
    },
    backgroundHome:{
      paper: "#000000",
    },
    secondary: {
      main: orange[900]
    },    
  }
});

function App() {
  return (
    <ThemeProvider theme={theme} >
        <CssBaseline />
        <Container maxWidth="false" disableGutters>
          <Header />
        </Container>
    </ThemeProvider>
  );
}

export default App;
