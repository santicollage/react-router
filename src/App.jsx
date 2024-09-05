import { useState } from 'react'
import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { Menu } from './Menu';
import { HomePage } from './HomePage';
import { BlogPage } from './BlogPage';
import { ProfilePage } from './ProfilePage';
import { BlogPost } from './BlogPost';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
        <Menu />

        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/blog' element={<BlogPage/>}/>
          <Route path='/blog/:slug' element={<BlogPost/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='*' element={<p>Not found</p>}/>
        </Routes>
        
      </HashRouter>
    </>
  )
}

export default App
