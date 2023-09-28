import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import React from "react";

export default function ProfileIcon() {
  return (
    <Avatar className='w-6 h-6'>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
