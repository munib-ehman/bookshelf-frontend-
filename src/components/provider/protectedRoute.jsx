import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'
import LoginPage from '../../pages/login-page';
import { loginReducer } from '../../features/auth/authSlice';
import Cookies from 'js-cookie';


function ProtectedRoute() {
const dispatch = useDispatch();
    const myCookieValue = Cookies.get('auth');

    if (myCookieValue) {
      dispatch(loginReducer(myCookieValue))
    } else {
      console.log('Cookie does not exist');
    }
  const auth = useSelector(store=>store.auth)

  if(auth.isLoggedIn==false) {
    return <Navigate to="/login"  replace />
  }else{
    return <Outlet/>
  }
}

export default ProtectedRoute