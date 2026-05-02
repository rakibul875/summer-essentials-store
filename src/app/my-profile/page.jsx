"use client";

import UpdateModal from "@/components/UpdateModal";
import { authClient } from "@/lib/auth-client";
import React from "react";

const page = () => {




  const userData = authClient.useSession();
  const user = userData.data?.user;
  return (
    <div className="container mx-auto bg-slate-300 p-5 lg:p-10 my-10">
     
      <UpdateModal />
    </div>
  );
};

export default page;
