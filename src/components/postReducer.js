export default function setPost(currentPost, action) {
  switch (action.type) {
    case "GET":
      return action.data;
    case "DELETE":
      return currentPost.filter((post) => post.id != action.id);
    case "CREATE":
      return [...currentPost, { ...action.data }];
    case "MODIFY":
      return currentPost.map((post) =>
        post.id === action.data.id ? action.data : post
      );
    default:
      return currentPost;
  }
}
