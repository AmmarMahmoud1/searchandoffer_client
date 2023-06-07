import { toast } from 'react-toastify';

export const toastError = (message) =>
  toast.error(message, {
    closeOnClick: true,
    hideProgressBar: true,
    theme: 'colored',
    autoClose: 2000,
  });

