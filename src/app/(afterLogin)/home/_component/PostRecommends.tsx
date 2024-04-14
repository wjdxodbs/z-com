"use client";

import { useQuery } from "@tanstack/react-query";
import { getPostRecommends } from "../_lib/getPostRecommends";
import Post from "../../_component/Post";

export default function PostRecommends() {
  const { data } = useQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
  });

  // return data.map((post) => <Post />);
}
