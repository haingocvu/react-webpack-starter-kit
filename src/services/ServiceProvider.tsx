import React, { Fragment } from 'react';

import { useAppApi } from 'services/rtkApi';

interface IProps {
  children: any;
}

export const ServiceProvider = (props: IProps) => {
  useAppApi();
  const { children } = props;
  return <Fragment>{children}</Fragment>;
};
