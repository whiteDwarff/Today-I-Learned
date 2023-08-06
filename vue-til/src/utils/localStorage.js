function saveUserToStorage(nickname) {
  localStorage.setItem('til_user', nickname);
}
function getUserFromStorage() {
  return localStorage.getItem('til_user');
}
function deleteStorage() {
  localStorage.removeItem('til_user');
}
export { saveUserToStorage, getUserFromStorage, deleteStorage };
