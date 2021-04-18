import React from 'react';
import * as Yup from 'yup';
import {Form as FormikForm, Formik} from 'formik';
import {FormikHelpers} from 'formik/dist/types';
import {IComponentWithChildren} from 'models';

interface IFormProps<T> extends IComponentWithChildren {
  initialValues: T;
  validationSchema: Yup.ObjectSchema;
  submitHandler: (values: T, actions: FormikHelpers<T>) => void;
  validateOnMount?: boolean;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
}

export function Form<T>({
  initialValues,
  validationSchema,
  submitHandler,
  children,
  validateOnMount = false,
  validateOnChange = true,
  validateOnBlur = false,
}: IFormProps<T>) {
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitHandler}
      validateOnChange={validateOnChange}
      validateOnMount={validateOnMount}
      validateOnBlur={validateOnBlur}
    >
      <FormikForm style={{maxWidth: '100%'}}>{children}</FormikForm>
    </Formik>
  );
}
