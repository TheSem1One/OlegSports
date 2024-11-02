
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Auth } from './Pages/Auth/Auth';
import { Home } from './Pages/Home/Home'
import { Profile } from './Pages/Profile/Profile';
import { Header } from './components/Header/header';
import { Footer } from './components/Footer/Footer';
import { FullProduct } from './Pages/FullProduct/FullProduct';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';
import { CreateProduct } from './Pages/CreateProduct/createproduct';


function App() {
  const distpatch = useDispatch();

  React.useEffect(() => {
    
    distpatch(fetchAuthMe());
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:_id' element={<FullProduct />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/create' element={<CreateProduct />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


