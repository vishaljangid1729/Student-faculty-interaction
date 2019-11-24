export const isLoggedIn = () => {
  return localStorage.getItem('username') != null
}

export const logout = () => {
  localStorage.removeItem('username')
}
