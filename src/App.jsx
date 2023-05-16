import { Avatar, Button, Card, Followers, Line, Tweets } from './App.styled';

export const App = () => {
  // const fetch = () => {
  // https://6463c3a3043c103502aba3b0.mockapi.io/users?page=1&limit=5
  // const res = axios.get('https://6463c3a3043c103502aba3b0.mockapi.io');
  // };
  return (
    <div>
      <Card>
        <Avatar></Avatar>
        <Line></Line>
        <Tweets>777 Tweets</Tweets>
        <Followers>100000 Followers</Followers>
        <Button>Follow</Button>
      </Card>
      <div>w</div>
    </div>
  );
};
