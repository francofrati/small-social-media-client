import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './views/login/login';
import Feed from './views/feed/feed';
import Layout from './components/layout/layout';

function App() {
  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/feed" element={<Feed />} />
      </Route>
      <Route path="/*" element={<Navigate to={'/login'} />} />
    </Routes>
  );
}

export default App;
