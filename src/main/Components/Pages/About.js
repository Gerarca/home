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

const About = () => {
const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

return (
    <div>
        <Box py={20} textAlign="center">
            <Typography variant="h2">About Page</Typography>
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