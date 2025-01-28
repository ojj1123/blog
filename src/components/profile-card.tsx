export default function ProfileCard() {
  return (
    <div className="flex items-center gap-6 px-6 pt-6 pb-20">
      <p className="flex-1 text-xl">"사람의 마음을 움직일 수 있는 글을 쓰고 싶어요"</p>

      <div className="relative size-24 overflow-hidden rounded-full bg-gray-950/5 outline -outline-offset-1 outline-gray-950/10 dark:outline-white/10">
        <img className="object-cover object-center" src="/profile-image.jpg" alt="profile image" />
      </div>
    </div>
  );
}
