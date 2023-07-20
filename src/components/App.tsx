import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

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
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
