import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBlog } from "../../remote/blog";

function useUpdateBlog() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["blog", "/update"],
    mutationFn: updateBlog,
    onSuccess: () => {
      queryClient.invalidateQueries(["blog", "/list"]); // 리스트 다시 불러오기
    },
  });
}

export default useUpdateBlog;
