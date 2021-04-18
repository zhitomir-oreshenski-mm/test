import * as Yup from 'yup';
import {FormNameEnum} from 'models/enums/FormNameEnum';
import {errorMessages} from 'utils/constants/constants';

export interface IFormCryptoFormValues {
  [FormNameEnum.tokenAddress]: string;
  [FormNameEnum.metaMaskAccountAddress]: string;
  [FormNameEnum.metaMaskPrivateKey]: string;
  [FormNameEnum.amount]: string;
  [FormNameEnum.gas]: string;
  [FormNameEnum.limit]: string;
}

export const formCryptoValidationSchema = Yup.object().shape({
  [FormNameEnum.tokenAddress]: Yup.string().trim().required(errorMessages.required),
  [FormNameEnum.metaMaskAccountAddress]: Yup.string().trim().required(errorMessages.required),
  [FormNameEnum.metaMaskPrivateKey]: Yup.string().trim().required(errorMessages.required),
  [FormNameEnum.amount]: Yup.string().trim().required(errorMessages.required),
  [FormNameEnum.gas]: Yup.string().trim().required(errorMessages.required),
  [FormNameEnum.limit]: Yup.string().trim().required(errorMessages.required),
});
