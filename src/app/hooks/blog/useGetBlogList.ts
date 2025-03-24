"use client";

import { useQuery } from "@tanstack/react-query";
import { getBlogList } from "../../remote/blog";

function useGetBlogList() {
  return useQuery({
    queryKey: useGetBlogList.getKey(),
    queryFn: () => getBlogList(),
  });
}

useGetBlogList.getKey = () => ["blog", "/list"];

export default useGetBlogList;
