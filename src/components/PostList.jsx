import PostItem from "./PostItem.jsx";

export default function PostList({
  postList = [],
  handleDelete,
  handleModify,
}) {
  if (postList.length === 0) {
    return <p>No posts yet 😢</p>;
  }
  return (
    <ul>
      {postList.map((post) => (
        <PostItem
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          author={post.author}
          createdAt={post.createdAt}
          handleDelete={handleDelete}
          handleModify={() => handleModify(post)}
        />
      ))}
    </ul>
  );
}
