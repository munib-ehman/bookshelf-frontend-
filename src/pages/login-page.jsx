import React, { useState } from "react";
import NavBar from "../components/navbar";
import Container from "../components/container/container";
import {
  Button,
  Checkbox,
  FileInput,
  Label,
  Radio,
  RangeSlider,
  Select,
  Textarea,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";
import { login } from "../services/auth.service";
import { useDispatch } from "react-redux";
import { loginReducer } from "../features/auth/authSlice";
import { redirect, useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();
    const dispatch =  useDispatch()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [user,setUser]=useState({
        email:'',
        password:'',    
    })

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const token = await login(user);
            dispatch(loginReducer(token.response))
            navigate("/books");
            setLoading(false)   
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }


    if(loading) return <div>loading...</div>;
    if(error) return <div>{error}</div>;

  return (
    <>
      <NavBar />
      <Container>
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 w-1/2 h-full">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              onChange={(e)=>setUser((prev)=>({...prev,email:e.target.value}))}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput 
            id="password1" 
            type="password" 
            onChange={(e)=>setUser((prev)=>({...prev,password:e.target.value}))}
            required />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Container>
    </>
  );
}

export default LoginPage;
