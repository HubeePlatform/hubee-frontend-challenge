import { toast } from "react-toastify";

const toastify = (type: string, message: string) => {
  switch (type) {
    case "info":
      toast.info(message, {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
      break;

    case "warn":
      toast.warn(message, {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
      break;

    case "success":
      toast.success(message, {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
      break;

    case "error":
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
      break;

    default:
      break;
  }
};

export default toastify;
