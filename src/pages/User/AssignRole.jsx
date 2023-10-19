import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import axios from 'axios'
import {useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form'

function MyVerticallyCenteredModal(props) {
  const [show, setShow] = useState(false); //For Modal
  const [sst, setSst] = useState(0)  //State to check response.data.affetctedRows //
  const[Data, setData] =useState([])
  const[roleData, setRoleData] =useState([])
  /////////Below 4 states are for add new data//////////////
  const [uid, setUId] = useState("")
  const [name, setName] = useState("")
  const [password, setPass] = useState("")
  //////////////////POST/////////////////////
 async function postData(){
  let newData = {
    "uid": uid,
    "name": name,
    "password": password
    }
    let response = await axios.post(`http://localhost:3200/api/admin/roleassign/grant/role`, newData);
    console.log(response.data.affectedRows)
    setSst(response.data.affectedRows)
    console.log("ok")
  }

//////////////////////GET//////////////////////////
const getRoleData=async()=>
 {
    let response = await axios.get('http://localhost:3200/api/admin/roles/viewroles')
    console.log(response)
    setRoleData(response.data)
 }
 useEffect(()=>{
  getRoleData()
 },[])

//////////////////////GET//////////////////////////
const getData=async()=>
 {
    let response = await axios.get('http://localhost:3200/api/admin/userlist')
    console.log(response)
    setEmpData(response.data)
 }
 useEffect(()=>{
  getData()
 },[])
//  /////////Below 4 states are for add new data//////////////
//  const [empid, setEmpId] = useState("")
//  const [empname, setEmpName] = useState("")
//  const [password, setPass] = useState("")
 //////////////////POST/////////////////////
async function postData(){
 let newData = {
   "uid": uid,
   "name": name,
   "password": password
   }
   let response = await axios.post(`http://localhost:3200/api/admin/userregister`, newData);
   console.log(response.data.affectedRows)
   setSst(response.data.affectedRows)
   console.log("ok")
 }
 ////////////Below 4 States are for update////////////

const [newuid, setNewUid] = useState("")
const [newname, setNewname] = useState("")
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

async function updateData(uid, name, dept, sal){
  console.log(uid, name, dept, sal)
  setNewUid(uid);
  setNewname(name);
  
  handleShow()
}

async function saveUpdatedData(){
  let response = await axios.patch(`http://localhost:3200/api/admin/userfind/${name}`, {
    "name": newname,
    })
    console.log(response)
}
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Assign User Role
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className='addNew'>
      <Form style={{border: '1px solid black',borderRadius:'10px'}}>
      <h3 style={{textAlign:'center'}}><b>Assign Roles</b></h3>
      {
    Data.map((item,index) =>
    {
        return(
          <>
            <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        </tr>
      </>
        )
    })
}
      <Form.Group className="mb-1" controlId="formBasicEmail">
      <Form.Label>User Id</Form.Label>
      <Form.Control value={newid} onChange={(e)=>setNewUid(e.target.value)} disabled='true' /> <br />
        <Form.Label>Roles</Form.Label>
        {/* <Form.Control value={empid} onChange={(e)=>setEmpId(e.target.value)} />
         */}
         <Form.Select aria-label="Default select example">
          {
    roleData.map((item,index) =>
    {
        return(
            <option key={index}>
            <option
            >{item.role_id}
            &nbsp;&nbsp;&nbsp;
             {item.rolename}
            </option>
            </option>
        )
    })
}
        </Form.Select>
      </Form.Group>
      <Button onClick={()=>postData()}>
        Submit
      </Button>
    </Form>

      </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function AssignRole() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}
        style={{marginLeft:'50px'}}
      >
        Assign Role
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default AssignRole;