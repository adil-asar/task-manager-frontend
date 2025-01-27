
import tasklist from "../../assets/task-list.png";
import { Link , useLocation} from "react-router-dom";
import { PiCirclesFourLight } from "react-icons/pi";
import { PiChecksLight } from "react-icons/pi";
import { PiHeartStraightLight } from "react-icons/pi";
const Sidebar = () => {
  const menus = [
    {
      id: 1,
      path: "/",
      icon: <PiCirclesFourLight className=" text-2xl" />,
    },
    {
      id: 2,
      path: "/completed-tasks",
      icon: <PiChecksLight className=" text-xl" />,
    },
    {
      id: 3,
      path: "/important-tasks",
      icon: <PiHeartStraightLight className=" text-xl" />,
    },
  ];

  const location = useLocation();

  

  return (
    <aside className=" w-[75px] fixed top-0 left-0 px-3 py-6 border-r border-gray-200 dark:border-[#3c6382] bg-white dark:bg-[#0a3d62] h-screen flex flex-col   ">
      <div className="mb-24">
        <img src={tasklist} className="mx-auto w-10 " alt="auth image" />
      </div>

      <nav className="flex flex-col gap-5 mt-10 w-full   items-center">
        {menus.map((menu) => (
          <Link
            key={menu.id}
            className={`w-10 h-10 flex items-center text-gray-600 dark:text-gray-300 justify-center hover:bg-[#ff7f50]  hover:text-white rounded ${
              location.pathname === menu.path
                ? "bg-[#ff7f50] text-white"
                : "bg-[#f1f2f6] dark:bg-[#3c6382] "
            }`}
            to={menu.path}
          >
            {menu.icon}
          </Link>
        ))}
      </nav>

     

    </aside>
  );
};

export default Sidebar;
