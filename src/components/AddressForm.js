import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Navbar from '../components/Navbar';
import './Addressform.css';
import  {CSmartTable}  from '@coreui/react-pro'
// import socketIO from 'socket.io-client';
// const socket = socketIO.connect('http://localhost:3000');

// import db from '../firebase';
const AddressForm = () => {
  const usersData = [
    { id: 0, name: 'John Doe', registered: '2022/01/01', role: 'Guest', status: 'Pending' },
    {
      id: 1,
      name: 'Samppa Nori',
      registered: '2022/01/01',
      role: 'Member',
      status: 'Active',
      _props: { color: 'primary', align: 'middle' },
    },
    {
      id: 2,
      name: 'Estavan Lykos',
      registered: '2022/02/07',
      role: 'Staff',
      status: 'Banned',
      _cellProps: { all: { className: 'fw-semibold' }, name: { color: 'info' } },
    },
    {
      id: 3,
      name: 'Chetan Mohamed',
      registered: '2022/02/07',
      role: 'Admin',
      status: 'Inactive',
    },
    {
      id: 4,
      name: 'Derick Maximinus',
      registered: '2022/03/19',
      role: 'Member',
      status: 'Pending',
    },
    { id: 5, name: 'Friderik Dávid', registered: '2022/01/21', role: 'Staff', status: 'Active' },
    {
      id: 6,
      name: 'Yiorgos Avraamu',
      registered: '2022/01/01',
      role: 'Member',
      status: 'Active',
    },
    {
      id: 7,
      name: 'Avram Tarasios',
      registered: '2022/02/07',
      role: 'Staff',
      status: 'Banned',
      _props: { color: 'warning', align: 'middle' },
    },
    { id: 8, name: 'Quintin Ed', registered: '2022/02/07', role: 'Admin', status: 'Inactive' },
    { id: 9, name: 'Enéas Kwadwo', registered: '2022/03/19', role: 'Member', status: 'Pending' },
    {
      id: 10,
      name: 'Agapetus Tadeáš',
      registered: '2022/01/21',
      role: 'Staff',
      status: 'Active',
    },
    {
      id: 11,
      name: 'Carwyn Fachtna',
      registered: '2022/01/01',
      role: 'Member',
      status: 'Active',
    },
    {
      id: 12,
      name: 'Nehemiah Tatius',
      registered: '2022/02/07',
      role: 'Staff',
      status: 'Banned',
    },
    {
      id: 13,
      name: 'Ebbe Gemariah',
      registered: '2022/02/07',
      role: 'Admin',
      status: 'Inactive',
    },
    {
      id: 14,
      name: 'Eustorgios Amulius',
      registered: '2022/03/19',
      role: 'Member',
      status: 'Pending',
    },
    { id: 15, name: 'Leopold Gáspár', registered: '2022/01/21', role: 'Staff', status: 'Active' },
    { id: 16, name: 'Pompeius René', registered: '2022/01/01', role: 'Member', status: 'Active' },
    { id: 17, name: 'Paĉjo Jadon', registered: '2022/02/07', role: 'Staff', status: 'Banned' },
    {
      id: 18,
      name: 'Micheal Mercurius',
      registered: '2022/02/07',
      role: 'Admin',
      status: 'Inactive',
    },
    {
      id: 19,
      name: 'Ganesha Dubhghall',
      registered: '2022/03/19',
      role: 'Member',
      status: 'Pending',
    },
    { id: 20, name: 'Hiroto Šimun', registered: '2022/01/21', role: 'Staff', status: 'Active' },
    {
      id: 21,
      name: 'Vishnu Serghei',
      registered: '2022/01/01',
      role: 'Member',
      status: 'Active',
    },
    { id: 22, name: 'Zbyněk Phoibos', registered: '2022/02/07', role: 'Staff', status: 'Banned' },
    {
      id: 23,
      name: 'Aulus Agmundr',
      registered: '2022/01/01',
      role: 'Member',
      status: 'Pending',
    },
    {
      id: 42,
      name: 'Ford Prefect',
      registered: '2001/05/25',
      role: 'Alien',
      status: "Don't panic!",
    },
  ]



const [product, setProduct] = useState({
product_name: '',
product_price: '',
product_quantity: '',
manufacturing_date: '',
expiry_date: '',
category: ''
});
const [categories, setCategories] = useState([]);
const [formData, setFormData] = useState([]);
const [displayForm, setDisplayForm] = useState(false);
const [categoryForm, setCategoryForm] = useState(false);
const [inputData, setInputData] = useState({ name: '', age: '', address: '' });
const [editMode, setEditMode] = useState(false);
const [editIndex, setEditIndex] = useState(null);

useEffect(() => {
const localData = JSON.parse(localStorage.getItem('formData')) || [];
setFormData(localData);
fetchCategories();
}, []);

const fetchCategories = async () => {
try {
const response = await axios.get('http://localhost:5000/api/get_category');
setCategories(response.data.data);
} catch (error) {
console.error('Error fetching categories:', error);
}
};

const handleProductChange = (e) => {
const { name, value } = e.target;
setProduct({ ...product, [name]: value });
};

const handleProductSubmit = async (e) => {
e.preventDefault();
try {
await axios.post('http://localhost:5000/api/post_address', product);
setProduct({
product_name: '',
product_price: '',
product_quantity: '',
manufacturing_date: '',
expiry_date: '',
category: ''
});
} catch (error) {
console.error('Error adding product:', error);
}
};

const handleInputChange = (e) => {
const { name, value } = e.target;
setInputData({ ...inputData, [name]: value });
};

const handleInputSubmit = () => {
const newData = [...formData, inputData];
setFormData(newData);
localStorage.setItem('formData', JSON.stringify(newData));
setInputData({ name: '', age: '', address: '' });
};

const handleEdit = (index) => {
setInputData(formData[index]);
setEditIndex(index);
setEditMode(true);
};

const handleUpdate = () => {
const updatedData = [...formData];
updatedData[editIndex] = inputData;
setFormData(updatedData);
localStorage.setItem('formData', JSON.stringify(updatedData));
setEditMode(false);
setInputData({ name: '', age: '', address: '' });
};

const handleDelete = (index) => {
const updatedData = formData.filter((_, i) => i !== index);
setFormData(updatedData);
localStorage.setItem('formData', JSON.stringify(updatedData));
};

return (
<div className='address-form-container'>
<Navbar />

<h3 onClick={() => setDisplayForm(!displayForm)} >PRODUCT FORM</h3>

<div class="hide">I am shown when someone hovers over the div above.</div>
{displayForm && (
<form onSubmit={handleProductSubmit}>
<div className='form-group'>
<input
type='text'
name='product_name'
placeholder='PRODUCT NAME'
value={product.product_name}
onChange={handleProductChange}
required
/>
</div>
<div className='form-group'>
<input
type='text'
name='product_price'
placeholder='PRICE'
value={product.product_price}
onChange={handleProductChange}
required
/>
</div>
<div className='form-group'>
<input
type='text'
name='product_quantity'
placeholder='QUANTITY'
value={product.product_quantity}
onChange={handleProductChange}
required
/>
</div>
<div className='form-group'>
<input
type='date'
name='manufacturing_date'
value={product.manufacturing_date}
onChange={handleProductChange}
required
/>
</div>
<div className='form-group'>
<input
type='date'
name='expiry_date'
value={product.expiry_date}
onChange={handleProductChange}
required
/>
</div>
<div className='form-group'>
<select
name='category'
value={product.category}
onChange={handleProductChange}
required
>
<option hidden>Select Category</option>
{categories.map((category) => (
<option key={category._id} value={category._id}>
{category.Category_name}
</option>
))}
</select>
</div>
<Button type='submit'>Add Product</Button>
</form>
)}
<div class="myDIV"><h3 onClick={()=>setCategoryForm(!categoryForm)}>Category</h3>
</div>
<div class="hide">CLICK ON THE TITLE TO OPEN THE FORM ELEMENT</div>

{categoryForm && (
<form>
<div className='new-form'>
<div className='form-group'>
<input
type='text'
name='name'
placeholder='Name'
value={inputData.name}
onChange={handleInputChange}
required
/>
</div>
<div className='form-group'>
<input
type='number'
name='age'
placeholder='Age'
value={inputData.age}
onChange={handleInputChange}
required
/>
</div>
<div className='form-group'>
<input
type='text'
name='address'
placeholder='Address'
value={inputData.address}
onChange={handleInputChange}
required
/>
</div>
{editMode ? (
<Button onClick={handleUpdate}>Update</Button>
) : (
<Button onClick={handleInputSubmit}>Add Input</Button>
)}
</div>
</form>
)}

<table className='table table-bordered'>
<thead>
<tr>
<th>Name</th>
<th>Age</th>
<th>Address</th>
<th>Action</th>
</tr>
</thead>
<tbody>
{formData.map((item, index) => (
<tr key={index}>
<td>{item.name}</td>
<td>{item.age}</td>
<td>{item.address}</td>
<td>
<Button onClick={() => handleEdit(index)}>Edit</Button>
<Button
className='btn btn-danger'
onClick={() => handleDelete(index)}
>
Delete
</Button>
</td>
</tr>
))}
</tbody>
</table>
<div>
<CSmartTable
    items={usersData}
    columnFilter
    columnSorter
    pagination
    tableProps={{
      hover: true,
    }}
  /></div>
</div>
);
};

export default AddressForm;
