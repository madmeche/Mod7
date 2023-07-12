import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        backgroundColor:'white',
        display:'flex',
        flexDirection:'column',
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="username" variant="outlined" />
      <TextField id="standard-basic" label="password" variant="standard" />
      <Link to='/post'>
      <button>Submit</button>
      </Link>
    </Box>
  );
}
