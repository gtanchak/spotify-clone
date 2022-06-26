import type { NextPage } from "next";
import Center from "src/components/Center";
import Sidebar from "src/components/Sidebar";

const Home: NextPage = () => {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <main className='flex'>
        <Sidebar />
        <Center />
      </main>
      <div>{/* Player */}</div>
    </div>
  );
};

export default Home;
