import React, {FC} from 'react';
import {Typography} from '@material-ui/core';
import {IComponentWithChildren} from 'models';

interface ICaptionProps extends IComponentWithChildren {
  classes?: {[key: string]: any};
}
export const Caption: FC<ICaptionProps> = ({children, classes}) => {
  return (
    <Typography variant="caption" classes={classes}>
      {children}
    </Typography>
  );
};
