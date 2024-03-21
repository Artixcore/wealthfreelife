import mongoose from 'mongoose';
import { IErrorSources, IGenericErrorResponse } from '../interfaces/error';
import httpStatus from 'http-status';

const handleCastError = (
  err: mongoose.Error.CastError,
): IGenericErrorResponse => {
  const errorSources: IErrorSources[] = [
    {
      path: err.path,
      message: err.message,
    },
  ];

  return {
    statusCode: httpStatus.BAD_REQUEST,
    message: 'Invalid Email',
    errorSources,
  };
};

export default handleCastError;