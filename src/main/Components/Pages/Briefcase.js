import {
    Box,
    Typography,
    useMediaQuery,
    Button,
    Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import ResponsiveImgMaterialUi from "responsive-img-material-ui";
import { makeStyles } from '@material-ui/core/styles';
import LogoITM from "../../assets/img/intimidades.png";
import LogoBetconnections from "../../assets/img/logobetconections.png";
import LogoMasterPlan from "../../assets/img/logomasterplan.png";
import LogoCVC from "../../assets/img/cvc.png";
import LogoREACTJS from "../../assets/img/react.png";

const useStyles = makeStyles((theme) => ({
    textCollegeTitle: {
        ...theme.typography.textCollegeTitle,
    }
}));

const Briefcase = () => {

const classes = useStyles();
const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

return (
    <div>
        <Box px={4} textAlign="center" >

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoITM} />
                    </Box>        
                </Grid>
                <Grid item xs={12}  md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://intimidades.net/" rel="noreferrer" target="_BLANK">
                            Intimidades® - Empresa Multinivel
                        </a>                      
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" >
                        <p> <strong> Intimidades C.A. </strong>  </p>
                        <p> Developer Full Stack, Developer modules's user and administrator. </p>
                        <p> Vue JS, HTML, PHP, Codeigniter, JavaScript, Jquery, Postgres, Vuetify. </p>
                        <a href="https://intimidades.net/" rel="noreferrer" target="_BLANK">
                            https://intimidades.net/
                        </a> 
                    </Box>              
                </Grid>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoBetconnections} style={{ width:'20rem' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://www.betconnections.com/" rel="noreferrer" target="_BLANK">
                            BetConnections
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Frontend, Developer of diferents modules. </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="https://www.betconnections.com/" rel="noreferrer" target="_BLANK">
                            https://www.betconnections.com/
                        </a> 
                    </Box>              
                </Grid>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>


            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoMasterPlan} style={{ width:"15rem" }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://www.mplan.io/" rel="noreferrer" target="_BLANK">
                            Master Plan
                        </a>                      
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" >
                        <p> Developer Frontend, Bugs Fix. </p>
                        <p> Livewire, HTML, PHP, Laravel, JavaScript, Taildwind, css. </p>
                        <a href="https://www.mplan.io/" rel="noreferrer" target="_BLANK">
                            https://www.mplan.io/
                        </a>
                    </Box>              
                </Grid>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoCVC} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://www.dobermann.org/es/covencaucho" rel="noreferrer" target="_BLANK">
                            Supervisory system for the Energy and Industrial Services Area
                        </a>                      
                    </Box>
                    <Box item xs={10} md={8}  pt={{ md:2 }} align="justify" >
                        <p><strong> Company Covencaucho Industrias S.A. </strong></p>
                        <p> Software, Developer Full Stack, all modules, App for Windows, Configuration panel eletrical, Supervisor System of 2 Industrial Boilers, Pressure, Temperature, and Liquid Level Sensors. </p>
                        <p> C#, MySQL, RS-485, Photoshop. </p>
                        <a href="https://www.mplan.io/" rel="noreferrer" target="_BLANK">
                            https://www.dobermann.org/es/covencaucho
                        </a>
                    </Box>              
                </Grid>
            </Grid>    
            <Grid item xs={12} mt="5" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoREACTJS} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://gerarca.github.io/ReactJS-Weather/" rel="noreferrer" target="_BLANK">
                            React JS App Weather
                        </a>                      
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" >
                        <p> App Weather </p>
                        <p> Javascript, JSX, React Props, Design Responsive, API OpenWeather , API React Maps Google, Boostrat 4. </p>
                        <a href="https://gerarca.github.io/ReactJS-Weather/" rel="noreferrer" target="_BLANK">
                            https://gerarca.github.io/ReactJS-Weather/
                        </a>
                    </Box>              
                </Grid>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoREACTJS} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://gerarca.github.io/ReactJSNewsExample/" rel="noreferrer" target="_BLANK">
                            React JS App News Example
                        </a>                      
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" >
                        <p> App News </p>
                        <p> Javascript, JSX, Json, React Props, React Radium, React Hook, Design Responsive </p>
                        <a href="https://gerarca.github.io/ReactJSNewsExample/" rel="noreferrer" target="_BLANK">
                            https://gerarca.github.io/ReactJSNewsExample/
                        </a>
                    </Box>              
                </Grid>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoREACTJS} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://gerarca.github.io/ReactJSSimpleLogin/" rel="noreferrer" target="_BLANK">
                            React JS App Simple Login Example
                        </a>                      
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" >
                        <p> App Simple Login </p>
                        <p> Javascript, JSX, Json, React Props, React Hook, Design Responsive. </p>
                        <a href="https://gerarca.github.io/ReactJSSimpleLogin/" rel="noreferrer" target="_BLANK">
                            https://gerarca.github.io/ReactJSSimpleLogin/
                        </a>
                    </Box>              
                </Grid>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoREACTJS} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://gerarca.github.io/ReactJSPropsAnimated/" rel="noreferrer" target="_BLANK">
                            React JS App Admin Users
                        </a>                      
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" >
                        <p>  App Admin Users </p>
                        <p> Javascript, JSX, Json, React Props, React Hook. </p>
                        <a href="https://gerarca.github.io/ReactJSPropsAnimated/" rel="noreferrer" target="_BLANK">
                            https://gerarca.github.io/ReactJSPropsAnimated/
                        </a>
                    </Box>              
                </Grid>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px", marginBottom:"50px" }}> </Grid>

        </Box>
        {isMobile ? (
            <Grid container justify="space-between">
            <Grid item>
                <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/Skills"
                >
                <ChevronLeftIcon />
                <Typography variant="button">Skills</Typography>
                <CodeOutlinedIcon style={{ marginLeft: 15 }} />
                </Button>
            </Grid>
            <Grid item>
                <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/About"
                >
                <ContactPhoneIcon style={{ marginRight: 15 }} />
                <Typography variant="button">Contact</Typography>
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
export default Briefcase;