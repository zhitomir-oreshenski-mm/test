import React, {FC} from 'react';
import {Field} from './Field';
import {Input} from '../../components-lib/Input';
import {FieldProps} from 'formik';
import {useDebounceUserInput} from 'hooks';

interface IFormInputProps {
  name: string;
  value?: string;
  disabled?: boolean;
}

export const FormInput: FC<IFormInputProps> = ({name, value, disabled = false}) => {
  return <Field name={name} value={value} disabled={disabled} Component={InputDecorated} />;
};

interface IInputDecoratedProps extends FieldProps, IFormInputProps {}

function InputDecorated({field: {name, onChange}, form: {values}, value: initialVal, ...rest}: IInputDecoratedProps) {
  const initialValue: string = values[name] ? values[name] : initialVal;
  const [value, changeHandler] = useDebounceUserInput(initialValue, onChange);

  const props = {
    ...rest,
    value,
    changeHandler,
  };

  return <Input {...props} />;
}
