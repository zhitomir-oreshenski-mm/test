import {IButtonBaseProps} from 'models';
import React, {FC} from 'react';
import {ButtonBase} from './ButtonBase';

interface IButtonPrimaryProps extends IButtonBaseProps {}

export const ButtonPrimary: FC<IButtonPrimaryProps> = ({children, clickHandler, disabled = false, type = 'button'}) => {
  return (
    <ButtonBase variant="contained" color="primary" clickHandler={clickHandler} disabled={disabled} type={type}>
      {children}
    </ButtonBase>
  );
};
