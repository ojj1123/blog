interface PostItemProps {
  post: {
    index: number;
    image: string;
    title: string;
    date: string;
  };
}

export default function PostItem({ post: { index } }: PostItemProps) {
  return (
    <li
      className={`flex flex-col overflow-hidden rounded-sm transition-shadow hover:shadow-lg ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
    >
      <div className="relative w-full flex-1">
        <img src="/og-image.png" alt="og-image" className="object-cover" />
      </div>

      <div className="p-4">
        <h2 className="hover:text-primary line-clamp-2 text-lg font-semibold transition-colors">
          title title
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
    </li>
  );
}
