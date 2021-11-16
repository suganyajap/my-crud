//import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { EditUser } from './EditUser';
import { ListUsers } from './ListUsers';
import { CreateUser } from './CreateUser';

function App() {
  const history=useHistory();
  return (
    <div className="App">
      <AppBar position="static" style={{marginBottom:"24px"}}>
     <Toolbar variant="dence">
      <Button
       variant="text"
       color="inherit"
       onClick={()=>history.push("/")}
       >Home</Button>
       <Button
       variant="text"
       color="inherit"
       onClick={()=>history.push("/users")}
       >List Users</Button>
       <Button
       variant="text"
       color="inherit"
       onClick={()=>history.push("/create-user")}
       >Create User</Button>
        </Toolbar>
       </AppBar>

<Switch>
       
       <Route exact path="/">
       <Welcome />
       </Route>
       <Route path="/users/edit/:id">
       <EditUser />
       </Route>
       <Route path="/users">
       <ListUsers />
       </Route>
       <Route path="/create-user">
       <CreateUser  />
       </Route>
       <Route path="**">
           <NotFound />
       </Route>
       
    </Switch>

    </div>
  );
}


function NotFound() {
  return (
    <div className="not-found-container">
      <h2>Not Found 404</h2>
      <img className="not-found-image"
        src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif"
        alt="" />
    </div>
  );
}

function Welcome() {
  return (
    <div>
      <h3>Welcome to home!!!</h3>
    </div>
  );
}

export default App;
