import React, {useMemo} from 'react';
import {makeStyles} from '@material-ui/core';
import {FormNameEnum} from 'models';
import {FormInputListItems} from './FormInputListItems';
import {Button} from 'components-lib';

export const FormCryptoFields = () => {
  const {root, buttonGroup} = useStyles();

  const fieldListItems = useMemo(
    () => <FormInputListItems list={fieldList} labelList={fieldLabelList} disableAll={false} />,
    []
  );

  return (
    <div className={root}>
      {fieldListItems}
      <div className={buttonGroup}>
        <Button.Primary clickHandler={() => null}>Start</Button.Primary>
      </div>
    </div>
  );
};

const fieldList = [
  FormNameEnum.tokenAddress,
  FormNameEnum.metaMaskAccountAddress,
  FormNameEnum.metaMaskPrivateKey,
  FormNameEnum.amount,
  FormNameEnum.gas,
  FormNameEnum.limit,
];

const fieldLabelList = ['Token Adress', 'Metamask Account Address', 'Private Key', 'Amount', 'Gas', 'Gas Limit'];

const useStyles = makeStyles(() => ({
  root: {
    width: 500,
    margin: 20,
  },
  buttonGroup: {
    marginTop: 20,
  },
}));
