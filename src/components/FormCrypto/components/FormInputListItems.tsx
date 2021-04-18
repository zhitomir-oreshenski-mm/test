import React, {FC, Fragment} from 'react';
import {Form} from 'forms';
import {FormNameEnum} from 'models';
import {makeStyles} from '@material-ui/core';

interface IFormInputListItemsProps {
  list: FormNameEnum[];
  labelList: string[];
  disableAll?: boolean;
}

export const FormInputListItems: FC<IFormInputListItemsProps> = ({list, labelList, disableAll}) => {
  const {root, label} = useStyles();
  return (
    <Fragment>
      {list.map((item, idx) => (
        <div key={idx} className={root}>
          <div className={label}>{labelList[idx]}</div>
          <Form.Input name={item} disabled={disableAll} />
        </div>
      ))}
    </Fragment>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: 10,
  },
  label: {
    marginBottom: 5,
  },
}));
