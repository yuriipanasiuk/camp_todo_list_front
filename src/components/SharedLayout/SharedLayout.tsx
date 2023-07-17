import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Filter from '../Filter';
import SearchField from '../SearchField/SearchField';
import { Layout, Wraper } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Layout>
      <p>it is future header</p>
      <Wraper>
        <Filter />
        <SearchField />
      </Wraper>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Layout>
  );
};

export default SharedLayout;
