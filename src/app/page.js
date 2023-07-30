import { Button, ButtonGroup } from "@mui/material";
import Image from "next/image";
import Navbar from "./components /global/Navbar";
import QuizCard from "./components /home/Card";
import data from "./categories.json";
import JoinedUsers from "./components /home/JoinedUsers";
import Toast from "./Toast";
import "react-toastify/dist/ReactToastify.css";
import { CasinoSharp } from "@mui/icons-material";
export default async function Home() {
  console.log(process.env.HOST);
  //getting all joined users
  const res = await fetch(`${process.env.HOST}/api/users`, {
    cache: "no-cache",
  });
  const users = await res.json();

  return (
    <main>
      <Toast />
      <div className=" flex justify-center flex-wrap gap-4 mt-4">
        {data.categories.map((item, index) => (
          <QuizCard title={item.category} content={item.description} />
        ))}
      </div>

      <hr />
      <h4 className="mt-12 text-3xl text-center">Recently Joined</h4>

      <div className="mt-4 flex justify-center flex-col items-center">
        {users.data &&
          users.data.map((user, index) => (
            <JoinedUsers username={user.username} />
          ))}
      </div>
    </main>
  );
}
