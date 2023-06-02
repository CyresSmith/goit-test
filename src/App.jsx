import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Spinner from 'components/Shared/Spinner';

const SharedLayout = lazy(() => import('pages/SharedLayout'));
const Register = lazy(() => import('pages/Register'));

function App() {
  const dispatch = useDispatch();

  const { MediaType } = useMediaHook();

  const { data, isLoading, error, isError, isSuccess } =
    useGetCurrentUserQuery();

  useEffect(() => {
    if (!MediaType) {
      return;
    }

    dispatch(setMediaType(MediaType));
  }, [MediaType, dispatch]);

  useEffect(() => {
    if (!isLoading && isSuccess) {
      dispatch(setUser(data));
    }
  }, [data, dispatch, error, isError, isLoading, isSuccess]);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Shop />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/history"
              element={
                <PrivateRoute>
                  <History />
                </PrivateRoute>
              }
            />
            <Route path="/verify/:token" element={<Verify />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} /> */
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
