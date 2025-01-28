import * as fs from "node:fs";
import PostItem from "./post-item";

const postsFolder = "/docs";

// FIXME fs 모듈로 파일 이름 읽어오기
// const posts = fs.readdirSync(postsFolder);
const posts = [
  { pathname: "post1" },
  { pathname: "post2" },
  { pathname: "post3" },
  { pathname: "post4" },
  { pathname: "post1" },
  { pathname: "post2" },
  { pathname: "post3" },
  { pathname: "post4" },
];

export default function PostList() {
  return (
    <ul className="grid gap-6 px-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => {
        return (
          <PostItem
            key={index}
            post={{ index, image: "", title: "title", date: new Date().toISOString() }}
          />
        );
      })}
    </ul>
  );
}
