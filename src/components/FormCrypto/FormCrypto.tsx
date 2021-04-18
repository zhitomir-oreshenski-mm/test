import React, {FC, useCallback, useMemo} from 'react';
import {Form} from 'forms';
import {formCryptoValidationSchema, IFormCryptoFormValues} from './utils';
import {FormNameEnum} from 'models';

type IFormCryptoProps = {};

export const FormCrypto: FC<IFormCryptoProps> = ({children}) => {
  const initialValues: IFormCryptoFormValues = useMemo(
    () => ({
      [FormNameEnum.tokenAddress]: '',
      [FormNameEnum.metaMaskAccountAddress]: '',
      [FormNameEnum.metaMaskPrivateKey]: '',
      [FormNameEnum.amount]: '',
      [FormNameEnum.gas]: '',
      [FormNameEnum.limit]: '',
    }),
    []
  );

  const submitHandler = useCallback((formValues) => console.log('formValues:', formValues), []);

  return (
    <Form.Form
      initialValues={initialValues}
      validationSchema={formCryptoValidationSchema}
      submitHandler={submitHandler}
    >
      {children}
    </Form.Form>
  );
};
