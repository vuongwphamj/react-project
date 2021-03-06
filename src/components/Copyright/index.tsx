import React from 'react';
import { Typography, Link } from "@material-ui/core";

export default () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
            vuongpham.tek@gmail.com
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}