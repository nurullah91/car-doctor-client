import  { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRout = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <div className='w-14 mx-auto'>
            <div className='w-10 h-10 rounded-full border-rose-500 border-l-4 animate-spin'></div>
        </div>
    }
    if(user?.email){
        return children;
    }


    return <Navigate to='/login' replace></Navigate>;
};

export default PrivetRout;