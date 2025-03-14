import React from "react";

import Sidebar from "@/components/layout/Sidebar";

const CommunityLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex gap-4">
      <Sidebar />

      <div className="grow flex gap-8 justify-center">
        <div className="flex flex-col gap-4 items-center">{children}</div>
      </div>
    </div>
  );
};

export default CommunityLayout;
