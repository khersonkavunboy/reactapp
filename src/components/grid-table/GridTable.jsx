import React from 'react';
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height:550,
    '& .MuiDataGrid-columnsContainer': {
      backgroundColor: 'bisque',
      fontSize: 17
    },
    '& .MuiDataGrid-viewport':{
      backgroundColor:'aliceblue',
      fontSize:16
    }
  },
});



export default function GridTable(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <DataGrid rows={props.rows} columns={props.columns} pageSize={10} />
    </div>
  );
} 