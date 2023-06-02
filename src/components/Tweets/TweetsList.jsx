import Tweet from './Tweet';

import users from '../../../users.json';

import { List } from './TweetsList.styled';

const TweetsList = () => {
  return (
    <List>
      {users.map(user => (
        <Tweet key={user._id} user={user} />
      ))}
    </List>
  );
};

export default TweetsList;
