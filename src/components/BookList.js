import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Booklist.css'; // Import the CSS file for styling
import { Link} from 'react-router-dom';
import { Modal, ModalTitle } from 'react-bootstrap';


const Booklist = () => {
const [showlist, setBookView] = useState([]);
const [showmodal, setShowModal] = useState(false);
const [editModel,SetEditModels]=useState(false);
const [showimage,SetShowimage]=useState('');
const [myid,setMyid]=useState('');
const [editingBook, setEditingBook] = useState({});
const [setnewdisplay,setNewDisplay]=useState({});


useEffect(() => {
getCategories();
}, []);

const getCategories = async () => {
try {
const response = await axios.get('http://localhost:5000/api/get_collection');
setBookView(response.data?.data);
console.log(response.data?.data, "all list");
} catch (error) {
console.error("Error fetching data: ", error);
}
};

const deletecategories = async (id) => {
try {
await axios.delete(`http://localhost:5000/api/delete_collection/${id}`);
setBookView(prevBooks => prevBooks.filter(book => book._id !== id));
} catch (error) {
console.error("Error deleting data: ", error);
}
};
const updateddata = async (id)=>{
  try{
    setMyid(id)
     const response = await axios.get(`http://localhost:5000/api/getUpdate/${id}`);
     setEditingBook(response.data?.data);
    console.log(response.data?.data, "allst");
    SetEditModels(true)
  }catch(error){
    console.error("Error updating data: ", error);
  }
}

const SHOW =(img)=>{
SetShowimage(img)
setShowModal(true)
}
const handleInputChange =(e)=>{
  const{name,value}=e.target;
  setNewDisplay({...setnewdisplay, [name]: value});
};
const handleInputSubmit= async () =>{
 try{
  await axios.put(`http://localhost:5000/api/updatebook/${myid}`,setnewdisplay)
  .then((response)=>response.json)
  .then((res)=>{
    if(res.status==200){
      getCategories()
    SetEditModels(false)
    }
  })
 }catch(error){
  console.error("Error updating data: ", error);
 }

}
  return (
    <>
      <table className='table table-bordered table-hover table-striped' align='center'>
        <thead className='thead-dark'>
        <tr>
        <th>Book Name</th>
        <th>Book Price</th>
        <th>Author Name</th>
        <th>Publication Name</th>
        <th>Action</th>
        </tr>
        </thead>
        <tbody>
          {showlist.map((itm, indx) => (
            <tr key={indx}>
            <td>{itm.book_name}</td>
            <td>{itm.book_price}</td>
            <td>{itm.author_name}</td>
            <td>{itm.publication_name}</td>
            <td className='col-lg-4'>
            <button
            className='btn btn-danger'
            onClick={() => {if (window.confirm('Are you sure you want to delete this book?')) deletecategories(itm._id);}}>DELETE
            </button>
            <button className='btn btn-warning'>
            <Link to={`/upload?id=${itm._id}`}> UPLOAD</Link>
            </button>
            <button className='btn btn-success' onClick={()=>SHOW(itm.book_image)}>VIEW
            </button>
            <button className='btn btn-secondary'onClick={()=>updateddata(itm._id)}>UPDATE</button>
            </td>
            </tr>
          ))}
        </tbody>

      </table>
        <Modal size='' show={showmodal} onHide={()=>setShowModal(false)}>
        <Modal.Header>
        <Modal.Title>Book image</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <div>
        <h2>Book image</h2>
        <div>
        <img src={`http://localhost:5000/uploads/${showimage}`}  width="300" height="300" alt='book image' />
        </div>
        </div>
        </Modal.Body>
        <Modal.Footer onClick={()=>setShowModal(false)}>
        close
        </Modal.Footer>
        </Modal>
        <Modal size=''show={editModel} onHide={()=>SetEditModels(false)}>
        <Modal.Header>
        <ModalTitle>UPDATE Boooks</ModalTitle>
        </Modal.Header>
        <Modal.Body>
  <form>
    <div className="form-group col-lg-4 m-lg-4 ">
    <input
      type='text'
      name='book_name'
      placeholder='Enter New Book Name'
      defaultValue={editingBook.book_name}
      onChange={handleInputChange}
      />
      <input
      type='text'
      name='book_price'
      placeholder='Enter New Book Price'
      defaultValue={editingBook.book_price}
      onChange={handleInputChange}
      />
      <input
      type='text'
      name='author_name'
      placeholder='Enter New Author Name'
      defaultValue={editingBook.author_name}
      onChange={handleInputChange}
      />
      <input
      type='text'
      name='publication_name'
      placeholder='Enter New Publication Name'
      defaultValue={editingBook.publication_name}
      onChange={handleInputChange}
      />
    </div>
    <button className='btn btn-success' onClick={()=>handleInputSubmit()}>submit</button>
  </form>
</Modal.Body>
      </Modal>
      <div>
        <p>hello world</p>
      </div>
    </>
  );
};

export default Booklist;
