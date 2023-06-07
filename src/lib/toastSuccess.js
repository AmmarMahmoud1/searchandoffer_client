import { toast } from 'react-toastify';

export const toastSuccess = (message) =>
  toast.success(message, {
    closeOnClick: true,
    hideProgressBar: true,
    theme: 'colored',
    autoClose: 2000,
  });