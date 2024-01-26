import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import App from '../App'
  import Home from '../Home/Home.jsx'
import Shop from "../shop/Shop.jsx";
import About from "../components/About.jsx"
import Blog from "../components/Blog.jsx"
import SingleBook from "../components/SingleBook.jsx";
import DashboardLayout from "../dashboard/DashboardLayout.jsx";
import Dashboard from "../dashboard/Dashboard.jsx";
import UploadBook from "../dashboard/UploadBook.jsx";
import ManageBooks from "../dashboard/ManageBooks.jsx";
import EditBooks from "../dashboard/EditBooks.jsx";
import Signup from "../components/Signup.jsx"
import Login from "../components/Login"
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import Logout from "../components/Logout"

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: '/', 
            element: <Home/> 
        },
        {
            path: '/shop',
            element: <Shop/>

        },
        {
            path: '/About',
            element: <About/>
        },
        {
            path: '/Blog',
            element: <Blog/>
        }, 
        {
            path: "/book/:id",
            element: <SingleBook/>,
            loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        }
      ]
    },
    {
      basename: '/admin', 
      path: "/admin/dashboard",
      element: <DashboardLayout/>,
      children: [
        {
          path: "/admin/dashboard",
          element: <PrivateRoute><Dashboard /></PrivateRoute>,
        },
        {
          path: "/admin/dashboard/upload",
          element: <UploadBook />, 
        },
        {
          path: "/admin/dashboard/manage",
          element: <ManageBooks /> 
        },
        {
          path: "/admin/dashboard/edit-books/:id",
          element: <EditBooks />,  
          loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        }
      ]
    }, 
    {
      path: "sign-up",
      element: <Signup />, 
    },
    {
      path: "login",
      element: <Login />, 
    },
    {
      path: "logout",
      element: <Logout />
    }
  ]);  

export default router;   

