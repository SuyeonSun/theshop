"use client";

import useGetBlogList from "../../hooks/blog/useGetBlogList";
import { useRouter } from "next/navigation";

export default function BlogListPage() {
  const { data, isLoading, isError } = useGetBlogList();
  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred</div>;

  const handleDetailBtn = (id) => {
    router.push(`/blog/${id}`);
  };

  return (
    <div>
      <h1>Blog List 페이지</h1>
      <ul>
        {data.map((blog) => (
          <li key={blog.id} style={{ marginBottom: "20px" }}>
            <p>{blog.title}</p>
            <p>Author: {blog.author}</p>
            <p>Created At: {blog.createdDate}</p>
            <button onClick={() => handleDetailBtn(blog.id)}>상세보기</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
