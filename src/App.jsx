import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import './App.css'
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
  authService.getCurrentUser()
  .then((userData)=>{
    if(userData){
      dispatch(login(userData));
    }
    else{
      dispatch(logout());
      console.log("no user data found");
      
    }
  })
  .finally(()=>setLoading(false))
  },[])

  return !loading?(
    <div className='w-full min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) : (<>Loading...</>)
}

export default App
