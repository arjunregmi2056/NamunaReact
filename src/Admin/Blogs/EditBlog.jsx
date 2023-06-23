import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Input } from '@mui/material';

export default function EditBlog() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [SingleBlog,setSingleBlog] = React.useState({
        title:'',
        author:'',
        image:'',
        description:'',
    });
    const getSingleBlog = async ()=>{
        const res = await axios.get(`https://648fc4121e6aa71680ca0ada.mockapi.io/blog/${id}`);
        setSingleBlog(res.data);
        console.log(res.data);
    }
    React.useEffect(()=>{
        getSingleBlog();
    },[]);
    const handleSubmit = async(e)=>{
        e.preventDefault();
        await axios.put(`https://648fc4121e6aa71680ca0ada.mockapi.io/blog/${id}`,SingleBlog);
        alert("data updated successfully"); 
        navigate("/admin/home");
    };
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
      }}
      noValidate
      onSubmit={ handleSubmit}
      autoComplete="off"
    >
        <Input 
        type="text" 
        onChange={(e)=>setSingleBlog({...SingleBlog, title: e.target.value})}
        name="title"
        value={SingleBlog.title}/ >
        <Input 
        type="text" 
        onChange={(e)=>setSingleBlog({...SingleBlog, author: e.target.value})}
        name="author"
        value={SingleBlog.author}/ >
            <Input 
        type="url" 
        onChange={(e)=>setSingleBlog({...SingleBlog, image: e.target.value})}
        name="image"
        value={SingleBlog.image}/ >
            <Input 
        type="text" 
        onChange={(e)=>setSingleBlog({...SingleBlog, description  : e.target.value})}
        name="description"
        value={SingleBlog.description}/ >
           <Button type='submit'>Edit Blog</Button>
    </Box>
  );
}