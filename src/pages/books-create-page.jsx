
'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import NavBar from '../components/navbar';
import Container from '../components/container/container';
import { useState } from 'react';
import { addBook } from '../services/book.service';
import { useNavigate } from 'react-router-dom';

function BookCreatePage() {
    const navigate = useNavigate()
    const [formData,setFormData] = useState({
        title:"",
        author:"",
        isbn:"",
        quantity:""
    })
    const [loading,setLoading] =  useState(false);
    const [error,setError] =  useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(formData);
            setLoading(true)
            const responce = await addBook(formData);
            navigate("/books");
            setLoading(false)   
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }
  return (
    <>
    <NavBar/>
    <Container>
    <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4 w-full ">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Title" />
        </div>
        <TextInput id="email1" type="text" placeholder="eg. Something" onChange={(e)=>setFormData(state=>({...state,title:e.target.value}))} required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1"  value="Author" />
        </div>
        <TextInput id="password1" type="text" onChange={(e)=>setFormData(state=>({...state,author:e.target.value}))} required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1"  value="ISBN" />
        </div>
        <TextInput id="password1" type="text" onChange={(e)=>setFormData(state=>({...state,isbn:e.target.value}))} required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1"  value="Quantity" />
        </div>
        <TextInput id="password1" type="number" onChange={(e)=>setFormData(state=>({...state,quantity:e.target.value}))} required />
      </div>
      <Button type="submit">Submit</Button>
    </form>
    </Container>
    </>
  );
}

export default BookCreatePage;
