import { useEffect, useState } from "react";
import "./PostInput.css";
export default function PostInput({ handleCreate, handleModify, editPost }) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
  });
  useEffect(() => {
    if (editPost) {
      setFormData(editPost); // điền dữ liệu post đang sửa vào form
    }
  }, [editPost]);
  function handleSubmit(e) {
    e.preventDefault();
    if (editPost) {
      handleModify(formData, formData.id);
    } else {
      handleCreate(formData);
    }
    setFormData({
      title: "",
      content: "",
      author: "",
    });
  }
  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <label htmlFor="content">Content</label>
      <input
        type="text"
        name="content"
        id="content"
        placeholder="content"
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
      />
      <label htmlFor="author">Author</label>
      <input
        type="text"
        name="author"
        id="author"
        value={formData.author}
        placeholder="author"
        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
      />
      <button type="submit">{editPost ? "Update" : "Create"}</button>
    </form>
  );
}
