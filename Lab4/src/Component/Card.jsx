import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          This is your Profile. 
          <br></br>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Profile Pic" height='150px'></img>
        </Typography>
        <Typography variant="h5" component="div">
          {bull}Insert Inspiring Words Here{bull}
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          
        </Typography> */}
        <Typography variant="body2">
          More personal stuff here.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Link to='/'>
        <Button size="small">Home</Button>
        </Link>
      </CardActions>
    </Card>
  );
}