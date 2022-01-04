import React, { ReactChild } from 'react';

interface Props {
  children: ReactChild;
}

const ErrorMessage = ({ children }: Props) => {
  return <span>{children}</span>;
};

export default ErrorMessage;
