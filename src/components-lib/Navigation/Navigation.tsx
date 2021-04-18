import React, {FC} from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import {IComponentWithChildren, IComponentWithClassName} from 'models';

interface INavigationProps extends IComponentWithClassName, IComponentWithChildren {}

export const Navigation: FC<INavigationProps> = ({children}) => {
  return (
    <AppBar position="static">
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
};
