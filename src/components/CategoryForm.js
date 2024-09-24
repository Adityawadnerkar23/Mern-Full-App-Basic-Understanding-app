import React,{useState} from "react";
import axios from "axios";
import  Button from "react-bootstrap/Button";
import Navbar from '../components/Navbar'

const CategoryForm=()=> {
    const[Category_name,SetCategoryName]=useState('');

const handleSubmit= async (e)=> {
    e.preventDefault();
    const newCategory={
    usercategory:Category_name
    };
    try{
  const response= await axios.post('http://localhost:5000/api/post_category',newCategory);
  console.log(response,">>>>>>>>>> response")
  // onAdd(response.data);
  SetCategoryName('');
    }catch(error){
    console.error('errorrrrrr:',error);
    }
};
return(
  <div className="col-lg-12">
<Navbar/>
<br></br>
<form className="mx-5" 
onSubmit={handleSubmit}>
<input
  type="text"
  placeholder="CATEGORY NAME"
  value={Category_name}
  onChange={(e) => SetCategoryName(e.target.value)}
  required
/>
<Button variant="primary" type="submit">Add category</Button>

  </form>
  </div>
)}
export default CategoryForm