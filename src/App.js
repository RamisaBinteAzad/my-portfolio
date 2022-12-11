import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import bg from "./assets/images/background.jpg";
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="background-change">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
