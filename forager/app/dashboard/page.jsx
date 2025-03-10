"use client";
import NavBar from '../../components/NavBar'; // Adjust the path as necessary
import { useState } from 'react';
import Search from '../../components/Search';
import pillList from '../../components/Pill';
import MushroomCard from '../../components/MushroomCard';
export default function DashboardPage() {
  const [list, setlist] = useState("");
  return (
    <div className="page bg-white min-h-screen text-black">
      <div class="flex flex-col items-center text-center bg-[rgb(87,144,118)] justify-start pt-20 mb-10 text-white">
        <h1 class="text-2xl">Hi,</h1>
        <h3 class="text-4xl font-bold">Chantelle!</h3>
      </div>
      <div>
        <Search onSearch={""}/>
        <h3 class="text-2xl font-bold mt-10 ml-5">My Collection</h3>
        <div className="flex flex-row mt-6">
          <button className="bg-[rgb(87,144,118)] px-4 rounded-full">
            <pillList className="flex mt-6 ml-5"/>{"texas"}
          </button>
          <button className="bg-[rgb(87,144,118)] px-4 rounded-full">
            <pillList className="flex mt-6 ml-5"/>{"favorite"}
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-5 mt-10 ml-5">
        <MushroomCard
          mush_name="Death Cap"
          mush_image="./deathcap.jpg"
          mush_des="is toxic"
          onClick={() => handleMushroomClick("Death Cap")}
        />
        <MushroomCard
          mush_name="Paddy Straw"
          mush_image="./paddy straw.png"
          mush_des="is edible"
          onClick={() => handleMushroomClick("Paddy Straw")}
        />
        <MushroomCard
          mush_name="Destroying Angel"
          mush_image="./Destroying Angel.png"
          mush_des="is toxic"
          onClick={() => handleMushroomClick("Destroying Angel")}
        />
        <MushroomCard
          mush_name="False Death Cap"
          mush_image="./False Death Cap.png"
          mush_des="is toxic"
          onClick={() => handleMushroomClick("False Death Cap")}
        />
        <MushroomCard
          mush_name="PuffBall"
          mush_image=".//Puffball.png"
          mush_des="is edible"
          onClick={() => handleMushroomClick("PuffBall")}
        />
      </div>
      <div className="bg-[rgb(87,144,118)]">
        <NavBar/>
      </div>
    </div>
  );
}
