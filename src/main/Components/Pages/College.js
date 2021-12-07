import {
    Box,
    Typography,
    useMediaQuery,
    Button,
    Grid
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import PersonIcon from "@material-ui/icons/Person";
import ResponsiveImgMaterialUi from "responsive-img-material-ui";
import { makeStyles } from '@material-ui/core/styles';
import ReactTooltip from "react-tooltip"
import LogoUCLA from "../../assets/img/logoucla.png";
import LogoFundaUC from "../../assets/img/logofundauc.png";
import LogoUNY from "../../assets/img/logouny.png";

const useStyles = makeStyles((theme) => ({
    textCollegeTitle: {
        ...theme.typography.textCollegeTitle,
    }
  }));

const College = () => {

const classes = useStyles();
const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

return (
    <div>
        <Box md={{ flexGrow: 1 }} px={4}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoUNY} />
                    </Box>        
                </Grid>
                <Grid item md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align={{xs:"center", sm:"left"}}>  
                        <a href="http://www.uny.edu.ve/" rel="noreferrer" target="_BLANK"  data-tip data-for="registerTipUNY">
                            Universidad Yacambu
                        </a>                      
                    </Box>
                    <Box col="12" pt={{ md:2 }}  >
                        <p align="justify">
                            Electronic Computer Engineer. Extensive Knowledge in the Development of Electronic Interfaces (Hardware and Software). Hardware and software development programs, trained to perform in the area of engineering that is responsible for solving engineering problems such as process control industrial and electronic systems of power, instrumentation and industrial control.
                        </p>
                    </Box>  
                    <ReactTooltip id="registerTipUNY" place="top" effect="float">
                        Go to Page oficial Universidad Yacambu 
                    </ReactTooltip>            
                </Grid>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>  
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoFundaUC} />
                    </Box>        
                </Grid>
                <Grid item md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align={{xs:"center", sm:"left"}}>           
                        <a href="http://www.uc.edu.ve/univ_dep_fundauc.php" rel="noreferrer" target="_BLANK"  data-tip data-for="registerTipFUNDAUC">
							UNIVERSIDAD DE CARABOBO (FUNDAUC)
						</a>             
                    </Box>
                    <Box col="12" pt={{ md:2 }}  >
                        <p align="justify">
                            English course, advanced level.
                        </p>
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipFUNDAUC" place="top" effect="float">
                    Go to Page oficial FUNCDAUC 
                </ReactTooltip>
            </Grid>  
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>  
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoUCLA} />
                    </Box>        
                </Grid>
                <Grid item md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align={{xs:"center", sm:"left"}}>                        
                        <a href="http://www.ucla.edu.ve/" rel="noreferrer" target="_BLANK"  data-tip data-for="registerTipUCLA">
                            UNIVERSIDAD CENTROCCIDENTAL LISANDRO ALVARADO (UCLA) DECANATO DE CIENCIAS Y TECNOLOGÍAS (DCYT)							
						</a>
                    </Box>
                    <Box col="12" pt={{ md:2 }}  >
                        <p align="justify">
                        Systems Analyst. Trained to perform in the area of software and computer engineering, develop applications with regard to their design and obtaining of algorithms, as well as analyzing the possible utilities and necessary modifications of operating systems for greater effectiveness of a computer system.
                        </p>
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipUCLA" place="top" effect="float">
                    Go to Page oficial UCLA 
                </ReactTooltip>
            </Grid>          
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px", marginBottom:"50px" }}> </Grid>
            
        </Box>
        {isMobile ? (
            <Grid container justify="space-between">
            <Grid item>
                <Button 
                variant="contained" 
                color="primary" 
                component={Link} to="/Personal">
                <ChevronLeftIcon />
                <Typography variant="button">Personal</Typography>
                <PersonIcon style={{ marginLeft: 15 }} />
                </Button>
            </Grid>
            <Grid item>
                <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/Skills"
                >
                <CodeOutlinedIcon style={{ marginRight: 15 }} />
                <Typography variant="button">Skills</Typography>
                <ChevronRightIcon />
                </Button>
            </Grid>
            </Grid>
        ) : (
            <></>
        )}
    </div>
    );
};
export default College;
  