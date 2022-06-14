import { useSession } from "next-auth/react";
import Image from "next/image";
import { FC } from "react";

const Center: FC = () => {
  const { data: session } = useSession();

  return (
    <div className='flex flex-grow'>
      <h1>Center</h1>
      <header>
        <div>
          <img
            className='rounded-full w-10 h-10'
            src={session?.user?.image || undefined}
            alt={session?.user?.name || undefined}
          />
          <h2>{session?.user?.name}</h2>
        </div>
      </header>
    </div>
  );
};

export default Center;
