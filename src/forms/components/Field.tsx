import React, {Fragment} from 'react';
import {Field as FormikField, FieldProps} from 'formik';
import {IComponentWithChildren} from 'models';
import {Text} from 'components-lib';

interface IFieldProps extends IComponentWithChildren {
  name: string;
  value?: string | number | Date;
  disabled?: boolean;
  Component: any;
  debounceDelay?: number;
}

export function Field({name, Component, children, ...rest}: IFieldProps) {
  return (
    <FormikField id={name} name={name}>
      {(props: FieldProps) => {
        const error: any = props.form.errors[name];
        return (
          <Fragment>
            <Component name={name} onBlur={props.field.onBlur} {...props} {...rest}></Component>
            {error && <Text.Error>{error}</Text.Error>}
          </Fragment>
        );
      }}
    </FormikField>
  );
}
