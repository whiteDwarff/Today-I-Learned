function saveUserName(nickname) {
  localStorage.setItem('til_user', nickname);
}
function getUserName() {
  return localStorage.getItem('til_user');
}
function logoutUser() {
  localStorage.removeItem('til_user');
}
export { saveUserName, getUserName, logoutUser };
