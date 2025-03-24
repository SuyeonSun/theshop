import { useQuery } from "@tanstack/react-query";
import { getBlogDetail } from "../../remote/blog";

function useGetBlogDetail(id) {
  return useQuery({
    queryKey: ["blog", "detail", id],
    queryFn: () => getBlogDetail(id),
    enabled: !!id, // id가 있을 때만 요청
  });
}

export default useGetBlogDetail;
