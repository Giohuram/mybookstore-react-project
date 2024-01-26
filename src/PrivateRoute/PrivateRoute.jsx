import  { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'
import { FaSpinner } from 'react-icons/fa6';
import { useLocation, Navigate } from 'react-router-dom';



const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext); 
    const location = useLocation(); 

    if(loading){
        return  <div className='text-center'>
            <FaSpinner aria-label="Center-aligned spinner example" />
        </div>
    }

    if(user){
        return children; 
    }


  return (
    <Navigate to="/login" state={{from: location}} replace></Navigate>
  )
}

export default PrivateRoute