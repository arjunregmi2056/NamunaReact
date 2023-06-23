import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';

export default function AddBlog() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let formData = {
            title: data.get('title'),
            author: data.get('author'),
            image: data.get('image'),
            description: data.get('description'),
        };
        let res = await axios.post("https://648fc4121e6aa71680ca0ada.mockapi.io/blog",formData);
        alert("Data added successfully");

    };
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <TextField
          id="outlined-error"
          label="Title"
          name='title'
        />
      </div>
      <div>
        <TextField
          id="outlined-error"
          label="Author"
          name='author'
        />
      </div>
      <div>
        <TextField
          id="outlined-error"
          label="Image"
          name='image'
        />
      </div>
      <div>
        <TextField
          id="outlined-error"
          label="Description"
          name='description'
        />
      </div>
      <Button sx={{mt:3}} type='submit'>Add Blog</Button>
      
      
    </Box>
  );
}