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
import ReactTooltip from "react-tooltip";
import LogoITM from "../../assets/img/intimidades.png";
import LogoBetconnections from "../../assets/img/logobetconections.png";
import LogoCVC from "../../assets/img/cvc.png";
import LogoREACTJS from "../../assets/img/react.png";
import LogoMowa from "../../assets/img/LogoMOWA.png";
import LogoLuminotecnia from "../../assets/img/luminotecnia.png";
import LogoAlemaniacell from "../../assets/img/alemaniacell.svg";
import LogoArrozal from "../../assets/img/arrozal.svg";
import LogoACamping from "../../assets/img/camping.png";
import LogoCondesa from "../../assets/img/conde.webp";
import LogoFrigorifico from "../../assets/img/frigorifico.png";
import LogoEnvaco from "../../assets/img/envaco.png";
import LogoInarco from "../../assets/img/inarco.svg";
import LogoNGO from "../../assets/img/ngo.png";
import LogoFisae from "../../assets/img/fisae.svg";
import LogoRoyal from "../../assets/img/royal.png";
import LogoTrato from "../../assets/img/trato.png";
import LogoAfter from "../../assets/img/after.svg";
import LogoAlex from "../../assets/img/alex.svg";
import LogoArmazones from "../../assets/img/armazones.svg";
import LogoBalpar from "../../assets/img/balpar.png";
import LogoBepsa from "../../assets/img/bepsa.png";
import LogoBonus from "../../assets/img/bonus.png";
import LogoChaco from "../../assets/img/chaco.svg";
import LogoDinelco from "../../assets/img/dinelco.svg";
import LogoElectro from "../../assets/img/electromax.png";
import LogoGG from "../../assets/img/gonzalesgimenez.png";
import LogoGozalito from "../../assets/img/gonzalito.png";
import LogoKemsa from "../../assets/img/kemsa.svg";
import LogoMG from "../../assets/img/mg.png";
import LogoOdontos from "../../assets/img/odontos.svg";
import LogoPanal from "../../assets/img/panal.png";
import LogoLFQ from "../../assets/img/lfq.svg";
import LogoRasil from "../../assets/img/rasil.png";
import LogoStart from "../../assets/img/start.png";
import LogoUrbania from "../../assets/img/urbania.png";
import LogoYasui from "../../assets/img/yasui.svg";
import LogoNextReact from "../../assets/img/next-react.png";
import LogoSvelte from "../../assets/img/svelte.png";
import LogoAuth from "../../assets/img/auth0.png";

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
                        <ResponsiveImgMaterialUi xs={LogoSvelte}   style={{ width:"12rem" }} />
                    </Box>        
                </Grid>
                <Grid item xs={12}  md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="javascript:void(0)" rel="noreferrer"  data-tip data-for="registerTicket">
                            Remittance System 
                        </a>                      
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" >
                        <p> <strong> Coingroup </strong>  </p>
                        <p> Developer Frontend. </p>
                        <p> SvelteKit, Bootstrap. </p>
                        <a href="javascript:void(0)" rel="noreferrer" data-tip data-for="registerTicket">
                            Private System
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTicket" place="top" effect="float">
                    System cannot be displayed, due to privacy agreements.
                </ReactTooltip> 
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid> 

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoAuth}   style={{ width:"12rem" }} />
                    </Box>        
                </Grid>
                <Grid item xs={12}  md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="javascript:void(0)" rel="noreferrer"  data-tip data-for="registerTicket">
                            System Administrative
                        </a>                      
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" >
                        <p> <strong> Bithonor </strong>  </p>
                        <p> Developer Full Stack. </p>
                        <p> Vue JS, Nuxt JS, Node JS, Auth0, Multiservices, Docker, Typescript, Postgres, Css. </p>
                        <a href="javascript:void(0)" rel="noreferrer" data-tip data-for="registerTicket">
                            Private System
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTicket" place="top" effect="float">
                    System cannot be displayed, due to privacy agreements.
                </ReactTooltip> 
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid> 

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoNextReact}   style={{ width:"12rem" }} />
                    </Box>        
                </Grid>
                <Grid item xs={12}  md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="javascript:void(0)" rel="noreferrer"  data-tip data-for="registerTicket">
                            System Ticket
                        </a>                      
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" >
                        <p> <strong> Netsocs </strong>  </p>
                        <p> Developer Full Stack. </p>
                        <p> React JS, Next JS, Node JS, Kafka, Multiservices, Docker, Typescript, MySQL, Tailwind Css. </p>
                        <a href="javascript:void(0)" rel="noreferrer" data-tip data-for="registerTicket">
                            Private System
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTicket" place="top" effect="float">
                    System cannot be displayed, due to privacy agreements.
                </ReactTooltip> 
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid> 

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoITM} />
                    </Box>        
                </Grid>
                <Grid item xs={12}  md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://intimidades.net/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipITM">
                            Intimidades® - Empresa Multinivel
                        </a>                      
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" >
                        <p> <strong> Intimidades C.A. </strong>  </p>
                        <p> Developer Full Stack, Developer modules's user and administrator. </p>
                        <p> Vue JS, HTML, PHP, Codeigniter, JavaScript, Jquery, Postgres, Vuetify. </p>
                        <a href="https://intimidades.net/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipITM">
                            https://intimidades.net/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipITM" place="top" effect="float">
                    Go to https://intimidades.net/
                </ReactTooltip> 
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>       

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoMowa} />
                    </Box>        
                </Grid>
                <Grid item xs={12}  md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://www.mowa.com.pe/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipMOWA">
                            MOWA
                        </a>                      
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" >
                        <p> Developer Frontend. </p>
                        <p> React JS, HTML, Javascript, SCSS. </p>
                        <a href="https://www.mowa.com.pe/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipMOWA">
                            https://www.mowa.com.pe/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipMOWA" place="top" effect="float">
                    Go to https://www.mowa.com.pe/
                </ReactTooltip>
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
                        <a href="https://www.betconnections.com/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipBet">
                            BetConnections
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Frontend, Developer of diferents modules.  </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="https://www.betconnections.com/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipBet">
                            https://www.betconnections.com/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipBet" place="top" effect="float">
                    Go to https://www.betconnections.com/
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center"  >
                        <ResponsiveImgMaterialUi xs={LogoLuminotecnia} style={{ width:'20rem', backgroundColor:'black' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://www.luminotecnia.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTiplumi">
                            Luminotecnia
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="https://www.luminotecnia.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTiplumi">
                            https://www.luminotecnia.com.py/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTiplumi" place="top" effect="float">
                    Go to https://www.luminotecnia.com.py/
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoArrozal} style={{ width:'15rem' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://www.arrozal.com.py/inicio" rel="noreferrer" target="_BLANK" data-tip data-for="registerTiparro">  
                            Arrozal S.A.
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="https://www.arrozal.com.py/inicio" rel="noreferrer" target="_BLANK" data-tip data-for="registerTiparro">
                            https://www.arrozal.com.py/inicio
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTiparro" place="top" effect="float">
                    Go to https://www.arrozal.com.py/inicio
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoACamping} style={{ width:'10rem' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://www.camping44.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipCamp">  
                            Camping44
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="https://www.camping44.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipCamp">
                            https://www.camping44.com.py/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipCamp" place="top" effect="float">
                    Go to https://www.camping44.com.py/
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoCondesa} style={{ width:'15rem' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://www.conde.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipCond">  
                            Condesa
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="https://www.conde.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipCond">
                            https://www.conde.com.py/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipCond" place="top" effect="float">
                    Go to https://www.conde.com.py/
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoFrigorifico} style={{ width:'10rem' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://www.frigorificoconcepcion.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipFrig">  
                            Frigorifico Concepcion
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="https://www.frigorificoconcepcion.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipFrig">
                            https://www.frigorificoconcepcion.com.py/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipFrig" place="top" effect="float">
                    Go to https://www.frigorificoconcepcion.com.py/
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoEnvaco} style={{ width:'12rem' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://www.envaco.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipEnv">  
                            Envaco
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="https://www.envaco.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipEnv">
                            https://www.envaco.com.py/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipEnv" place="top" effect="float">
                    Go to https://www.envaco.com.py/
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoAlemaniacell} style={{ width:'10rem', backgroundColor:'black' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://www.alemaniacell.com/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipAll">
                            Alemaniacell
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="https://www.alemaniacell.com/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipAll">
                            https://www.alemaniacell.com/
                        </a> 
                    </Box>              
                </Grid>
            <ReactTooltip id="registerTipAll" place="top" effect="float">
                Go to https://www.alemaniacell.com/
            </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoInarco} style={{ width:'15rem' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://www.inarco.com.pe/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipInarco">  
                            Inarco
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="https://www.inarco.com.pe/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipInarco">
                        https://www.inarco.com.pe/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipInarco" place="top" effect="float">
                    Go to https://www.inarco.com.pe/
                </ReactTooltip>
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
                        <a href="https://www.dobermann.org/es/covencaucho" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipCVC">
                            Supervisory system for the Energy and Industrial Services Area
                        </a>                      
                    </Box>
                    <Box item xs={10} md={8}  pt={{ md:2 }} align="justify" >
                        <p><strong> Company Covencaucho Industrias S.A. </strong></p>
                        <p> Software, Developer Full Stack, all modules, App for Windows, Configuration panel eletrical, Supervisor System of 2 Industrial Boilers, Pressure, Temperature, and Liquid Level Sensors. </p>
                        <p> C#, MySQL, RS-485, Photoshop. </p>
                        <a href="https://www.mplan.io/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipCVC">
                            https://www.dobermann.org/es/covencaucho
                        </a>
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipCVC" place="top" effect="float">
                    Go to https://www.dobermann.org/es/covencaucho
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="5" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoNGO} style={{ width:'15rem' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://ngosaeca.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipNgo">  
                            NGO
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="https://ngosaeca.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipNgo">
                        https://ngosaeca.com.py/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipNgo" place="top" effect="float">
                    Go tohttps://ngosaeca.com.py/
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoFisae} style={{ width:'15rem' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="http://fisae.agenciawebporta.com/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipNgo">  
                            Fisae
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> HTML, PHP 5, JavaScript, Jquery, Bootstrap, MYSQL. </p>
                        <a href="http://fisae.agenciawebporta.com/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipNgo">
                        http://fisae.agenciawebporta.com/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipNgo" place="top" effect="float">
                    Go tohttp://fisae.agenciawebporta.com/
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoRoyal} style={{ width:'15rem' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://www.royalseguros.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipRoyal">  
                            Royal Seguros
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="https://www.royalseguros.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipRoyal">
                        https://www.royalseguros.com.py/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipRoyal" place="top" effect="float">
                    Go tohttps://www.royalseguros.com.py/
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoTrato} style={{ width:'15rem', backgroundColor: 'rgb(0, 58, 99)' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://www.tratohecho.com.py/catalogo" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipTrato">         
                            Trato Hecho catalogo
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="https://www.tratohecho.com.py/catalogo" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipTrato">
                        https://www.tratohecho.com.py/catalogo
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipTrato" place="top" effect="float">
                    Go tohttps://www.tratohecho.com.py/catalogo
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoAfter} style={{ width:'15rem' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://aftersix.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipAfter">         
                            After Six
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="https://aftersix.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipAfter">
                        https://aftersix.com.py/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipAfter" place="top" effect="float">
                    Go to https://aftersix.com.py/
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoAlex} style={{ width:'15rem' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://www.alex.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipAlex">         
                            Alex Ecomerce
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="https://www.alex.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipAlex">
                        https://www.alex.com.py/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipAlex" place="top" effect="float">
                    Go to https://www.alex.com.py/
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoArmazones} style={{ width:'15rem' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://www.armazones.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipArma">         
                            Armazones
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="https://www.armazones.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipArma">
                        https://www.armazones.com.py/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipArma" place="top" effect="float">
                    Go to https://www.armazones.com.py/
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoBalpar} style={{ width:'15rem' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://www.balpar.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipBalpar">         
                            Balpar S.A.
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="https://www.balpar.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipBalpar">
                        https://www.balpar.com.py/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipBalpar" place="top" effect="float">
                    Go to https://www.balpar.com.py/
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoBepsa} style={{ width:'15rem' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://www.bepsa.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipBepsa">         
                            Bepsa
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="https://www.bepsa.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipBepsa">
                        https://www.bepsa.com.py/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipBepsa" place="top" effect="float">
                    Go to https://www.bepsa.com.py/
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoBonus} style={{ width:'15rem' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="http://bonus.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipBonus">         
                            Bonus
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="http://bonus.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipBonus">
                        http://bonus.com.py/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipBonus" place="top" effect="float">
                    Go to http://bonus.com.py/
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoChaco} style={{ width:'15rem' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://www.chacointernacional.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipchaco">         
                            Chaco Internacional S.A.
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="https://www.chacointernacional.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipchaco">
                        https://www.chacointernacional.com.py/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipchaco" place="top" effect="float">
                    Go to https://www.chacointernacional.com.py/
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoDinelco} style={{ width:'15rem' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://www.dinelco.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipDinelco">         
                            Dinelco
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="https://www.dinelco.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipDinelco">
                        https://www.dinelco.com.py/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipDinelco" place="top" effect="float">
                    Go to https://www.dinelco.com.py/
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoElectro} style={{ width:'10rem' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://www.electromax.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipelectro">         
                            Elextro Max
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="https://www.electromax.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipelectro">
                        https://www.electromax.com.py/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipelectro" place="top" effect="float">
                    Go to https://www.electromax.com.py/
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoGG} style={{ width:'15rem' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://www.gonzalezgimenez.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipGG">         
                            Gonzales Gimenez
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="https://www.gonzalezgimenez.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipGG">
                        https://www.gonzalezgimenez.com.py/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipGG" place="top" effect="float">
                    Go to https://www.gonzalezgimenez.com.py/
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoGozalito} style={{ width:'15rem' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://www.tiendagonzalito.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipG">         
                            Tienda Gonzalito
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="https://www.tiendagonzalito.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipG">
                        https://www.tiendagonzalito.com.py/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipG" place="top" effect="float">
                    Go to https://www.tiendagonzalito.com.py/
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoKemsa} style={{ width:'15rem' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://www.kemsa.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipK">         
                            Kemsa
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="https://www.kemsa.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipK">
                        https://www.kemsa.com.py/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipK" place="top" effect="float">
                    Go to https://www.kemsa.com.py/
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoMG} style={{ width:'15rem' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://www.mgimportadora.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipMG">         
                            MG Importadora
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="https://www.mgimportadora.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipMG">
                        https://www.mgimportadora.com.py/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipMG" place="top" effect="float">
                    Go to https://www.mgimportadora.com.py/
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoOdontos} style={{ width:'15rem' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://odontos.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipO">         
                            Odontos
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Full Stack, Server administrator </p>
                        <p> HTML, PHP 5 , JavaScript, Bootstrap, css, </p>
                        <a href="https://odontos.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipO">
                        https://odontos.com.py/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipO" place="top" effect="float">
                    Go to https://odontos.com.py/
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoPanal} style={{ width:'15rem' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://www.panalseguros.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipPanal">         
                            Panal Seguros S. A.
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="https://www.panalseguros.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipPanal">
                        https://www.panalseguros.com.py/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipPanal" place="top" effect="float">
                    Go to https://www.panalseguros.com.py/
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoLFQ} style={{ width:'15rem' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://www.lqf.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTiplfq">         
                            La Quimica Farmaceutica S. A.
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="https://www.lqf.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTiplfq">
                        https://www.lqf.com.py/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTiplfq" place="top" effect="float">
                    Go to https://www.lqf.com.py/
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoRasil} style={{ width:'15rem' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://www.rasil.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipRasil">         
                            Rasil
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="https://www.rasil.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipRasil">
                        https://www.rasil.com.py/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipRasil" place="top" effect="float">
                    Go to https://www.rasil.com.py/
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoStart} style={{ width:'15rem' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://star.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipStart">         
                            Star
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="https://star.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipStart">
                        https://star.com.py/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipStart" place="top" effect="float">
                    Go to https://star.com.py/
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoUrbania} style={{ width:'15rem' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="http://urbania.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipUrbania">         
                            Urbania
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="http://urbania.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipUrbania">
                        http://urbania.com.py/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipUrbania" place="top" effect="float">
                    Go to http://urbania.com.py/
                </ReactTooltip>
            </Grid>    
            <Grid item xs={12} mt="10" style={{ background: '#E0E0E0', height:"2px" }}> </Grid>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={4}>
                    <Box col="12" pt={{ xs:10,  md:15 }} textAlign="center" >
                        <ResponsiveImgMaterialUi xs={LogoYasui} style={{ width:'15rem' }} />
                    </Box>        
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box col="12" pt={{ md:25 }} className={classes.textCollegeTitle} align="justify">  
                        <a href="https://www.yasui.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipYasui">         
                            Yasui
                        </a>                       
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" justifyContent="justify" >
                        <p> Developer Full Stack </p>
                        <p> Vue JS, HTML, PHP, Laravel, JavaScript, Bootstrap, css. </p>
                        <a href="https://www.yasui.com.py/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipYasui">
                        https://www.yasui.com.py/
                        </a> 
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipYasui" place="top" effect="float">
                    Go to https://www.yasui.com.py/
                </ReactTooltip>
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
                        <a href="https://gerarca.github.io/ReactJS-Weather/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipReactj1">
                            React JS App Weather
                        </a>                      
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" >
                        <p> App Weather </p>
                        <p> Javascript, JSX, React Props, Design Responsive, API OpenWeather , API React Maps Google, Boostrat 4. </p>
                        <a href="https://gerarca.github.io/ReactJS-Weather/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipReactj1">
                            https://gerarca.github.io/ReactJS-Weather/
                        </a>
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipReactj1" place="top" effect="float">
                    Go to https://gerarca.github.io/ReactJS-Weather/
                </ReactTooltip>
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
                        <a href="https://gerarca.github.io/ReactJSNewsExample/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipReactj2">
                            React JS App News Example
                        </a>                      
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" >
                        <p> App News </p>
                        <p> Javascript, JSX, Json, React Props, React Radium, React Hook, Design Responsive </p>
                        <a href="https://gerarca.github.io/ReactJSNewsExample/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipReactj2">
                            https://gerarca.github.io/ReactJSNewsExample/
                        </a>
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipReactj2" place="top" effect="float">
                    Go to https://gerarca.github.io/ReactJSNewsExample/
                </ReactTooltip>
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
                        <a href="https://gerarca.github.io/ReactJSSimpleLogin/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipReactj3">
                            React JS App Simple Login Example
                        </a>                      
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" >
                        <p> App Simple Login </p>
                        <p> Javascript, JSX, Json, React Props, React Hook, Design Responsive. </p>
                        <a href="https://gerarca.github.io/ReactJSSimpleLogin/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipReactj3">
                            https://gerarca.github.io/ReactJSSimpleLogin/
                        </a>
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipReactj3" place="top" effect="float">
                    Go to https://gerarca.github.io/ReactJSSimpleLogin/
                </ReactTooltip>
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
                        <a href="https://gerarca.github.io/ReactJSPropsAnimated/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipReactj4">
                            React JS App Admin Users
                        </a>                      
                    </Box>
                    <Box col="12" pt={{ md:2 }} align="justify" >
                        <p>  App Admin Users </p>
                        <p> Javascript, JSX, Json, React Props, React Hook. </p>
                        <a href="https://gerarca.github.io/ReactJSPropsAnimated/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipReactj4">
                            https://gerarca.github.io/ReactJSPropsAnimated/
                        </a>
                    </Box>              
                </Grid>
                <ReactTooltip id="registerTipReactj4" place="top" effect="float">
                    Go to https://gerarca.github.io/ReactJSPropsAnimated/
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