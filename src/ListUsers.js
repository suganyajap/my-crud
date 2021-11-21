import { User } from './User';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";
//import { useEffect,useState } from "react";
export function ListUsers({users,setUsers}) {

    
      
        const history=useHistory();
    return(
        <section className="user-list">
            {users.map(({name,pic,mobile,email,occupation,salary},index)=>(
                <User 
                pic={pic}
                name={name}
                mobile={mobile}
                email={email}
                occupation={occupation}
                salary={salary}
                id={index}
                deleteButton={<IconButton 
           
                    onClick={() => {
                      console.log("deleting....",index);
                      const deleteIdx=index;
                      const remainingUsers=users.filter((ur,idx)=>idx!==deleteIdx);
                      console.log("Remaining,remainingUsers");
                      setUsers(remainingUsers);
                    }}
                     
                    className="user-show-button"
                    color="error"
                    aria-label="delete user"
                    >
                      <DeleteIcon />
                    </IconButton>}
          
                  editButton={<IconButton 
                    style={{marginLeft:"auto"}}
                    className="user-show-button" 
                    onClick={() => history.push("/users/edit/" + index)}
                    color="primary" 
                    aria-label=" edit user" >
                      <EditIcon />
                    </IconButton>}
                  />))}
              </section>
    );
    
}