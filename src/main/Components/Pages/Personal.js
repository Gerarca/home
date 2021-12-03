import { Box, Grid, Typography, useMediaQuery, Button } from "@material-ui/core";
import ResponsiveImgMaterialUi from "responsive-img-material-ui";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import SchoolIcon from "@material-ui/icons/School";
import HomeIcon from "@material-ui/icons/Home";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    textProfile: {
        ...theme.typography.textProfile,
    }
  }));

const Personal = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    return (
        <div>
            <Box md={{ flexGrow: 1 }} textAlign="center">
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item md={6}>
                        <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >                      
                            <ResponsiveImgMaterialUi xs="https://www.weact.org/wp-content/uploads/2016/10/Blank-profile.png" alt="profile"/>
                        </Box>        
                    </Grid>
                    <Grid item md={6} >
                        <Box col="12" mt={{ md:5 }}  >
                            <p className={classes.textProfile} >
                            'Rise and Rise Until Lambs Become Lions' (Robin Hood(2010), is my fav quote. I define myself like an creative person, persitent, perfectionist, I like challenges, teamwork, share my knowledge and learn from others, I like so much ALL about Techonologies, computing and electronic systems, my strength is in analysis, programming, inplantation, audit, advice and management of computer systems, control systems and industrial electronic.
                            </p>
                        </Box>             
                    </Grid>
                </Grid>            
            </Box>
            {isMobile ? (
            <Grid container justify="space-between">
            <Grid item>
                <Button variant="contained" color="primary" component={Link} to="/">
                <ChevronLeftIcon />
                <Typography variant="button">Home</Typography>
                <HomeIcon style={{ marginLeft: 15 }} />
                </Button>
            </Grid>
            <Grid item>
                <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/College"
                >
                <SchoolIcon style={{ marginRight: 15 }} />
                <Typography variant="button">College</Typography>
                <ChevronRightIcon />
                </Button>
            </Grid>
            </Grid>
            ) : (
            <> </>
            )}
        </div>
    );
};
export default Personal;
