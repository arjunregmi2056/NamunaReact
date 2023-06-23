import { Box, Toolbar } from '@mui/material'
import { Outlet } from 'react-router-dom'
import UserAppBar from '../Components/AppBar'

const UserLayout = () => {
  return (
    <div>
        <UserAppBar/>

        <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
            <Outlet/>
        </Box>
        
    </div>
  )
}

export default UserLayout