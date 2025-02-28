import PostCard from "@/components/PostCard";

export default function Home() {
  return (
    <div className="grow flex flex-col gap-4 items-center">
      <PostCard />
      <PostCard />

      <PostCard media />
      <PostCard />

      <PostCard media />

      <PostCard />

    </div>
  );
}
