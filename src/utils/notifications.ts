import { toast } from 'react-toastify';

type Type = 'info' | 'success' | 'warning' | 'error';

const Notification = (type: Type, message: string) => {
  return toast[type](message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  });
};

const handleError = (message: any = undefined) => {
  const msg =
    message && typeof message === 'string'
      ? message
      : 'Unknow error occurred, please try again.';
  Notification('error', msg);
};

export { Notification, handleError };
