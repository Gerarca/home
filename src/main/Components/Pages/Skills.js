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
import SchoolIcon from "@material-ui/icons/School";
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import ResponsiveImgMaterialUi from "responsive-img-material-ui";
import LogoReact from "../../assets/img/react.png";
import LogoVue  from "../../assets/img/vuejs.png";
import LogoNuxt  from "../../assets/img/nuxtjs.svg.png";
import LogoPHP from "../../assets/img/php.png";
import LogoJavascript  from "../../assets/img/javascript.png";
import LogoHTML from "../../assets/img/html.png";
import LogoCSS from "../../assets/img/css.png";
import LogoBoostrap from "../../assets/img/bootstrap.png";
import LogoTailwind from "../../assets/img/Tailwind.png";
import LogoVuetify from "../../assets/img/vuetify.png";
import LogoMaterialUI from "../../assets/img/material-ui.svg";
import LogoNode from "../../assets/img/node.png";
import LogoExpress from "../../assets/img/express.png";
import LogoGraphQL from "../../assets/img/graphql.png";
import LogoPostgres from "../../assets/img/postgres.png";
import LogoMysql from "../../assets/img/mysql.png";
import LogoOracle from "../../assets/img/oracle.png";
import LogoMongo from "../../assets/img/mongo.png";
import LogoControlLogic from "../../assets/img/controllogic.png";
import LogoZelioSoft from "../../assets/img/zeliosoft.png";
import LogoAllenBradley from "../../assets/img/allenbradley.png";
import LogoSneider from "../../assets/img/sneiderelectric.png";
import LogoSiemens from "../../assets/img/siemens.png";
import LogoABB from "../../assets/img/abb.png";
import LogoGit from "../../assets/img/git.png";
import LogoGitLab from "../../assets/img/gitlab.png";
import LogoBitBucket from "../../assets/img/bitbucket.png";
import LogoVSC from "../../assets/img/visualstudio.svg";
import LogoPhotoshop from "../../assets/img/photoshop.png";
import Laravel from "../../assets/img/laravel.svg";
import Docker from "../../assets/img/docker.webp";
import LogoAngular from "../../assets/img/angular.png";
import LogoTypescript from "../../assets/img/typescript.png";
import LogoNextJS from "../../assets/img/next-js.png";
import LogoTablePlus from "../../assets/img/tablePlus.png";
import LogoMYSQLWorkBench from "../../assets/img/mysqlworkbench.png"
import LogoPostman from "../../assets/img/postman.png";
import LogoCypress from "../../assets/img/cypress.png";
import LogoJest from "../../assets/img/jest.png";

const Skills = () => {
const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

return (
    <div>
        <Box textAlign="center" pt={{ xs:20 }} px={4}>
            <Grid container spacing={2} xs={12} className="skillHover" style={{ background:'#f1f1f1', borderRadius:'10px', marginTop: '-3rem' }} >             
                <Grid item xs={12} md={2} textAlign="center" style={{ margin:'auto'}}>
                    <Typography variant="h5">Front End</Typography>
                </Grid>        
                <Grid item xs={12} md={10}> 
                    <Grid container spacing={3} xs={12} md={12} alignItems="center" justifyContent="center" >
                        <Grid item style={{ margin:'auto 0' }}>
                            <Grid alignItems="center" justifyContent="center" >
                                <ResponsiveImgMaterialUi xs={LogoReact} style={{ width:"5rem" }}  />
                            </Grid>
                            <Grid alignItems="center" justifyContent="center" style={{ marginTop: "-0.5rem" }} >
                                <Typography className="textSkill">React JS</Typography>
                            </Grid>                 
                        </Grid>
                        <Grid item style={{ margin:'auto 0' }}>
                            <Grid alignItems="center" justifyContent="center" >
                                <ResponsiveImgMaterialUi xs={LogoNextJS} style={{ width:"6rem" }}  />
                            </Grid>
                            <Grid alignItems="center" justifyContent="center" >
                                <Typography className="textSkill">Next JS</Typography>
                            </Grid>                 
                        </Grid>
                        <Grid item style={{ margin:'auto 0' }}>
                            <Grid alignItems="center" justifyContent="center" >
                                <ResponsiveImgMaterialUi xs={LogoAngular} style={{ width:"3rem" }}  />
                            </Grid>
                            <Grid alignItems="center" justifyContent="center" style={{ marginTop:'-0.1rem' }}>
                                <Typography className="textSkill">Angular JS</Typography>
                            </Grid>                 
                        </Grid>
                        <Grid item style={{ margin:'auto 0' }}> 
                            <Grid alignItems="center" justifyContent="center">
                                <ResponsiveImgMaterialUi xs={LogoVue} style={{ width:"3.5rem" }} />
                            </Grid>
                            <Grid alignItems="center" justifyContent="center">
                                <Typography className="textSkill">Vue JS</Typography>
                            </Grid>                               
                        </Grid>    
                        <Grid item style={{ margin:'auto 0' }}>
                            <Grid alignItems="center" justifyContent="center">
                                <ResponsiveImgMaterialUi xs={LogoNuxt} style={{ width:"4rem" }} />
                            </Grid>
                            <Grid alignItems="center" justifyContent="center">
                                <Typography className="textSkill">Nuxt JS</Typography>
                            </Grid>                               
                        </Grid>
                        <Grid item style={{ margin:'auto 0' }}> 
                            <Box col="12">
                                <ResponsiveImgMaterialUi xs={LogoPHP} style={{ width:"6rem" }} />
                            </Box>  
                            <Box col="12" alignItems='center' justifyContent="center" style={{ margin:'-0.1rem 0 0 0' }}>
                                <Typography className="textSkill">PHP</Typography>
                            </Box>  
                        </Grid>
                        <Grid item style={{ margin:'auto 0' }}> 
                            <Box col="12">
                                <ResponsiveImgMaterialUi xs={Laravel} style={{ width:"3rem" }} />
                            </Box>  
                            <Box col="12" alignItems='center' justifyContent="center" style={{ margin:'-0.5rem 0 0 0' }}>
                                <Typography className="textSkill">Laravel</Typography>
                            </Box>  
                        </Grid>
                        <Grid item style={{ margin:'auto 0' }}> 
                            <Box col="12">
                                <ResponsiveImgMaterialUi xs={LogoHTML} style={{ width:"3rem" }} />
                            </Box>  
                            <Box col="12" alignItems='center' justifyContent="center" style={{ margin:'-0.5rem 0 0 0' }}>
                                <Typography className="textSkill">HTML</Typography>
                            </Box>  
                        </Grid>
                        <Grid item style={{ margin:'auto 0' }}>
                            <Box col="12">
                                <ResponsiveImgMaterialUi xs={LogoJavascript} style={{ width:"3rem" }} />
                            </Box>  
                            <Box col="12" alignItems='center' justifyContent="center" style={{ margin:'-0.5rem 0 0 0' }}>
                                <Typography className="textSkill">Javascript</Typography>
                            </Box>  
                        </Grid>    
                        <Grid item style={{ margin:'auto 0' }}>
                            <Box col="12">
                                <ResponsiveImgMaterialUi xs={LogoTypescript} style={{ width:"3rem" }} />
                            </Box>  
                            <Box col="12" alignItems='center' justifyContent="center" style={{ margin:'-0.5rem 0 0 0' }}>
                                <Typography className="textSkill">Typescript</Typography>
                            </Box>  
                        </Grid>                           
                    </Grid> 
                </Grid>                
            </Grid> 

            <Grid container spacing={2} xs={12} className="skillHover" style={{ background:'#f1f1f1', borderRadius:'10px', marginTop:'2rem' }} >             
                <Grid item xs={12} md={2} textAlign="center" style={{ margin:'auto'}}>
                    <Typography variant="h5">CSS</Typography>
                </Grid>        
                <Grid item xs={12} md={10}> 
                    <Grid container spacing={3} xs={12} md={12} alignItems="center" justifyContent="center" >                        
                        <Grid item style={{ margin:'auto 0' }}>
                            <Box col="12">
                                <ResponsiveImgMaterialUi xs={LogoBoostrap} style={{ width:"5rem" }} />
                            </Box>  
                            <Box col="12" alignItems='center' justifyContent="center" style={{ margin:'-0.5rem 0 0 0' }}>
                                <Typography className="textSkill">Bootstrap</Typography>
                            </Box>  
                        </Grid>  
                        <Grid item style={{ margin:'auto 0' }}> 
                            <Box col="12">
                                <ResponsiveImgMaterialUi xs={LogoTailwind} style={{ width:"3.5rem" }} />
                            </Box>  
                            <Box col="12" alignItems='center' justifyContent="center" style={{ margin:'-0.5rem 0 0 0' }}>
                                <Typography className="textSkill">Tailwind</Typography>
                            </Box>  
                        </Grid>    
                        <Grid item style={{ margin:'auto 0' }}>
                            <Box col="12">
                                <ResponsiveImgMaterialUi xs={LogoVuetify} style={{ width:"3rem" }} />
                            </Box>  
                            <Box col="12" alignItems='center' justifyContent="center" style={{ margin:'-0.5rem 0 0 0' }}>
                                <Typography className="textSkill">Vuetify</Typography>
                            </Box>  
                        </Grid>       
                        <Grid item style={{ margin:'auto 0' }}>
                            <Box col="12">
                                <ResponsiveImgMaterialUi xs={LogoMaterialUI} style={{ width:"4rem" }} />
                            </Box>  
                            <Box col="12" alignItems='center' justifyContent="center" style={{ margin:'-0.5rem 0 0 0' }}>
                                <Typography className="textSkill">Material UI</Typography>
                            </Box>  
                        </Grid> 
                        <Grid item style={{ margin:'auto 0' }}>
                            <Box col="12">
                                <ResponsiveImgMaterialUi xs={LogoCSS} style={{ width:"3rem" }} />
                            </Box>  
                            <Box col="12" alignItems='center' justifyContent="center" style={{ margin:'-0.3rem 0 0 0' }}>
                                <Typography className="textSkill">CSS</Typography>
                            </Box>  
                        </Grid> 
                    </Grid> 
                </Grid>                
            </Grid> 

            <Grid container spacing={2} xs={12} className="skillHover" style={{ background:'#f1f1f1', borderRadius:'10px', marginTop:'2rem' }} >             
                <Grid item xs={12} md={2} textAlign="center" style={{ margin:'auto'}}>
                    <Typography variant="h5">Test</Typography>
                </Grid>        
                <Grid item xs={12} md={10}> 
                    <Grid container spacing={3} xs={12} md={12} alignItems="center" justifyContent="center" >                        
                        <Grid item style={{ margin:'auto 0' }}>
                            <Box col="12">
                                <ResponsiveImgMaterialUi xs={LogoCypress} style={{ width:"10rem" }} />
                            </Box>  
                            <Box col="12" alignItems='center' justifyContent="center" style={{ margin:'-0.5rem 0 0 0' }}>
                                <Typography className="textSkill">Cypress </Typography>
                            </Box>  
                        </Grid>                       
                        <Grid item style={{ margin:'auto 0' }}>
                            <Box col="12">
                                <ResponsiveImgMaterialUi xs={LogoJest} style={{ width:"2.5rem" }} />
                            </Box>  
                            <Box col="12" alignItems='center' justifyContent="center" style={{ margin:'-0.5rem 0 0 0' }}>
                                <Typography className="textSkill">Jets </Typography>
                            </Box>  
                        </Grid>  
                    </Grid> 
                </Grid>                
            </Grid> 

            <Grid container spacing={2} xs={12} className="skillHover" style={{ background:'#f1f1f1', borderRadius:'10px', marginTop:'2rem' }} >             
                <Grid item xs={12} md={2} textAlign="center" style={{ margin:'auto'}}>
                    <Typography variant="h5">Back End</Typography>
                </Grid>        
                <Grid item xs={12} md={10}> 
                    <Grid container spacing={3} xs={12} md={12} alignItems="left" justifyContent="center" >
                        <Grid item style={{ margin:'auto 0' }}>
                            <Grid alignItems="center" justifyContent="center" >
                                <ResponsiveImgMaterialUi xs={LogoNode} style={{ width:"7rem" }}  />
                            </Grid>
                            <Grid alignItems="center" justifyContent="center" style={{ marginTop: "-0.5rem" }} >
                                <Typography className="textSkill">Node JS</Typography>
                            </Grid>                 
                        </Grid>
                        <Grid item style={{ margin:'auto 0' }}> 
                            <Grid alignItems="center" justifyContent="center">
                                <ResponsiveImgMaterialUi xs={LogoExpress} style={{ width:"8rem" }} />
                            </Grid>
                            <Grid alignItems="center" justifyContent="center">
                                <Typography className="textSkill">Express JS</Typography>
                            </Grid>                               
                        </Grid>    
                        <Grid item style={{ margin:'auto 0' }}>
                            <Grid alignItems="center" justifyContent="center">
                                <ResponsiveImgMaterialUi xs={LogoGraphQL} style={{ width:"8rem" }} />
                            </Grid>
                            <Grid alignItems="center" justifyContent="center">
                                <Typography className="textSkill">GraphQL</Typography>
                            </Grid>                               
                        </Grid>
                        <Grid item style={{ margin:'auto 0' }}>
                            <Grid alignItems="center" justifyContent="center">
                                <ResponsiveImgMaterialUi xs={Docker} style={{ width:"3rem" }} />
                            </Grid>
                            <Grid alignItems="center" justifyContent="center">
                                <Typography className="textSkill">Docker</Typography>
                            </Grid>                               
                        </Grid>
                        <Grid item style={{ margin:'auto 0' }}>
                            <Grid alignItems="center" justifyContent="center" >
                                <ResponsiveImgMaterialUi xs={Laravel} style={{ width:"3rem" }}  />
                            </Grid>
                            <Grid alignItems="center" justifyContent="center" style={{ marginTop: "-0.6rem" }} >
                                <Typography className="textSkill">Laravel</Typography>
                            </Grid>                 
                        </Grid>
                    </Grid> 
                </Grid>                
            </Grid> 

            <Grid container spacing={2} xs={12} className="skillHover" style={{ background:'#f1f1f1', borderRadius:'10px', marginTop:'2rem' }} >             
                <Grid item xs={12} md={2} textAlign="center" style={{ margin:'auto'}}>
                    <Typography variant="h5">Data Base</Typography>
                </Grid>        
                <Grid item xs={12} md={10}> 
                    <Grid container spacing={3} xs={12} md={12} alignItems="left" justifyContent="center" >
                        <Grid item style={{ margin:'auto 0' }}>
                            <Grid alignItems="center" justifyContent="center" >
                                <ResponsiveImgMaterialUi xs={LogoPostgres} style={{ width:"7rem" }}  />
                            </Grid>
                            <Grid alignItems="center" justifyContent="center" >
                                <Typography className="textSkill">Postgres</Typography>
                            </Grid>                 
                        </Grid>
                        <Grid item style={{ margin:'auto 0' }}>
                            <Grid alignItems="center" justifyContent="center">
                                <ResponsiveImgMaterialUi xs={LogoOracle} style={{ width:"8rem" }} />
                            </Grid>
                            <Grid alignItems="center" justifyContent="center" style={{ marginTop:'-1rem' }}>
                                <Typography className="textSkill">Oracle</Typography>
                            </Grid>                               
                        </Grid>    
                        <Grid item style={{ margin:'auto 0' }}>
                            <Grid alignItems="center" justifyContent="center">
                                <ResponsiveImgMaterialUi xs={LogoMysql} style={{ width:"8rem" }} />
                            </Grid>
                            <Grid alignItems="center" justifyContent="center">
                                <Typography className="textSkill">MySQl</Typography>
                            </Grid>                               
                        </Grid>
                        <Grid item style={{ margin:'auto 0' }}>
                            <Grid alignItems="center" justifyContent="center">
                                <ResponsiveImgMaterialUi xs={LogoMongo} style={{ width:"8rem" }} />
                            </Grid>
                            <Grid alignItems="center" justifyContent="center">
                                <Typography className="textSkill">Mongo DB</Typography>
                            </Grid>                               
                        </Grid>
                    </Grid> 
                </Grid>                
            </Grid> 

            <Grid container spacing={2} xs={12} className="skillHover" style={{ background:'#f1f1f1', borderRadius:'10px', marginTop:'2rem' }} >             
                <Grid item xs={12} md={2} textAlign="center" style={{ margin:'auto'}}>
                    <Typography variant="h5">PLC</Typography>
                </Grid>        
                <Grid item xs={12} md={10}> 
                    <Grid container spacing={3} xs={12} md={12} alignItems="left" justifyContent="center" >
                        <Grid item style={{ margin:'auto 0' }}>
                            <Grid alignItems="center" justifyContent="center" >
                                <ResponsiveImgMaterialUi xs={LogoControlLogic} style={{ width:"7rem" }}  />
                            </Grid>
                            <Grid alignItems="center" justifyContent="center" style={{ marginBottom:'-1.5rem' }}>
                                <Typography className="textSkill">Control Logic</Typography>
                            </Grid>                 
                        </Grid>
                        <Grid item style={{ margin:'auto 0' }}>
                            <Grid alignItems="center" justifyContent="center">
                                <ResponsiveImgMaterialUi xs={LogoZelioSoft} style={{ width:"4rem" }} />
                            </Grid>
                            <Grid alignItems="center" justifyContent="center">
                                <Typography className="textSkill">Zeleio Soft</Typography>
                            </Grid>                               
                        </Grid>    
                        <Grid item style={{ margin:'auto 0' }}>
                            <Grid alignItems="center" justifyContent="center">
                                <ResponsiveImgMaterialUi xs={LogoAllenBradley} style={{ width:"8rem" }} />
                            </Grid>
                            <Grid alignItems="center" justifyContent="center">
                                <Typography className="textSkill">Allen Bradley</Typography>
                            </Grid>                               
                        </Grid>
                        <Grid item style={{ margin:'auto 0' }}>
                            <Grid alignItems="center" justifyContent="center">
                                <ResponsiveImgMaterialUi xs={LogoSiemens} style={{ width:"8rem" }} />
                            </Grid>
                            <Grid alignItems="center" justifyContent="center" style={{ marginBottom:'-1.5rem' }}>
                                <Typography className="textSkill">Siemens</Typography>
                            </Grid>                               
                        </Grid>
                        <Grid item style={{ margin:'auto 0' }}>
                            <Grid alignItems="center" justifyContent="center">
                                <ResponsiveImgMaterialUi xs={LogoABB} style={{ width:"6rem" }} />
                            </Grid>
                            <Grid alignItems="center" justifyContent="center" style={{ marginBottom:'-1rem' }}>
                                <Typography className="textSkill">ABB</Typography>
                            </Grid>                               
                        </Grid>
                        <Grid item style={{ margin:'auto 0' }}>
                            <Grid alignItems="center" justifyContent="center">
                                <ResponsiveImgMaterialUi xs={LogoSneider} style={{ width:"4rem" }} />
                            </Grid>
                            <Grid alignItems="center" justifyContent="center">
                                <Typography className="textSkill">Sneider Electric</Typography>
                            </Grid>                               
                        </Grid>
                    </Grid> 
                </Grid>                
            </Grid> 

            <Grid container spacing={2} xs={12} className="skillHover" style={{ background:'#f1f1f1', borderRadius:'10px', marginTop:'2rem', marginBottom:'3rem' }} >             
                <Grid item xs={12} md={2} textAlign="center" style={{ margin:'auto'}}>
                    <Typography variant="h5">Tools</Typography>
                </Grid>        
                <Grid item xs={12} md={10}> 
                    <Grid container spacing={3} xs={12} md={12} alignItems="left" justifyContent="center" >
                        <Grid item style={{ margin:'auto 0' }}>
                            <Grid alignItems="center" justifyContent="center" >
                                <ResponsiveImgMaterialUi xs={LogoGit} style={{ width:"4rem" }}  />
                            </Grid>
                            <Grid alignItems="center" justifyContent="center" style={{ marginBottom:'-1rem' }}>
                                <Typography className="textSkill">Git</Typography>
                            </Grid>                 
                        </Grid>
                        <Grid item style={{ margin:'auto 0' }}>
                            <Grid alignItems="center" justifyContent="center">
                                <ResponsiveImgMaterialUi xs={LogoGitLab} style={{ width:"6rem" }} />
                            </Grid>
                            <Grid alignItems="center" justifyContent="center" style={{ marginBottom:'-1rem' }}>
                                <Typography className="textSkill">GitLab</Typography>
                            </Grid>                               
                        </Grid>    
                        <Grid item style={{ margin:'auto 0' }}>
                            <Grid alignItems="center" justifyContent="center">
                                <ResponsiveImgMaterialUi xs={LogoBitBucket} style={{ width:"8rem" }} />
                            </Grid>
                            <Grid alignItems="center" justifyContent="center" style={{ marginBottom:'-1rem' }}>
                                <Typography className="textSkill">BitBucket</Typography>
                            </Grid>                               
                        </Grid>
                        <Grid item style={{ margin:'auto 0' }}>
                            <Grid alignItems="center" justifyContent="center">
                                <ResponsiveImgMaterialUi xs={LogoPhotoshop} style={{ width:"3rem" }} />
                            </Grid>
                            <Grid alignItems="center" justifyContent="center" style={{ marginBottom: '-0.1rem' }}>
                                <Typography className="textSkill">Photoshop</Typography>
                            </Grid>                               
                        </Grid>
                        <Grid item style={{ margin:'auto 0' }}>
                            <Grid alignItems="center" justifyContent="center">
                                <ResponsiveImgMaterialUi xs={LogoVSC} style={{ width:"2rem" }} />
                            </Grid>
                            <Grid alignItems="center" justifyContent="center" style={{ marginBottom:"-0.5rem" }}>
                                <Typography className="textSkill">VS Code</Typography>
                            </Grid>                               
                        </Grid>
                        <Grid item style={{ margin:'auto 0' }}>
                            <Grid alignItems="center" justifyContent="center">
                                <ResponsiveImgMaterialUi xs={LogoTablePlus} style={{ width:"3rem" }} />
                            </Grid>
                            <Grid alignItems="center" justifyContent="center" style={{ marginTop:"-0.5rem" }}>
                                <Typography className="textSkill">Table Plus</Typography>
                            </Grid>                               
                        </Grid>
                        <Grid item style={{ margin:'auto 0' }}>
                            <Grid alignItems="center" justifyContent="center">
                                <ResponsiveImgMaterialUi xs={LogoMYSQLWorkBench} style={{ width:"3rem" }} />
                            </Grid>
                            <Grid alignItems="center" justifyContent="center"  style={{ marginTop:"-0.5rem" }}>
                                <Typography className="textSkill">WorkBench</Typography>
                            </Grid>                               
                        </Grid>
                        <Grid item style={{ margin:'auto 0' }}>
                            <Grid alignItems="center" justifyContent="center">
                                <ResponsiveImgMaterialUi xs={LogoPostman} style={{ width:"3rem" }} />
                            </Grid>
                            <Grid alignItems="center" justifyContent="center"  style={{ marginTop:"-0.5rem" }}>
                                <Typography className="textSkill">Postman API</Typography>
                            </Grid>                               
                        </Grid>
                    </Grid> 
                </Grid>                
            </Grid> 

        </Box>
        {isMobile ? (
            <Grid container justify="space-between" style={{ marginTop:'3rem' }}>
            <Grid item>
                <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/College"
                >
                <ChevronLeftIcon />
                <Typography variant="button">College</Typography>
                <SchoolIcon style={{ marginLeft: 15 }} />
                </Button>
            </Grid>
            <Grid item>
                <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/Briefcase"
                >
                <BusinessCenterOutlinedIcon style={{ marginRight: 15 }} />
                <Typography variant="button">Briefcase</Typography>
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
export default Skills;

