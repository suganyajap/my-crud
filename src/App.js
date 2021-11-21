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
import { useState } from 'react';

function App() {
  const INITIAL_USERS=[
    {
     
     name: "Lila Torp",
     pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
     email: "lila@hotmail.com",
     mobile: "7894563215",
     occupation: "Advacate",
     salary: "40000"
    },
    {
    
     name: "Ellen Sanford",
     pic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
     email: "ellen@gmail.com",
     mobile: "76658943214",
     occupation: "salesman",
     salary: "10000"
    },
    {
   
     name: "Leigh Kub",
     pic: "https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg",
     email: "leigh@yahoo.com",
     mobile: "8667944532",
     occupation: "doctor",
     salary: "60000"
    },
    {
     
     name: "Vickie Hansen",
     pic: "https://media.gettyimages.com/photos/silverio-nii-agency-picture-id646859390?s=612x612",
     email: "vickie@gmail.com",
     mobile: "6554987321",
     occupation: "developer",
     salary: "100000"
    },
    {
     
     name: "Betsy Johnston",
     pic: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
     email: "betsy@gmail.com",
     mobile: "6532149874",
     occupation: "sales Executive",
     salary: "20000"
    },
    {
     
     name: "Ada Wiza",
     pic: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg",
     email: "ada@gmail.com",
     mobile: "7854123690",
     occupation: "java developer",
     salary: "60000"
    },
    {
     
     name: "Sylvester Batz",
     pic: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
     email: "batz@gmail.com",
     mobile: "5632147896",
     occupation: "full stack developer",
     salary: "100000"
    },
    {
     
     name: "Nina Casper",
     pic: "https://images.unsplash.com/photo-1545912453-865b693e5561?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
     email: "roger@yahoo.com",
     mobile: "877546325",
     occupation: "medical coder",
     salary: 20000
    },
    {
    
     name: "Roger Schmidt V",
     pic: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
     email: "roger@yahoo.com",
     mobile: "9887655423",
     occupation: "electrician",
     salary: 15000
    },
    {
     name: "sathya",
     pic: "https://i.pinimg.com/736x/6f/a0/a7/6fa0a76d510e0deab4a0e59645e3e9e0.jpg",
     email: "sathya@gmail.com",
     mobile: "98745896321",
     occupation: "Teacher",
     salary: "40000",
     
    },
   ];
   
   
  const history=useHistory();
  const [users,setUsers]=useState(INITIAL_USERS);
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
       <EditUser users={users} setUsers={setUsers} />
       </Route>
       <Route path="/users">
       <ListUsers users={users} setUsers={setUsers} />
       </Route>
       <Route path="/create-user">
       <CreateUser users={users} setUsers={setUsers} />
       </Route>
       <Route path="/**">
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
