
import React from 'react';
import { useState,useEffect }    from 'react';
import axios from 'axios';
import { toastError } from './lib/toastError';
import { Routes, Route } from 'react-router-dom';
import Layout  from './pages/Layout';
import SignUp from './pages/SignUp';
import Login from './pages/Login'
import NotFound from './pages/NotFound';
import Home from './pages/Home'
import NavBar from './components/NavBar';
import Message from './components/Message'
import Jobs from './components/Jobs';


import "bootstrap/dist/css/bootstrap.min.css";
import AddPost from './pages/AddPost';
import AllMessages from './components/AllMessages';
import RealEstate from './components/RealEstate';
import Pets from './components/Pets';
import Autos from './components/Autos';
import Services from './components/Services';
import Furniture  from './components/Furniture'
import Electronics from './components/Electronics'
import Offers from './components/Offers';
import Footer from './components/Footer';
import Chat from './components/Chat';
import  Inbox  from './components/Inbox';









const  App  = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  const [gotCookie, setGotCookie] = useState(false);
  const [allPost, setAllPosts] = useState();

 

  useEffect(() => {
    const checkToken = async () => {
      try {
        const { data } = await axios('https://searchandoffer.onrender.com/api/user/me'
          ,
          {
            withCredentials: true,
          }
        );
        setUser(data);
        setIsAuth(true);
        
        
      } catch (error) {
        toastError(error.message);
      }
    };
    checkToken();
    (async () => {
      try {
     
        const { data } = await axios('https://searchandoffer.onrender.com/api');
       
        setAllPosts(data);
        
      } catch (error) {
        toastError(
          error.message || 'No posts,  Sorry..!'
        );
        
      }
    })();

    
  }, [gotCookie]);

 

 
  return (
    <>
       < NavBar  isAuth={isAuth}
              setIsAuth={setIsAuth}
              setUser={setUser}
              setGotCookie={setGotCookie}/>
              
       <Routes>
        <Route  path='/' element={
        <Layout
              isAuth={isAuth}
              setIsAuth={setIsAuth}
              setUser={setUser}
              setGotCookie={setGotCookie} />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login isAuth={isAuth} setGotCookie={setGotCookie} />} />
          <Route path='/sign-up' element={<SignUp isAuth={isAuth} setGotCookie={setGotCookie} />} />
          <Route path='/add' element={<AddPost />} />
          <Route path='/messages' element ={< AllMessages />}    />
          <Route path='/realestate' element ={< RealEstate allPost={allPost} />}    />
          <Route path='/jobs' element ={< Jobs />}    />
          <Route path='/furniture' element ={< Furniture />}    />
          <Route path='/electronics' element ={< Electronics />}    />
          <Route path='/pets' element ={< Pets />}    />
          <Route path='/services' element ={< Services />}    />
          <Route path='/autos' element ={< Autos />}    />
          <Route path='/offers' element ={< Offers />}    />
          <Route path='/inbox' element={< Inbox />}  />
          <Route path='/message/:id' element ={ <Chat allPost={allPost} gotCookie={gotCookie}  />} />
          <Route path='404' element={<NotFound />} />
          </Routes>

          <Footer />
      </>
)
};
         


export default App;
