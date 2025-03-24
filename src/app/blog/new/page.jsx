"use client";

import { useRouter } from "next/navigation";
import useCreateNewBlog from "../../hooks/blog/useCreateNewBlog";
import { useForm } from "react-hook-form";

export default function BlogNewPage() {
  const { mutate, isLoading, isError, isSuccess, error } = useCreateNewBlog();
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: () => {
        reset();
        router.push(`/blog/list`);
      },
    });
  };

  return (
    <div>
      <h1>Blog New 페이지</h1>

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

        <button type="submit" disabled={isLoading}>
          {isLoading ? "작성 중..." : "블로그 작성"}
        </button>
      </form>

      {isError && <p>에러 발생: {error.message}</p>}
      {isSuccess && <p>블로그가 성공적으로 생성되었습니다!</p>}
    </div>
  );
}
