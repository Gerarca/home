import { Box, Typography, useMediaQuery, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SchoolIcon from "@material-ui/icons/School";
import main from "../../assets/img/brain.gif";

const useStyles = makeStyles((theme) => ({
    textMSG: {
        ...theme.typography.textMSG,
    }
  }));

const Home = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    return (
        <Paper className="image" style={{ background: 'black', height: '100vh' }}>
            <box md={{ flexGrow: 1 }}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item md={6}>
                        <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                            <Typography variant="h1">Engineer Gerson Arias</Typography>
                            <Typography variant="h4">Software Developer</Typography>   
                            <img src={main} alt="Logo Main" className="logobrain" />                    
                        </Box>         
                    </Grid>
                    <Grid item md={6} >
                        <Box col="12" pt={{ md:25 }}  >
                            <p className={classes.textMSG} >"Rise and Rise Until Lambs Become Lions"</p>
                        </Box>             
                    </Grid>
                    {isMobile ? (
                    <Box textAlign="right" mt={20}>
                        <Button                    
                        component={Link}
                        variant="contained"
                        color="primary"
                        to="/Personal"
                        >
                        <SchoolIcon style={{ marginRight: 15 }} />
                        <Typography variant="button">Personal</Typography>
                        <ChevronRightIcon />
                        </Button>
                    </Box>
                    ) : (
                    <> </>
                    )} 
                </Grid>
            </box>
        </Paper>
    );
};

export default Home;
