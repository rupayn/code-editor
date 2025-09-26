"use client"
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <>
    <div
    className="bg-cover bg-no-repeat bg-center flex justify-center items-center h-screen w-screen bg-black"
    >
      <Button onClick={() => alert("clicked")}>Button</Button>
    </div>
    </>
  );
}
