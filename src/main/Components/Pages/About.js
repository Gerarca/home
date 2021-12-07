import {
    Box,
    Typography,
    useMediaQuery,
    Button,
    Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import ResponsiveImgMaterialUi from "responsive-img-material-ui";
import ReactTooltip from "react-tooltip";
import LogoWhasap from "../../assets/img/ws.png";
import Logotelegram from "../../assets/img/telegram.png";
import LogoLinkedin from "../../assets/img/linkedin.png";
import Logoemail from "../../assets/img/email.svg.png";
import Logophone from "../../assets/img/phone.svg.png";

const About = () => {
const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

return (
    <div>
        <Box py={20} textAlign="center" >
            <Grid container xs={9} sm={6} md={3} spacing={2} alignItems="center" justifyContent="center" className="contact"> 
                <Grid item md={12}>
                    <Typography variant="h5" > Contact me  </Typography>         
                </Grid>
                <Grid item xs={12} alignItems="center" justifyContent="center" style={{ margin:'auto 0', display:'flex' }} >
                    <Box p={1}>  
                        <a href="https://api.whatsapp.com/send?phone=584127817682" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipws" >
                            <ResponsiveImgMaterialUi xs={LogoWhasap} style={{ width:"3rem" }}  />
                        </a>      
                        <ReactTooltip id="registerTipws" place="top" effect="float">
                            Contact me at Whatsapp
                        </ReactTooltip>             
                    </Box>       
                    <Box p={1}>  
                        <a href="https://t.me/GersonAriasCardenas" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipT">
                            <ResponsiveImgMaterialUi xs={Logotelegram} style={{ width:"3rem" }}  />
                        </a>        
                        <ReactTooltip id="registerTipT" place="top" effect="float">
                            Contact me at Telegram
                        </ReactTooltip>               
                    </Box>  
                    <Box p={1}>  
                        <a href="https://www.linkedin.com/in/gerson-arias-b19437131/" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipL">
                            <ResponsiveImgMaterialUi xs={LogoLinkedin} style={{ width:"3rem" }}  />
                        </a>    
                        <ReactTooltip id="registerTipL" place="top" effect="float">
                            Visit my profile oj Linkedin
                        </ReactTooltip>                  
                    </Box>     
                    <Box p={1}>   
                        <a href="mailto:gerarca88@gmail.com" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipGmail">
                            <ResponsiveImgMaterialUi xs={Logoemail} style={{ width:"3rem" }}  />
                        </a>        
                        <ReactTooltip id="registerTipGmail" place="top" effect="float">
                            Send me some email to gerarca88@gmail.com
                        </ReactTooltip>                    
                    </Box> 
                    <Box p={1}>   
                        <a href="tel:+584245654647" rel="noreferrer" target="_BLANK" data-tip data-for="registerTipPhone">
                            <ResponsiveImgMaterialUi xs={Logophone} style={{ width:"3rem" }}  />
                        </a>    
                        <ReactTooltip id="registerTipPhone" place="top" effect="float">
                            Call me at +584245654647
                        </ReactTooltip>                  
                    </Box> 
                </Grid>
            </Grid>  
        </Box>
        {isMobile ? (
            <Grid container justify="space-between">
            <Grid item>
                <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/Briefcase"
                >
                <ChevronLeftIcon />
                <Typography variant="button">Briefcase</Typography>
                <BusinessCenterOutlinedIcon style={{ marginLeft: 15 }} />
                </Button>
            </Grid>
            </Grid>
        ) : (
            <></>
        )}
    </div>
);
};
export default About;