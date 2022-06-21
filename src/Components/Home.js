import React from "react";
import { BrowserRouter, Routes} from "react-router-dom";
import { Route} from 'react-router-dom';
import UpdateUser from "./UpdateUser";
// import Homeinfo from "./Homeinfo";
import AddUser from "./AddUser";
import List1 from "./List1";
import Layout from "./Layout";

function Home() {

    return (
        <div>
           
             <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
         {/* <Route path="/" element={<List1 />}> */}
         <Route path="List1" element={<List1 />} />
          {/* <Route index element={<Homeinfo />} /> */}
          <Route path="AddUser" element={<AddUser />} />
          <Route path="UserList" element={<List1 />} />
          <Route path="updateUser/:id" element={<UpdateUser />} />
        </Route>
      </Routes>
    </BrowserRouter> 
        </div>
    )
}
export default Home;
