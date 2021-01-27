import React from 'react';
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
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
    <div className={classes.root} style={{ height: 500, width: '90%', left:'5%', marginTop:'30px' }}>
      <DataGrid rows={props.rows} columns={props.columns} pageSize={10} />
    </div>
  );
} 