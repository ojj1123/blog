import { PropsWithChildren } from "react";

export default function HomeLayout({ children }: PropsWithChildren) {
  return <main className="m-auto max-w-[57rem]">{children}</main>;
}
