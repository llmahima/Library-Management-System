import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from 'react'

import ControlPanel from "../components/ControlPanel";
import BookAvailable from "../components/BookAvailable";
import BookIssue from "../components/BookIssue";
import ReturnBook from "../components/ReturnBook";
import FinePay from "../components/FinePay";
import MembershipForm from "../components/MembershipForm";
import MembershipUpdate from "../components/MembershipUpdate";
import AddItemForm from "../components/AddItemForm";
import UpdateBook from "../components/UpdateBook";
import UserManagement from "../components/UserManagement";
function Routers() {
  return (
  
      <Routes>
        <Route path="/" element={<ControlPanel />} />
        <Route path="/availableBook" element={<BookAvailable/>}/>
        <Route path="/bookissue" element={<BookIssue/>} />
        <Route path="/returnbook" element={<ReturnBook/>} />
        <Route path="/finepay" element={<FinePay/>}/>
        <Route path="/membershipForm" element={<MembershipForm/>}/>
        <Route path="/updatemembershipForm" element={<MembershipUpdate/>}/>
        <Route path="/additemform" element={<AddItemForm/>}/>
        <Route path="/updateBook" element={<UpdateBook/>}/>
        <Route path="/usermanagement" element={<UserManagement/>}/>

      </Routes>
 
)
}

export default Routers