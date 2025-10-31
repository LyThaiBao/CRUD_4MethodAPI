export default function PostItem({
  id,
  title,
  content,
  author,
  createdAt,
  handleDelete,
  handleModify,
}) {
  const post = {
    id,
    title,
    content,
    author,
    createdAt,
    handleDelete,
    handleModify,
  };
  return (
    <li className="post__item">
      <span>{author}</span>
      <span>{createdAt}</span>
      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={() => handleDelete(id)}>DELETE</button>
      <button onClick={() => handleModify(post)}>Modify</button>
    </li>
  );
}
