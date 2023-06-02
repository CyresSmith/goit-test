import {
  TweetBox,
  LogoBox,
  ImageBox,
  Delimiter,
  InfoBox,
} from './Tweet.styled';

import GoitLogo from './GoIT-logo';
import Avatar from './Avatar';
import Button from './Button';
import { useState } from 'react';

const Tweet = ({ user }) => {
  const [Follow, setFollow] = useState(false);

  const followHandle = () => {
    setFollow(prev => !prev);
  };

  return (
    <TweetBox>
      <LogoBox>
        <GoitLogo />
      </LogoBox>
      <ImageBox />
      <Delimiter />
      <Avatar avatar={user.avatar} />
      <InfoBox>
        <span>{user.tweets} TWEETS</span>
        <span>{user.followers} FOLLOWERS</span>
      </InfoBox>
      <Button onClick={followHandle} active={Follow}>
        {Follow ? 'FOLLOWING' : 'FOLLOW'}
      </Button>
    </TweetBox>
  );
};

export default Tweet;
