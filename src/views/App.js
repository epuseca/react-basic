import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/MyComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';

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
            <Route path='/user' element={<ListUser />} />
            <Route path='/user/:id' element={<DetailUser />} />
          </Routes>

          {/* <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
          </Switch> */}

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
