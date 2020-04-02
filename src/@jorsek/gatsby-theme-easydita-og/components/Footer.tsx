
import React from "react";
import { Theme, makeStyles } from "@material-ui/core";

const withStyles = makeStyles((theme: Theme) => {
    return {
        footer: {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.dark,
            padding: theme.spacing(3),
            width: "66.666666666%"
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