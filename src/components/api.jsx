export async function getPost(api, query, setState = {}) {
  setState.setLoad(true);
  try {
    const response = await fetch(`${api}${query}`);
    if (!response.ok) {
      throw new Error(`Error:${response.status}`);
    }
    const data = await response.json();
    setState.dispatch({ type: "GET", data: data });
  } catch (error) {
    setState.setErr(error.message);
  } finally {
    setState.setLoad(false);
  }
}

export async function deletePost(api, id, setState = {}) {
  setState.setLoad(true);
  try {
    const response = await fetch(`${api}/${id}`, { method: "DELETE" });
    if (!response.ok) {
      throw new Error(`DELETE Failed :${response.status}`);
    }
    setState.dispatch({ type: "DELETE", id: id });
  } catch (err) {
    setState.setErr(err.message);
  } finally {
    setState.setLoad(false);
  }
}

export async function postPost(api, newPost, setState = {}) {
  setState.setLoad(true);
  try {
    const response = await fetch(`${api}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });
    if (!response.ok) {
      throw new Error(`Post Failed: ${response.status}`);
    }
    const data = await response.json();
    setState.dispatch({ type: "CREATE", data: data });
  } catch (err) {
    setState.setErr(err.message);
  } finally {
    setState.setLoad(false);
  }
}

export async function modifyPost(api, id, updateData, setState) {
  setState.setLoad(true);
  try {
    const response = await fetch(`${api}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    setState.dispatch({ type: "MODIFY", data: data });
  } catch (err) {
    setState.setErr(err.message);
  } finally {
    setState.setLoad(false);
  }
}
