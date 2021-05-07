import './App.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { checkUser } from './store/actions/userActions'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//Components
import Navbar from './components/Navbar'
import Backdrop from './components/Backdrop'
import SideBar from './components/SideBar'

//Views
import Home from './views/Home'
import Details from './views/Details'
import Cart from './views/Cart'
import Login from './views/Login'
import Dashboard from './views/Dashboard'
import AdminUser from './views/AdminUser'
import AdminUsers from './views/AdminUsers'


function App() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(checkUser());
  }, [dispatch]);
  
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>  
      <Navbar click={() => setSideToggle(true)} />
      <SideBar show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:id" component={Details} />
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/admin/users/" component={AdminUsers}/>
          <Route exact path="/admin/users/:id" component={AdminUser}/>
          
        </Switch>
      </main>
    </Router>
  );
}

export default App;
