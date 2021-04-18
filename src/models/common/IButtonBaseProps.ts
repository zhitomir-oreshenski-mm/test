import {IComponentWithChildren} from 'models';

export interface IButtonBaseProps extends IComponentWithChildren {
  clickHandler?: any;
  disabled?: boolean;
  size?: 'small' | 'large';
  type?: 'submit' | 'button';
  className?: string;
}
