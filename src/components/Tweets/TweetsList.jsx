import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { getFollowings } from 'redux/selectors';

import { List, EmptyListMessage } from './TweetsList.styled';
import Tweet from './Tweet';
import Button from 'components/Shared/Button';
import ActionsPanel from './ActionsPanel';

import baseUrl from 'services/baseUrl';

const TweetsList = () => {
  const [Users, setUsers] = useState([]);
  const [TotalPages, setTotalPages] = useState(null);
  const [Page, setPage] = useState(1);
  const [Filters, setFilters] = useState('all');

  const Followings = useSelector(getFollowings);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await axios({
          url: baseUrl,
          method: 'POST',
          data: Followings,
          params: { page: Page, type: Filters },
        });

        setTotalPages(data.totalPages);
        setUsers(prev => [...prev, ...data.users]);
      } catch (error) {
        console.error(error.message);
      }
    };

    getUsers();
  }, [Filters, Followings, Page]);

  const loadMore = () => {
    if (Page === TotalPages) {
      return;
    }
    setPage(prev => (prev += 1));
  };

  return (
    <>
      <ActionsPanel
        setFilters={setFilters}
        setUsers={setUsers}
        setPage={setPage}
      />
      {Users.length > 0 && (
        <List noPadding={Page === TotalPages}>
          {Users.map(user => (
            <Tweet
              key={user?._id}
              user={user}
              setUsers={setUsers}
              setPage={setPage}
              Filters={Filters}
            />
          ))}
        </List>
      )}
      {Users.length < 1 && <EmptyListMessage>List is empty</EmptyListMessage>}
      {Users.length > 0 && Page !== TotalPages && (
        <Button onClick={loadMore}>Load more</Button>
      )}
    </>
  );
};

export default TweetsList;
