
import { TextField } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main:'#131e47'
    },
    secondary:{
main:"#3b3d94"
    }
  },
  typography:{
    fontFamily:'Roboto'
    
  }

  
});

export default lightTheme;