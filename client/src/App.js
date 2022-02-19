import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import { Navigation, PageNotFound } from './commons/components';
import { Home, ListCustomer, Login, LoginAdmin, Profile, Register } from './app/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/profile/:id" exact element={
            <>
              <Navigation />
              <Profile />
            </>
          } />
          <Route path="/list-customer" exact element={
            <>
              <Navigation />
              <ListCustomer />
            </>
          } />
          <Route path="/register" exact element={
            <>
              <Register />
            </>
          } />
          <Route path="/admin/login" exact element={
            <>
              <LoginAdmin />
            </>
          } />
          <Route path="/login" exact element={
            <>
              <Login />
            </>
          } />
          <Route path="/" exact element={
            <>
              <Navigation />
              <Home />
            </>
          } />
          <Route path="/*" element={
            <>
              <PageNotFound />
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;