import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <a href="users" className="navbar-brand">Navbar</a>
                        {/* <h2></h2> */}
                        <div className="navbar-nav">
                            {/* <li className="nav-item ">
                                <Link to="/Homeinfo" className="nav-link">Home</Link>

                            </li> */}
                            <li className="nav-item ">
                                <Link to="/AddUser" className="nav-link">Add User</Link>
                               
                            </li>
                            <li className="nav-item">
                                <Link to="/UserList" className="nav-link">Show Users</Link>
                               
                            </li>
                            
                        </div>

                    </nav>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">List1</Link>
          </li>
          <li>
            <Link to="/Homeinfo">Homeinfo</Link>
          </li>
          <li>
            <Link to="/AddUser">AddUser</Link>
          </li>
          <li>
            <Link to="/UpdateUser">UpdateUser</Link>
          </li>
        </ul>
      </nav> */}

      <Outlet />
    </>
  )
};

export default Layout;