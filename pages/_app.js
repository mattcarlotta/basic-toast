import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <ToastContainer
      position="top-right"
      autoClose={8000}
      hideProgressBar={false}
      newestOnTop={false}
      draggable={false}
      pauseOnVisibilityChange
      closeOnClick
      pauseOnHover
    />
  </>
);

export default App;
