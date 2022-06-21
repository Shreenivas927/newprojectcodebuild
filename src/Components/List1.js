import React, { useState, useEffect } from "react"
import UserService1 from "../UserService1"
import { Link } from "react-router-dom"

function List1() {

  const [userData, setUserData] = useState([])
  const [currentUser, setCurrentUser] = useState()
  useEffect(() => {
    UserService1.getAll()
      .then(response => {
        console.log("entry list")
        //   console.log(response.data)
        setUserData(response.data)
        console.log(response.data)
      })
  }, [])
  const showCurrentUser = (user) => {
    console.log(user)
    setCurrentUser(user)
  }

  const deleteUser = () => {
    // alert(JSON.stringify(currentUser))
    console.log("clicked")
    UserService1.deleteUser(currentUser)
    console.log(currentUser)
      .then((resData) => {
        if (resData.status === !200) {
          console.log(resData)
        } else {
          console.log(resData.data)
          setUserData(resData.data)
        }
      })
  }

  return (
    <div className="row">
      <div className="col-md-6">
        <h2>User List</h2>
        <ul className="list-group">
          {
            userData.map((user) => (
              <div>
                <table class="table table-dark table-striped" key={user.id} onClick={() => showCurrentUser(user)}>
                  <tbody>
                    <tr>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.city}</td>
                      <td>{user.email}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))
          }
        </ul>
      </div>
      <div className="col-md-6">
        {currentUser ? (
          <div >
            <div><h2>User Info</h2></div>
            <div> <label type="text" >firstName</label>:  {currentUser.firstName}</div>
            <div><label type="text" >lastName</label>:  {currentUser.lastName}</div>
            <div> <label type="text" >city</label>:   {currentUser.city}</div>
            <div><label type="text" >email</label>:   {currentUser.email}</div>
            <Link to={`/updateUser/${currentUser._id}`}> <span className="btn btn-secondary mt-4 ml-3">Update User</span></Link>
            <button onClick={deleteUser}>Delete</button>
            {/* <button >Delete</button> */}
          </div>
        ) : (
          <div>
            <h3>Please select User first......</h3>
          </div>
        )}
      </div>
    </div>
  )

}
export default List1