import { BASE_URL } from '../utils/Url';

export const logout = (user) => {
  // make a call to log our user out
  // dispatch the logout action
  // wrapping it in a thunk

  return(dispatch) => {
    fetch(`${BASE_URL}/auth/sign_out`, {
      method: 'DELETE',
      headers: authHeaders(user),
    }).then( () => dispatch({ type: 'LOGOUT' }))
  }

  // anytime you do anything asynchronous, wrap it in  Thunk, below the dispatch is a Thunk
export const auth = (user, endpoint, history) => {
  return(dispatch) => {
  fetch(`${BASE_URL}/${endpoint}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...user })
  }).then( res => res.json() )
    .then( user => {
      dispatch({ type: 'USER', user })
      history.push('/');
    }
  }
}

export const authHeaders = (user) => {
  let { client, email, token } = user;
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'token-type': 'Bearer',
    'access-token': token,
    'client': client,
    'uid': email
  }
}
