import {Grid} from '@material-ui/core';
import {IComponentWithChildren} from '../../../models';
import React from 'react';

interface IRowProps extends IComponentWithChildren {
  justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  align?: 'center' | 'flex-start' | 'flex-end';
  classes?: any;
}

export function Row({children, classes, justify = 'center', align = 'center'}: IRowProps) {
  return (
    <Grid container direction="row" justify={justify} alignItems={align} classes={{...classes}} item>
      {children}
    </Grid>
  );
}
