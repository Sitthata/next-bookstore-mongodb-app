type TagListProps = {
  genres: [];
};

export default function TagList({ genres }: TagListProps) {
  return (
    <div className="flex items-center gap-2">
    <h2 className="text-xl">Genre:</h2>
      {genres.map((genre) => (
        <span className="mr-2 text-sm text-neutral-200 py-[0.3rem] px-[0.75rem] bg-primary rounded-full" key={genre}>
          {genre}
        </span>
      ))}
    </div>
  );
}
