import {
  Avatar,
  Bcg,
  Button,
  Card,
  Followers,
  Line,
  Tweets,
} from './App.styled';

import picture from './img/picture.png';
import logo from './img/logo.png';

export const App = () => {
  // const fetch = () => {
  // https://6463c3a3043c103502aba3b0.mockapi.io/users?page=1&limit=5
  // const res = axios.get('https://6463c3a3043c103502aba3b0.mockapi.io');
  // };
  return (
    <div>
      <Card>
        <Bcg></Bcg>
        <img
          src={picture}
          alt="Фонове зображення"
          style={{
            position: 'absolute',
            width: 308,
            height: 168,
            left: 36,
            top: 28,
          }}
        />
        <img
          src={logo}
          alt="Фонове зображення2"
          style={{
            position: 'absolute',
            width: 76,
            height: 22,
            left: 20,
            top: 20,
          }}
        />
        <Avatar></Avatar>
        <Line></Line>
        <Tweets>777 Tweets</Tweets>
        <Followers>100000 Followers</Followers>
        <Button>Follow</Button>
      </Card>
    </div>
  );
};
