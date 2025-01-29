import PostItem from "./post-item";
import { usePageData } from "rspress/runtime";

export default function PostList() {
  const { siteData } = usePageData();
  const posts = siteData.pages.filter((page) => page.routePath.startsWith("/posts"));

  return (
    <ul className="grid gap-6 px-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => {
        return <PostItem key={post.routePath} isFirst={index === 0} post={post} />;
      })}
    </ul>
  );
}
