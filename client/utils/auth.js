// imports the decode method from jwt-decode to decode the token and get the user's information
import decode from 'jwt-decode';

class AuthService {

  // retrieve user data from token
  getProfile() {
    return decode(this.getToken());
  }

  // check if the user is still logged in by checking if the token has expired
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // check if the token has expired by comparing the expiration date of the token with the current date
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  // retrieve token from local storage
  getToken() {
    return localStorage.getItem('id_token');
  }

  // set token to local storage and reload page to homepage
  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  // clear token from local storage and force logout with reload to homepage
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }

  register(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/user-profile');
  }
}

export default new AuthService;