import { styled } from '@mui/material';

export const Card = styled('div')({
  position: 'relative',
  background:
    'linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)',
  width: 380,
  height: 460,
  borderRadius: '20px',
});

export const Line = styled('div')({
  position: 'absolute',
  top: '50%',
  left: 0,
  // transform: 'translateX(-50%)',
  width: 380,
  height: 8,
  backgroundColor: '#EBD8FF',
  boxShadow:
    '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF',
});

export const Avatar = styled('div')({
  position: 'absolute',
  top: '51%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 80,
  height: 80,
  background: '#5736A3',
  border: '8px solid #EBD8FF',
  // boxShadow:
  //   '0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF',
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
  // textAlign: 'center',
  color: '#EBD8FF',
});

export const Followers = styled('p')({
  position: 'absolute',
  left: 83,
  top: 324,

  // margin: '0 auto',

  fontWeight: 500,
  fontSize: '20px',
  lineHeight: '24px',
  textTransform: 'uppercase',
  color: '#EBD8FF',
});
