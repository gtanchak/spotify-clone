import { FC } from "react";
import { HomeIcon, LibraryIcon, SearchIcon } from "@heroicons/react/outline";
const Sidebar: FC = () => {
  return (
    <div>
      <div>
        <button className='flex items-center'>
          <HomeIcon className='h-5 w-5' />
          <p>Home</p>
        </button>
        <button className='flex items-center'>
          <SearchIcon className='h-5 w-5' />
          <p>Search</p>
        </button>
        <button className='flex items-center'>
          <LibraryIcon className='h-5 w-5' />
          <p>Your Library</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
