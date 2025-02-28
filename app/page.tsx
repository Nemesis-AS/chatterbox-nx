import PostCard from "@/components/PostCard";

export default function Home() {
  return (
    <div className="grow flex flex-col gap-4 overflow-y-auto">
      <PostCard />
      <PostCard />

      <PostCard media />
      <PostCard />

      <PostCard media />

      <PostCard />

    </div>
  );
}
