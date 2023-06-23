
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminLayout from './Admin/AdminLayout';
import AddBlog from './Admin/Blogs/AddBlog';
import EditBlog from './Admin/Blogs/EditBlog';
import AdminBlogs from './Admin/Home/AdminBlogs';
import About from './User/About/About';
import SingleBlog from './User/Blog/SingleBlog';
import Home from './User/Home/Home'
import UserLayout from './User/layout'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserLayout/>}>
              <Route path="" element={<Home/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="blog/:id" element={<SingleBlog/>}/>
            </Route>
            {/* admin layout starts here */}
            <Route path="/admin/" element={<AdminLayout/>}>
              <Route path="home" element={<AdminBlogs/>}/>
              <Route path='add' element={<AddBlog/>}/>
              <Route path='edit/:id' element={<EditBlog/>}/>
              {/* <Route path="about" element={<About/>}/>
              <Route path="blog/:id" element={<SingleBlog/>}/> */}
            </Route>
          </Routes>
      </BrowserRouter>
    </>
    );
}

export default App;
