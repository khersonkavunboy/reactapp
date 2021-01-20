import {makeStyles} from "@material-ui/core";

export const useStylePopup = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
        fontFamily: 'Vollko',
        color:"black"
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(2),
    }
}));