import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import reportWebVitals from "./reportWebVitals";

import HomePage from "./pages/home-page";
import BooksListPage from "./pages/books-list-page";
import LoginPage from "./pages/login-page";
import ProtectedRoute from "./components/provider/protectedRoute";
import { Provider } from "react-redux";
import { store } from "./store/store";
import BookCreatePage from "./pages/books-create-page";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage></HomePage>,
//   },
//   {
//     path: "/books",
//     element: <BooksListPage></BooksListPage>,
//   },
//   {
//     path: "/login",
//     element: <LoginPage></LoginPage>,
//   },
// ]);


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path='' element={<HomePage/>}/>
      <Route path="" element={<ProtectedRoute/>}>
        <Route path='books' element={<BooksListPage/>}/>
         <Route path='/create' element={<BookCreatePage/>}/>
      </Route>
      <Route path='login' element={<LoginPage/>}/>
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
