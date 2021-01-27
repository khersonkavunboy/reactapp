import React from 'react'
import {Dialog, DialogTitle} from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import {useStylePopup} from "./useStylePopup";

export const Popup = (props) => {
    const {title, children, openPopup, setOpenPopup} = props;
    const classes = useStylePopup();

    return (
        <Dialog open={ openPopup } onBackdropClick={ () => setOpenPopup(false) } onEscapeKeyDown={ () => setOpenPopup(false)  }>
            <DialogTitle>
                <div>
                    <Typography variant="h4" className={classes.root}>{title}</Typography>
                    <Button variant="contained" color="secondary" className={classes.closeButton} onClick={ () => setOpenPopup(false) }><CloseIcon/></Button>
                </div>
            </DialogTitle>
            <DialogContent dividers >{children}</DialogContent>
        </Dialog>
    );
};