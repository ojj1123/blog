import type { BaseRuntimePageInfo } from "@rspress/shared";
import { Link } from "rspress/theme";

interface PostItemProps {
  isFirst: boolean;
  post: BaseRuntimePageInfo;
}

export default function PostItem({ post, isFirst }: PostItemProps) {
  return (
    <li
      className={`flex flex-col overflow-hidden rounded-sm transition-shadow hover:shadow-lg ${isFirst ? "lg:col-span-2 lg:row-span-2" : ""}`}
    >
      <Link href={post.routePath}>
        <div className="relative w-full flex-1">
          <img src="/og-image.png" alt="og-image" className="object-cover" />
        </div>

        <div className="p-4">
          <h2 className="hover:text-primary line-clamp-2 text-lg font-semibold transition-colors">
            {post.title}
          </h2>
          <div className="flex items-center text-sm">
            <time dateTime={new Date().toISOString()}>
              {new Date(new Date().toISOString()).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </div>
      </Link>
    </li>
  );
}
