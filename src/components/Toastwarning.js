import { Slide, toast } from "react-toastify";

// const Toastwarning=()=>{
    const Toastwarning = (message) => {
        toast.warn(message, {
          position: "top-center",
          autoClose: 5000,
          transition: Slide,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
    

    return (
       <></>
    );
};

export  default Toastwarning;
