import http from './http-call'
const saveUser=(userData)=>{
  console.log(userData)
       return http.post("/savedata",userData)
    }

const getAll = () => {
return http.get("/getusers")
}

const deleteUser = (values) => {
    alert(values)
    return http.post("/deleteUser", values);
}

const update = (userdata) => {
    return http.post("/update", userdata)
}

const getUserById = (id) => {
    return http.get(`/getUserById/${id}`)
}

const ex = {
   saveUser,
   getAll,
   deleteUser,
   update,
   getUserById
}

export default ex