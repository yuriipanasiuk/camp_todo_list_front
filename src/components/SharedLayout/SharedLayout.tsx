import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Layout } from './SharedLayout.styled';
import Filter from '../Filter';

const SharedLayout = () => {
  return (
    <Layout>
      <p>it is future header</p>
      <Filter />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Layout>
  );
};

export default SharedLayout;
