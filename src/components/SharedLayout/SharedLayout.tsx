import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Filter from '../Filter';
import SearchField from '../SearchField';
import Auth from '../Auth';
import { Layout, Wraper } from './SharedLayout.styled';
import Container from '../Container/Container';

const SharedLayout = () => {
  return (
    <Layout>
      <Container>
        <Auth />
        <Wraper>
          <Filter />
          <SearchField />
        </Wraper>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </Layout>
  );
};

export default SharedLayout;
