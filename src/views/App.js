import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/MyComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast, Bounce } from 'react-toastify';

import Nav from './Nav/Nav';
import Home from './example/Home';
import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />

          <img src={logo} className="App-logo" alt="logo" />


          {/* <MyComponent/> */}
          {/* <ListTodo /> */}
          {/* <Home /> */}

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/todo' element={<ListTodo />} />
            <Route path='/about' element={<MyComponent />} />
          </Routes>

        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
