import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Router from "./components/routes/routes";


function App() {

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="colored"
      />
      <Router/>
    </>
  )
}

export default App
