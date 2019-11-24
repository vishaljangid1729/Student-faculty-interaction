export const isLoggedIn = () => {
    return localStorage.getItem('username') != null;
  };
  // export const isLoggedIn = () =>{
  //   return true;
  // }
  
  export const logout = () => {
    localStorage.removeItem('username');
  };
  