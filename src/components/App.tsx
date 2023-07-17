import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from './SharedLayout';

const SingUp = lazy(() => import('../pages/SignUp'));
const SingIn = lazy(() => import('../pages/SignIn'));
const AllTodos = lazy(() => import('../pages/AllTodos'));
const ActiveTodos = lazy(() => import('../pages/ActiveTodos'));
const CompleteTodos = lazy(() => import('../pages/CompleteTodos'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Navigate to="all" />} />
          <Route path="all" element={<AllTodos />} />
          <Route path="active" element={<ActiveTodos />} />
          <Route path="completed" element={<CompleteTodos />} />
          <Route path="signup" element={<SingUp />} />
          <Route path="signin" element={<SingIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
