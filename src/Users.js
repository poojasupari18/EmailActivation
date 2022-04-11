import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AgGridReact } from 'ag-grid-react'
import { AgGridColumn } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function Users() {
const [users , setUsers] =useState("")
    const fetchUsers = async () => {
        let response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data)
        
}
    useEffect(() => {
       fetchUsers()

    }, [])


    return (
        <div>
      <h1> Users</h1>
<div className="ag-theme-alpine users" style={{height: 500, width: 600 }} >
   <AgGridReact rowData = { users && (users).map((x) => ({ 'id': x.id, 'name' : x.name , 'email': x.email}))}>    
       <AgGridColumn field="id"></AgGridColumn>
      <AgGridColumn field="name"></AgGridColumn>
      <AgGridColumn field="email"></AgGridColumn>
      
   </AgGridReact>      
            </div>
            </div>
  )
}

export default Users
