import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBlog } from "../../remote/blog"; // API 함수

function useDeleteBlog() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["blog", "/delete"],
    mutationFn: deleteBlog, // API 요청 함수
    onSuccess: () => {
      // 삭제 성공 후, 블로그 리스트를 최신화
      queryClient.invalidateQueries(["blog", "/list"]);
    },
  });
}

export default useDeleteBlog;
