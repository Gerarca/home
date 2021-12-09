import React from 'react';
import {
    Box,
    Grid
} from "@material-ui/core";
import { Link, Redirect } from 'react-router-dom';
import ImgStruard from "../../assets/img/stuard.png";

class NotFoundPage extends React.Component{
    render(){
        return <div> 
                    <Box px={4} m={{ xs:15 }} textAlign="center" justifyContent="center">
                        <Grid container xs={12} spacing={2} alignItems="center" justifyContent="center">
                            <Box  col={12}> 
                                <div style={{ margin:'auto' }}>
                                    <img src={ImgStruard} alt="Stuard" width="300"/>
                                </div>                         
                                <h1 className="text404"> Error 404 Page Not Found </h1>                        
                                <p style={{textAlign:"center"}}>
                                <Link to="/">Go to Home </Link>
                                </p>
                                <Redirect to="/" />
                            </Box>                            
                        </Grid>
                    </Box>
                </div>;
    }
}
export default NotFoundPage;