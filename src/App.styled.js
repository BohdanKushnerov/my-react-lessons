import { styled } from '@mui/material';

import picture from './img/picture.png';
import logo from './img/logo.png';

export const Card = styled('div')({
  position: 'relative',
  background:
    'linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)',
  width: 380,
  height: 460,
  borderRadius: '20px',

  '&::before': {
    content: '""',
    backgroundImage: `url(${picture})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
    width: 308,
    height: 168,
    left: 36,
    top: 28,
  },
  '&::after': {
    content: '""',
    backgroundImage: `url(${logo})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
    width: 76,
    height: 22,
    left: 20,
    top: 20,
  },
});

export const Line = styled('div')({
  position: 'absolute',
  top: 214,
  left: 0,
  width: 380,
  height: 8,
  backgroundColor: '#EBD8FF',
  boxShadow:
    '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF',
});

export const Avatar = styled('div')({
  position: 'absolute',
  top: '48%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 80,
  height: 80,
  background: '#5736A3',
  border: '8px solid #EBD8FF',
  borderRadius: '50%',

  zIndex: 1,
  backgroundImage:
    'url("https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/968.jpg")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
});

export const Button = styled('button')({
  position: 'absolute',
  left: 92,
  top: 374,
  width: 196,
  height: 50,

  background: '#EBD8FF',
  boxShadow: '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)',
  border: 'none',
  borderRadius: '10.3108px',
});

export const Tweets = styled('p')({
  position: 'absolute',
  left: 124,
  top: 284,

  margin: 'auto 0',

  fontWeight: 500,
  fontSize: '20px',
  lineHeight: '24px',
  textTransform: 'uppercase',
  color: '#EBD8FF',
});

export const Followers = styled('p')({
  position: 'absolute',
  left: 83,
  top: 324,

  fontWeight: 500,
  fontSize: '20px',
  lineHeight: '24px',
  textTransform: 'uppercase',
  color: '#EBD8FF',
});
