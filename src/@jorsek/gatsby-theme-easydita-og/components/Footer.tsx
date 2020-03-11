
import React from "react";
import { Theme, makeStyles } from "@material-ui/core";

const withStyles = makeStyles((theme: Theme) => {
    return {
        footer: {
            backgroundColor: theme.palette.grey[400],
            color: theme.palette.getContrastText(theme.palette.grey[300]),
            padding: theme.spacing(3),
            width: "100%"
        },
    }
});

export default (props: any) => {
    const classes = withStyles(props);
    
    return (
        <div className={classes.footer}>
            Customized footer content.
        </div>
    );
}