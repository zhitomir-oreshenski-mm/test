import React, {FC} from 'react';
import {FormHelperText, makeStyles} from '@material-ui/core';
import {IComponentWithChildren} from 'models';

interface IErrorTextProps extends IComponentWithChildren {}

export const ErrorText: FC<IErrorTextProps> = ({children}) => {
  const classes = useStyles();
  return <FormHelperText classes={classes}>{children}</FormHelperText>;
};

const useStyles = makeStyles(() => ({
  root: {
    color: 'red',
  },
}));
