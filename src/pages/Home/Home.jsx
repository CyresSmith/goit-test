import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { getFollowings } from 'redux/selectors';
import baseUrl from 'services/baseUrl';

import Section from 'components/Shared/Section';
import { HomeInfo } from 'components/Home/Home.styled';

const Home = () => {
  const Followings = useSelector(getFollowings);

  const [Users, setUsers] = useState([]);
  const [Followed, setFollowed] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await axios({
          url: baseUrl,
          method: 'GET',
        });

        setUsers(data.users);
      } catch (error) {
        console.error(error.message);
      }
    };

    getUsers();
  }, [Followings]);

  useEffect(() => {
    Users.map(user => {
      if (Followings.includes(user._id)) {
        setFollowed(prev => [...prev, user._id]);
      }
    });
  }, [Followings, Users]);

  return (
    <Section>
      <HomeInfo>We have {Users.length} users! </HomeInfo>
      <HomeInfo>Followed {Followed.length} users!</HomeInfo>
      <HomeInfo>Users for follow {Users.length - Followed.length}!</HomeInfo>
    </Section>
  );
};

export default Home;
