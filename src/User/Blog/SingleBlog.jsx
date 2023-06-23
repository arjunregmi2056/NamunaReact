import { Box, CircularProgress, Divider, Typography } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'

const SingleBlog = () => {
    const {id} = useParams();
    const [blog,setBlogs] = React.useState({});
    const[loading,setLoading] = React.useState(false);
    
    const getSingleBlog = async()=>{
        const res = await axios.get(`https://648fc4121e6aa71680ca0ada.mockapi.io/blog/${id}`);
        setBlogs(res.data);
        setLoading(false);
        
    };
    React.useEffect(()=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
          }, 2000);
            getSingleBlog();
        },[])
  return (
    <Box>
        {
            loading?(
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'60vh'}}>
                    <CircularProgress/>
                </div>
            ):(
                <div>
                    <Typography variant='h3' sx={{pt:2,pb:2,textAlign:'center'}}>{blog.title}</Typography>
                    <img style={{width:"100%", height:'500px'}} src={blog.image} alt="blog" />
                    <Divider/>
                    <Typography sx={{pt:3,pb:2,textAlign:"center"}}>@{blog.author}</Typography>
                    <Divider/>
                    <Typography sx={{pt:3,textAlign:"center"}}>{blog.description}</Typography>
                </div>
            )
        }
    </Box>
  )
}

export default SingleBlog