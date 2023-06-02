import { Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
