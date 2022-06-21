import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import UserService1 from "../UserService1"
import {Button, Modal} from "react-bootstrap"


const UpdateUser = (props) => {

  const structure = {
    firstName : "",
    lastName : "",
    city : "",
    email : ""
  }

  let {id} = useParams()

  useEffect(() => {
    console.log(id)
    getUserById(id)
  }, [id])
  

  const [user, setUser] = useState(structure);
  const [updated, setUpdated] = useState(false);
  const [show, setShow] = useState(true);
          
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  function onChange(event){
    const {name,value}=event.target

    setUser({
      ...user,
      [name]:value,
      uid: id
    })
  }

  const getUserById = (id) => {
    UserService1.getUserById(id)
      .then((res) => {
        // console.log("entrty of object")
        console.log(res.data)
        setUser(res.data)
        if(res.status === 200) {
          setUpdated(true)
        }
      })
  }

  const updateUser =() => {
    UserService1.update(user)
      .then((res) => {
        console.log(res)
        setUpdated(false)
      })
  }

  return (
    <div>
      {
        updated ? (
          <div>
            {/* <Button variant="primary" onClick={handleShow}>
              Launch static backdrop modal
            </Button> */}
      
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
            <Modal.Header closeButton>
              <Modal.Title>Update User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div>
                  <label htmlFor="firstName">FirstName:</label>
                  <input type="text"
                    className="form-control"
                    name="firstName"
                    value={user.firstName}
                    onChange={onChange}/>
                </div>
                <div>
                  <label htmlFor="lastName">LastName:</label>
                  <input type="text"
                    className="form-control"
                    name="lastName"
                    value={user.lastName}
                    onChange={onChange}/>
                </div>
                <div>
                  <label htmlFor="city">city:</label>
                  <input type="text"
                    className="form-control"
                    name="city"
                    value={user.city}
                    onChange={onChange}/>
                </div>
                <div>
                  <label htmlFor="email">email:</label>
                  <input type="email"
                    className="form-control"
                    name="email"
                    value={user.email}
                    onChange={onChange}/>
                  </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick = {updateUser}>Update</Button>
            </Modal.Footer>
          </Modal>
        </div>
        ) : (
          <div>
            <h1>User updated Successfully</h1>
            <Link to = "/UserList"><span className = "btn btn-secondary mt-3">Show All Users</span></Link>
          </div>
        )
      }
    </div>
  )
}

export default UpdateUser