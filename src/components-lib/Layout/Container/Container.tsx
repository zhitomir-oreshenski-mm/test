import React, {FC} from 'react';
import {Container as ContainerMUI} from '@material-ui/core';
import {IComponentWithChildren} from '../../../models';

interface IContainerProps extends IComponentWithChildren {
  disableGutters?: boolean;
  justify?: 'center' | 'flex-start';
  maxWidth?: 'sm' | 'md' | false;
  classes?: any;
}

export const Container: FC<IContainerProps> = ({children, disableGutters, classes, maxWidth = false}) => {
  return (
    <ContainerMUI maxWidth={maxWidth} disableGutters={disableGutters} classes={classes}>
      {children}
    </ContainerMUI>
  );
};
