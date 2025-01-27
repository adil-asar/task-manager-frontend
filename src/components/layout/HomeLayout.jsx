
import Sidebar from "../portion/Sidebar";
import Navbar from "../portion/Navbar";

// eslint-disable-next-line react/prop-types
const MainLayout = ({ children }) => {
  return (
    <div className="">
      <Sidebar />
<Navbar />
      <div className="">
        <main className="flex-1 ml-[75px]   w-[calc(100%-75px)] mt-[75px]  p-6">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
