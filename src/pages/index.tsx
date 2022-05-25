import type { NextPage } from "next";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <Sidebar />
        {/* center */}
      </main>
      <div>{/* Player */}</div>
    </div>
  );
};

export default Home;
