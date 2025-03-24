"use client";

import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import useGetBlogDetail from "../../../hooks/blog/useGetBlogDetail";
import useUpdateBlog from "../../../hooks/blog/useUpdateBlog";
import { useEffect } from "react";

export default function BlogUpdatePage() {
  const { id } = useParams();
  const router = useRouter();
  const { data: blog, isLoading } = useGetBlogDetail(id);
  const { mutate: updateBlog } = useUpdateBlog();
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (blog) {
      reset({
        title: blog.title,
        content: blog.content,
        author: blog.author,
      });
    }
  }, [blog, reset]);

  const onSubmit = (data) => {
    updateBlog(
      { id, ...data },
      {
        onSuccess: () => {
          alert("수정 완료!");
          router.push("/blog/list");
        },
      }
    );
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Blog 수정 페이지</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>제목</label>
          <input type="text" {...register("title", { required: true })} />
        </div>

        <div>
          <label>내용</label>
          <textarea {...register("content", { required: true })} />
        </div>

        <div>
          <label>작성자</label>
          <input type="text" {...register("author", { required: true })} />
        </div>

        <button type="submit">수정 완료</button>
      </form>
    </div>
  );
}
