import {makeStyles} from "@material-ui/core";

export const makeStylesPopup = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
        fontFamily: [
            'Vollko',
            'cursive',
        ].join(','),
        color:"black"
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(2),
    }
}));