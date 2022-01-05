import React from 'react';

interface Props {
  isError?: boolean;
  isWarning?: boolean;
  isSuccess?: boolean;
  message: string;
}

const FlashMessage = ({
  isError = false,
  isWarning = false,
  isSuccess = false,
  message,
}: Props) => {
  const className = isError
    ? 'bg-red-200'
    : isWarning
    ? 'bg-yellow-200'
    : isSuccess
    ? 'bg-green-200'
    : 'bg-white';
  return (
    <div
      className={`${className} cursor-pointer p-2 rounded-md text-center w-full`}
    >
      <span className=''>{message}</span>
    </div>
  );
};

export default FlashMessage;
