import { Button, ButtonGroup } from "@mui/material";
import Image from "next/image";
import Navbar from "./components /global/Navbar";
import QuizCard from "./components /home/Card";
import data from "./categories.json";
export default function Home() {
  console.log(data);
  return (
    <main>
      <div className=" flex justify-center flex-wrap gap-4 mt-4">
        {data.categories.map((item, index) => (
          <QuizCard title={item.category} content={item.description} />
        ))}
      </div>

      <hr />
      <h4 className="mt-12 text-3xl text-center">Recently Joined</h4>
    </main>
  );
}
