import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Spinner from 'components/Shared/Spinner';

const SharedLayout = lazy(() => import('pages/SharedLayout'));
const Home = lazy(() => import('pages/Home'));
const Tweets = lazy(() => import('pages/Tweets'));

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/tweets" element={<Tweets />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
