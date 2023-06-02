import { Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar';

import ScrollUpBtn from 'components/shared/ScrollUpButton';
import { TiArrowUpThick } from 'react-icons/ti';
import { useSelector } from 'react-redux';
import { getMediatype } from 'redux/selectors';

const SharedLayout = () => {
  const mediaType = useSelector(getMediatype);

  return (
    <>
      <AppBar />
      <Outlet />
      <ScrollUpBtn
        icon={TiArrowUpThick}
        iconSize={30}
        round={true}
        mediaType={mediaType}
      />
    </>
  );
};

export default SharedLayout;
