import React, {FC} from 'react';
import {Grid} from '@material-ui/core';
import {IComponentWithChildren, IComponentWithClassName} from 'models';

type TWidth = boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface IColumnProps extends IComponentWithChildren, IComponentWithClassName {
  sm?: TWidth;
  md?: TWidth;
  lg?: TWidth;
}
export const Column: FC<IColumnProps> = ({children, sm, md, lg, className}) => {
  return (
    <Grid container direction="column" sm={sm} md={md} lg={lg} item className={className}>
      {children}
    </Grid>
  );
};
