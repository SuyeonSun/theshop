export function getBlogList() {
  return fetch(`http://localhost:8081/api/posts/list`).then((res) =>
    res.json()
  );
}

export function createNewBlog(data) {
  return fetch(`http://localhost:8081/api/posts/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: data.title,
      content: data.content,
      author: data.author,
    }),
  }).then((res) => res.json());
}

export function deleteBlog(id) {
  return fetch(`http://localhost:8081/api/posts/${id}`, {
    method: "DELETE",
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to delete blog");
    return res.json();
  });
}

export function getBlogDetail(id) {
  return fetch(`http://localhost:8081/api/posts/${id}`).then((res) =>
    res.json()
  );
}

export function updateBlog({ id, title, content }) {
  return fetch(`http://localhost:8081/api/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content }),
  }).then((res) => res.json());
}
