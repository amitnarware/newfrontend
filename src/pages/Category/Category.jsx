import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import "./Category.css"
import Button from 'react-bootstrap/Button';
import {Col,Form} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import UpdateCategory from "./UpdateCategory";
import {
  MDBCardImage
} from 'mdb-react-ui-kit';
const Role=()=>
{
  const [show, setShow] = useState(false); //For Modal
const [sst, setSst] = useState(0)  //State to check response.data.affetctedRows //
const[Data, setData] =useState([])

//////////////////////GET//////////////////////////
const getData=async()=>
 {
    let response = await axios.get('http://localhost:3200/api/admin/category/viewcategory')
    console.log(response)
    setData(response.data)
 }
 useEffect(()=>{
  getData()
 },[])

  return (
    <>
    <div className='CategoryBox'>
    
      {/* <AddNew/> */}
        <div className='Cat_table'>
        <h1 style={{textAlign:'center', paddingTop:'10px'}}><b>Category</b></h1>
        <Table striped>
      <thead>
        <tr>
          <th>Category ID</th>
          <th>Category Name</th>
          
        </tr>
      </thead>
      <tbody>
      {
    Data.map((item,index) =>
    { 
        return(
            // <tr key={index}>
            <tr>
        <td>{item.pcategoryid}</td>
        <td>{item.categoryname}</td>
        {/* <td>{item.category_image}</td> */}
      
       </tr>
        )
    })
}
        
      </tbody>
    </Table>
      </div>
      <div className='addNewCategory'>
      <Form style={{border: '1px solid black',borderRadius:'10px'}}>
      <h3 style={{textAlign:'center'}}><b>Add New Category</b></h3>
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label>Category ID</Form.Label>
        <Form.Control/>
        {/* <Form.Control value={empid} onChange={(e)=>setEmpId(e.target.value)} /> */}
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicPassword">
        <Form.Label>Category Name</Form.Label>
        <Form.Control/>
        {/* <Form.Control value={empname} onChange={(e)=>setEmpName(e.target.value)} /> */}
      </Form.Group>

     
        {/* <Form.Control value={empname} onChange={(e)=>setEmpName(e.target.value)} /> */}
     

     
        {/* <Form.Control value={empname} onChange={(e)=>setEmpName(e.target.value)} /> */}
     
      

      <Button >
        Submit
      </Button>
    </Form>

      </div>
    </div>
    </>
  )
}

export default Role;