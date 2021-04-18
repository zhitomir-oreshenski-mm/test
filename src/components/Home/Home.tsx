import React, {FC} from 'react';
import {FormCrypto, FormCryptoFields} from 'components';

export const Home: FC = () => {
  return (
    <div>
      <FormCrypto>
        <FormCryptoFields />
      </FormCrypto>
    </div>
  );
};
