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
  return (
    <div>
      <Card>
        <Avatar></Avatar>
        <Line></Line>
        <Tweets>777 Tweets</Tweets>
        <Followers>100000 Followers</Followers>
        <Button>Follow</Button>
      </Card>
    </div>
  );
};
