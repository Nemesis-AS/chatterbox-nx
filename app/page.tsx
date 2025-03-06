import LoginModal from "@/components/auth/LoginModal";
import Rightbar from "@/components/layout/Rightbar";
import Sidebar from "@/components/layout/Sidebar";
import PostCard from "@/components/PostCard";

export default function Home() {
  return (
    <div className="flex gap-4">
      <Sidebar />

      <div className="grow flex gap-8 justify-center">
        <div className="flex flex-col gap-4 items-center">
          <PostCard />
          <PostCard />

          <PostCard media />
          <PostCard />

          <PostCard media />

          <PostCard />
        </div>
        <Rightbar />
      </div>
    </div>
  );
}
