import { useMutation } from "@tanstack/react-query";
import { createNewBlog } from "../../remote/blog";

function useCreateNewBlog(data) {
  return useMutation({
    mutationKey: ["blog", "/new"],
    mutationFn: createNewBlog,
  });
}

export default useCreateNewBlog;
