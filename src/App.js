import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import bg from "./assets/images/background.jpg";
function App() {
  return (
    <div className='background-change'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
