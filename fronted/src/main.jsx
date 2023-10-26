import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


import store from './store.js';
import App from './App.jsx';
import PrivateRoute from './screens/PrivateRoute.jsx';
import HomeScreen from './screens/HomeScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path='' element={<PrivateRoute />} />
      <Route path="/profile" element={<ProfileScreen />} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store}>
 <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  </Provider>
)
