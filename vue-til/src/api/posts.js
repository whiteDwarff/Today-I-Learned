// 학습노트 조작과 관련된 CRUD API
import { posts } from '@/api/index';

// 학습노트 데이터 목록 조회
function fetchPosts() {
  return posts.get('/');
}
//학습노트 생성
function createPost(postData) {
  return posts.post('/', postData);
}
// 학습노트 데이터 삭제
function deletePost(postId) {
  return posts.delete(postId);
}
// 특정 학습노트 데이터 조회
function fetchPost(postId) {
  return posts.get(postId);
}
// 학습노트 데이터 수정
function editPost(postId, postData) {
  return posts.put(postId, postData);
}
export { fetchPosts, createPost, deletePost, fetchPost, editPost };
