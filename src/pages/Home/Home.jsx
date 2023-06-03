import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { getFollowings } from 'redux/selectors';
import baseUrl from 'services/baseUrl';

import Section from 'components/Shared/Section';
import { useState } from 'react';
import { useEffect } from 'react';

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
      <p>We have {Users.length} users! </p>
      <p>Followed {Followed.length} users!</p>
    </Section>
  );
};

export default Home;
