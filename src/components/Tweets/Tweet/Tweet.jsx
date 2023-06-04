import axios from 'axios';
import { useState, useEffect } from 'react';

import { TweetBox, GoIt, ImageBox, Delimiter, InfoBox } from './Tweet.styled';

import { useSelector, useDispatch } from 'react-redux';

import { addFollowing, removeFollowing } from 'redux/followingsSlice';
import { getFollowings } from 'redux/selectors';

import Avatar from './Avatar';
import Button from 'components/Shared/Button';

import baseUrl from 'services/baseUrl';

const Tweet = ({ user, setUsers, Page, setPage, Filters }) => {
  const [User, setUser] = useState({
    _id: '',
    name: '',
    tweets: '',
    followers: '',
    avatar: '',
  });
  const [Follow, setFollow] = useState(false);

  const Followings = useSelector(getFollowings);
  const dispatch = useDispatch();

  const followHandle = () => {
    setFollow(prev => !prev);

    if (!Follow) {
      dispatch(addFollowing(User._id));

      if (Filters === 'follow') {
        setUsers(prev => prev.filter(item => item._id !== user._id));
      }
    }

    if (Follow) {
      dispatch(removeFollowing(User._id));

      if (Filters === 'followings') {
        setUsers(prev => prev.filter(item => item._id !== user._id));
      }
    }

    patchFollow();
  };

  const patchFollow = async () => {
    try {
      const { data } = await axios.patch(
        `${baseUrl}/${User._id}/${Follow ? 'unfollow' : 'follow'}`
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
    if (Followings.includes(User._id)) {
      setFollow(true);
    }
  }, [Followings, User]);

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
