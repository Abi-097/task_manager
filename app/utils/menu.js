import { FaHome } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";
import { LuListTodo } from "react-icons/lu";
const menu = [
  {
    id: 1,
    title: "All Tasks",
    icon: <FaHome />,
    link: "/",
  },
  {
    id: 2,
    title: "Important!!",
    icon: <IoIosListBox />,
    link: "/important",
  },
  {
    id: 3,
    title: "Completed!",
    icon: <FaCheckCircle />,
    link: "/completed",
  },
  {
    id: 4,
    title: "Do It Now",
    icon: <LuListTodo />,
    link: "/incomplete",
  },
];
export default menu;
