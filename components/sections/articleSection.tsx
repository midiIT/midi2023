export default function ArticleSection(props: {
  name: string;
}) {
  return (
    <div className="flex flex-col text-center">
      <button className="flex space-x-4 items-center">
        <img className="float-left h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36" src="/media/placeholder.png" alt="placeholder"/>
        <span>
          {props.name}
        </span>
      </button>
    </div>
  );
}