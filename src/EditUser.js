import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useParams,useHistory } from 'react-router-dom';

export function EditUser({users,setUsers}) {
  const { id } = useParams();
  const history=useHistory();
  const user = users[id];
  console.log(user);
  const [name, setName] = useState(user.name);
  const [pic, setPic] = useState(user.pic);
  const [mobile, setMobile] = useState(user.mobile);
  const [email, setEmail] = useState(user.email);
  const [occupation, setOccupation] = useState(user.occupation);
  const [salary, setSalary] = useState(user.salary);

 const editUser= () => {
    
    const updatedUser = {
      name,
      pic,
      mobile,
      email,
      occupation,
      salary,
    }; //shorthand
    console.log(updatedUser);
   const copyUserList=[...users];
   copyUserList[id]=updatedUser;
   setUsers(copyUserList);
   history.push("/users");
};
  

  return (
    <div className="create-user-form">
    <TextField
      value={name}
      onChange={(event) => setName(event.target.value)}
      label="Name"
      variant="standard" />

    <TextField
      value={pic}
      onChange={(event) => setPic(event.target.value)}
      label="pic"
      variant="standard" />

    <TextField
      value={mobile}
      onChange={(event) => setMobile(event.target.value)}
      label="mobile"
      variant="standard" />

    <TextField
      value={email}
      onChange={(event) => setEmail(event.target.value)}
      label="email"
      variant="standard" />
    <TextField
      value={occupation}
      onChange={(event) => setOccupation(event.target.value)}
      label="occupation"
      variant="standard" />

  <TextField
      value={salary}
      onChange={(event) => setSalary(event.target.value)}
      label="salary"
      variant="standard" />

    
      <Button onClick={editUser} variant="outlined">Save User</Button>
    </div>
  );
}