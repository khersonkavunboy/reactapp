import React from 'react';
import {FormControl, InputLabel, makeStyles, MenuItem, Select} from "@material-ui/core";



const useStyles = makeStyles(() => ({ formControl: {  width: 360,  marginTop:20 }}));

export const MuiSelect = (props)=>{
    const styles = useStyles();
    const {labelText, selectTitleText, id, value, name, onChange, data } = props;
  return(
      <div>
          <label>{labelText}</label>
          <FormControl variant="outlined" className={styles.formControl}>
              <InputLabel id={id}>{selectTitleText}</InputLabel>
              <Select id={id} value={value} name={name}
                      onChange={onChange}>
                  <MenuItem value=""><em>None</em></MenuItem>
                  {
                      data.map((item, key) => (<MenuItem value={item.id} key={key}>{item.nameService}</MenuItem>))
                  }
              </Select>
          </FormControl>
      </div>
  );
};