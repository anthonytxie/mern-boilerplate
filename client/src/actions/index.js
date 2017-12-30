import axios from 'axios';
import { AUTH_USER } from './types';

export const oAuthUser = (query, history) => async dispatch => {
  try {
    const res = await axios.get(`/api/auth/google/callback${query}`);
    dispatch({ type: AUTH_USER, payload: res.data });
    localStorage.setItem('token', res.data.token);
    history.push('/dashboard');
  } catch (e) {
    dispatch({ type: AUTH_USER, payload: false });
  }
};

export const userLogin = (email, password, history) => async dispatch => {
  try {
    const res = await axios.post('/api/auth/locallogin', { email, password });
    dispatch({ type: AUTH_USER, payload: res.data });
    localStorage.setItem('token', res.data.token);
    history.push('/dashboard');
  } catch (e) {
    dispatch({ type: AUTH_USER, payload: false });
  }
};

export const signOutUser = history => async dispatch => {
  localStorage.removeItem('token');
  history.push('/');
  dispatch({ type: AUTH_USER, payload: false });
};

export const fetchUser = () => async dispatch => {
  try {
    const res = await axios.get('/api/current_user', {
      headers: { authorization: localStorage.getItem('token') },
    });
    dispatch({ type: AUTH_USER, payload: res.data });
  } catch (e) {
    dispatch({ type: AUTH_USER, payload: false });
  }
};

export const createUser = (email, password, history) => async dispatch => {
  try {
    const res = await axios.post('/api/auth/localsignup', { email, password });
    dispatch({ type: AUTH_USER, payload: res.data });
    localStorage.setItem('token', res.data.token);
    history.push('/dashboard');
  } catch (e) {
    dispatch({ type: AUTH_USER, payload: false });
  }
};
