import React from 'react';
import { Redirect } from 'react-router-dom';
import Paper from "@material-ui/core/Paper";
import ResponsiveImgMaterialUi from "responsive-img-material-ui";
import main from "../../assets/img/brain.gif";

const NotFoundPage = () => {

    return (
        <Paper style={{ background: 'black', height: '100vh'}}>
            <ResponsiveImgMaterialUi xs={main} />
            <Redirect to="/" />
        </Paper>
    );
};

export default NotFoundPage;
