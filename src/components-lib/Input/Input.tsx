import {makeStyles} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import React, {ReactNode} from 'react';

interface IInputProps {
  label?: string;
  withIcon?: boolean;
  iconPosition?: 'start' | 'end';
  icon?: ReactNode;
  value?: string | null;
  name?: string | null;
  changeHandler?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string | null;
  placeholder?: string;
  withMargin?: boolean;
  disabled?: boolean;
  onKeyUp?: any;
  color?: string;
}

export function Input({
  value,
  name,
  changeHandler,
  label = '',
  withIcon,
  iconPosition,
  icon,
  error = false,
  helperText,
  placeholder,
  withMargin = true,
  disabled = false,
  onKeyUp,

  color,
  ...rest
}: IInputProps) {
  const {root} = useStyles({withMargin});
  let props: any = {
    label,
    variant: 'outlined',
    size: 'small',
  };

  if (withIcon) {
    props = {
      ...props,
    };
  }

  return (
    <TextField
      name={name}
      value={value}
      onChange={changeHandler}
      className={root}
      fullWidth
      error={error}
      helperText={helperText}
      placeholder={placeholder}
      disabled={disabled}
      onKeyUp={onKeyUp}
      {...props}
      {...rest}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: ({withMargin}: {withMargin: boolean}) => {
    const margin = theme.spacing(3);
    return {
      margin: withMargin ? `${margin} 0 ${margin} 0` : 0,
    };
  },
}));
