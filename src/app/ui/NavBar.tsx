import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div className="flex justify-between p-5 text-white bg-neutral-400 text-lg">
      <h1 className="text-xl">LocalBookStore</h1>
      <div className="flex gap-4">
        <Link className="cursor-pointer hover:underline" href="/add">
          <h1>Add book</h1>
        </Link>
      </div>
    </div>
  );
}
