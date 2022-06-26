import { ChevronDownIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FC } from "react";

const Center: FC = () => {
  const { data: session } = useSession();

  console.log("session", session);

  return (
    <div className='flex flex-gro'>
      <header>
        <div className='flex items-center bg-black space-x-3 opacity-90 hover:opacity-80'>
          <img
            className='rounded-full w-10 h-10'
            src={session?.user?.image || undefined}
            alt={session?.user?.name || undefined}
          />
          <h2>{session?.user?.name}</h2>
          <ChevronDownIcon className='h-5 w-5' />
        </div>
      </header>
    </div>
  );
};

export default Center;
