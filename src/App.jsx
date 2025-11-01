import "./App.css";
import PostInput from "./components/PostInput.jsx";
import PostList from "./components/PostList.jsx";
import FilterOption from "./components/FilterOption.jsx";
import setPost from "./components/postReducer.js";
import {
  getPost,
  deletePost,
  postPost,
  modifyPost,
} from "./components/api.jsx";
import { useEffect, useReducer, useState } from "react";
function App() {
  const BASE__URL = "http://localhost:3000/posts";
  const [load, setLoad] = useState(false);
  const [post, dispatch] = useReducer(setPost, []);
  const [err, setErr] = useState(null);
  const [editPost, setEditPost] = useState(null);
  const [visiblePost, setVisiblePost] = useState(post);
  function handleDelete(id) {
    deletePost(BASE__URL, id, { setLoad, setErr, dispatch });
  }
  function handleCreate(post) {
    const date = new Date();
    const title = post.title;
    const content = post.content;
    const author = post.author;
    const createdAt = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;
    if (title && content && author)
      postPost(
        BASE__URL,
        { title, content, author, createdAt },
        { setLoad, setErr, dispatch }
      );
  }
  function handleEdit(post, id) {
    modifyPost(BASE__URL, id, post, { setLoad, setErr, dispatch });
    setEditPost(null);
  }
  // ---------------------------This function use for small data, u just fetch one time and fillter client-side-------------------

  // function handleSearch(authorSearch, titleSearch) {
  //   if (!authorSearch && !titleSearch) {
  //     setVisiblePost(post);
  //     return;
  //   }

  //   const filtered = post.filter((p) => {
  //     const matchAuthor = p.author
  //     .toLowerCase()
  //       .includes(authorSearch.toLowerCase());
  //     const matchTitle = p.title
  //       .toLowerCase()
  //       .includes(titleSearch.toLowerCase());
  //     return matchAuthor || matchTitle;
  //   });

  //   setVisiblePost(filtered);
  // }
  // -----------This function use for big data, first time u just fetch small piec of data and fetch many time-----
  function handleSearch(authorSearch, titleSearch) {
    let query = `?`;
    if (authorSearch) query += `author=${authorSearch}&`;
    if (titleSearch) query += `title=${titleSearch}`;
    getPost(BASE__URL, query, { setLoad, setErr, dispatch });
  }

  useEffect(() => {
    getPost(BASE__URL, ``, {
      setLoad,
      setErr,
      dispatch,
    });
  }, []);
  useEffect(() => {
    setVisiblePost(post);
  }, [post]);
  if (load) {
    return <div>Loading...</div>;
  }
  if (err != null) {
    return <div>{err}</div>;
  }
  return (
    <>
      <FilterOption handleSearch={handleSearch} />
      <PostInput
        handleCreate={handleCreate}
        handleModify={handleEdit}
        editPost={editPost}
      />
      <PostList
        postList={post}
        handleDelete={handleDelete}
        handleModify={setEditPost}
      />
    </>
  );
}

export default App;
