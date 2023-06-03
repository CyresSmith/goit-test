import axios from 'axios';
import { useState, useEffect } from 'react';

import { TweetBox, GoIt, ImageBox, Delimiter, InfoBox } from './Tweet.styled';

import Avatar from './Avatar';
import Button from 'components/Shared/Button';

const Tweet = ({ user }) => {
  const [User, setUser] = useState({
    _id: '',
    name: '',
    tweets: '',
    followers: '',
    avatar: '',
  });

  const [Follow, setFollow] = useState(false);

  const followHandle = () => {
    setFollow(prev => !prev);

    patchFollow();
  };

  const patchFollow = async () => {
    try {
      const { data } = await axios.patch(
        `http://localhost:8989/users/${User._id}/${
          Follow ? 'unfollow' : 'follow'
        }`
      );

      setUser(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [user]);

  useEffect(() => {
    const Followings = JSON.parse(localStorage.getItem('followings')) || [];

    if (Followings.includes(User._id)) {
      setFollow(true);
    }
  }, [User]);

  useEffect(() => {
    const Followings = JSON.parse(localStorage.getItem('followings')) || [];

    if (Follow) {
      Followings.push(User._id);
      localStorage.setItem('followings', JSON.stringify(Followings));
    }

    if (!Follow) {
      const newFollowings = Followings.filter(id => id !== User._id);
      localStorage.setItem('followings', JSON.stringify(newFollowings));
    }
  }, [Follow, User._id]);

  return (
    <TweetBox>
      <GoIt />
      <ImageBox />
      <Delimiter />
      <Avatar avatar={user.avatar} />
      <InfoBox>
        <span>{User.tweets.toLocaleString('en-US')} TWEETS</span>
        <span>{User.followers.toLocaleString('en-US')} FOLLOWERS</span>
      </InfoBox>
      <Button onClick={followHandle} active={Follow}>
        {Follow ? 'FOLLOWING' : 'FOLLOW'}
      </Button>
    </TweetBox>
  );
};

export default Tweet;
