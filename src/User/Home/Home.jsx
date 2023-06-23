import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, CircularProgress } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
    const [blogs,setBlogs] = React.useState([]);
    const [loading,setLoading] = React.useState(true);
    const getBlogs = async()=>{
        const res = await axios.get("https://648fc4121e6aa71680ca0ada.mockapi.io/blog");
        setBlogs(res.data);
        setLoading(false);
    };
    React.useEffect(()=>{
        getBlogs()
    },[])
  return (
   <Box sx={{display:"flex",justifyContent:"center",gap:2,alignItems:"center",flexWrap:"wrap"}}>
      {
        
         loading?(
          <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",width:'100%',height:"60vh"}}>
            <CircularProgress/>
          </Box>
         ):
         blogs.map((data) => {
          return (
            <Card key={data.id} sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={data.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data.title.slice(0,20)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.description.slice(0,100)}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button onClick={()=>navigate(`/blog/${data.id}`)} size="small" color="secondary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          );
          })
      }
   </Box>
  );
}


