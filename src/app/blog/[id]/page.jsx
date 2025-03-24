"use client";

import { useParams, useRouter } from "next/navigation";
import useGetBlogDetail from "../../hooks/blog/useGetBlogDetail";
import useDeleteBlog from "../../hooks/blog/useDeleteBlog";

export default function BlogDetailPage() {
  const router = useRouter();
  const { id } = useParams();
  const { data: blog, isLoading, isError } = useGetBlogDetail(id);
  const { mutate: deleteBlog, isLoading: isDeleting } = useDeleteBlog();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred</div>;

  const handleEdit = (id) => {
    router.push(`/blog/update/${id}`);
  };

  const handleDelete = (id) => {
    const confirmed = confirm("정말 삭제하시겠습니까?");
    if (confirmed) {
      deleteBlog(id);
      router.push(`/blog/list`);
    }
  };

  return (
    <div>
      <h1>Blog 상세 페이지</h1>
      <div>
        <strong>제목:</strong>
        <p>{blog.title}</p>
      </div>

      <div>
        <strong>내용:</strong>
        <p>{blog.content}</p>
      </div>

      <div>
        <strong>작성자:</strong>
        <p>{blog.author}</p>
      </div>
      <button onClick={() => handleDelete(blog.id)} disabled={isDeleting}>
        {isDeleting ? "삭제 중..." : "삭제"}
      </button>
      <button onClick={() => handleEdit(blog.id)}>수정하기</button>
    </div>
  );
}
