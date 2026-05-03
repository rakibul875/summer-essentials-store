"use client";

import { UpdateModal } from "@/components/UpdateModal";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  
  const userData = authClient.useSession();
  const user = userData.data?.user;
  return (
    <div className="container mx-auto bg-slate-300 p-5 lg:p-10 my-10">
      <div className="bg-base-100 w-90 lg:w-100 mx-auto shadow p-5 rounded-xl border-b-4 border-b-orange-500">
        <div className="space-y-2 text-center">
          <Avatar className="w-30 h-30 mx-auto">
            <Avatar.Image
              alt="John Doe"
              src={user?.image}
              className="object-cover"
            />
            <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
          </Avatar>
          <p className="text-2xl font-semibold">{user?.name}</p>
          <p className="text-xl text-gray-500">{user?.email}</p>
        </div>
        <div className="text-center mt-3">
          <UpdateModal />
        </div>
      </div>
    </div>
  );
};

export default page;
