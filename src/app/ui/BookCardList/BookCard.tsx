import { BookType } from "../../types/booktype";
import Button from "../Button";
import TagList from "./TagList";

type BookCardProps = BookType;

export default function BookCard({ ...props }: BookCardProps) {
  return (
    <div className="min-w-[325px] bg-white p-5 flex flex-col gap-2">
      <h2 className="text-primary font-semibold text-lg">
        <span className="text-bold">{props.title}</span>
      </h2>
      <h3>By: {props.author}</h3>
      <TagList genres={props.genre} />
      <div className="mt-3 flex gap-3">
        <Button title="Edit Book" className="bg-primary"/>
        <Button title="Delete" className="bg-red-400"/>
      </div>
    </div>
  );
}
