import BookCardList from "./ui/BookCardList/BookCardList";
import { leagueSpartan } from "@/app/fonts";

export default function Home() {
  return (
    <div className="flex flex-col p-3">
      <h2 className="text-3xl my-5 text-neutral-200">Book Catagory</h2>
      <BookCardList />
    </div>
  );
}
