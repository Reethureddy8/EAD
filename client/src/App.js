import React, {useState} from "react";
import "./App.css";
import Axios from 'axios'
function App()
{
const[sname,setStudentName]= useState("");
const[id,setId]= useState("");
const[tech,setTechnology]= useState("");
const[status,setStatus]= useState("");
const submitReview=()=>
{
Axios.post('http://localhost:9000/userrouter',
{name:sname,
  id:id,
tech:tech,
sub:status}).then(()=>
{
alert("success");
});
};
return (
<div className="App">
<h1>CRUD Application Demo</h1>
<div className="information">
<label><b>Student Name</b></label>
<input
type="text"
name="name"
onChange={(e)=>{
setStudentName(e.target.value);
}}
required/>
<label><b>Student Id</b></label>
<input
type="Number"
name="id"
onChange={(e)=>{
  setId(e.target.value);
}}
required/>
<label><b>Technology</b></label>
<input
type="text"
name="tech"
onChange={(e)=>{
setTechnology(e.target.value);
}}
required/>
<label><b>Status</b></label>
<input
type="Boolean"
name="status"
onChange={(e)=>{
setStatus(e.target.value);
}}
required/>
<button onClick={submitReview}><b>Submit</b></button>
</div>
</div>);
}
export default App;
