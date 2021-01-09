import { Route } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Home from './Home';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Routes from './Routes';

function App() {
  return (
    <>
      <Routes/>
      <ToastContainer/>
    </>
  );
}

export default App;
