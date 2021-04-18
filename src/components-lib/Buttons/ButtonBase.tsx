import React, {FC} from 'react';
import {Button} from '@material-ui/core';
import {IButtonBaseProps} from 'models';

interface IButtonBaseComponentProps extends IButtonBaseProps {
  color: 'primary' | 'secondary' | 'inherit';
  variant: 'contained' | 'outlined' | 'text';
  isFirst?: boolean;
}

export const ButtonBase: FC<IButtonBaseComponentProps> = ({children, color, variant, type, disabled, clickHandler}) => {
  return (
    <Button color={color} variant={variant} type={type} disabled={disabled} onClick={clickHandler}>
      {children}
    </Button>
  );
};
