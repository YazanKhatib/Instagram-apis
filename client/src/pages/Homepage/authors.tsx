import { AuthorCard } from "../../components/authorCard";

export const Authors: React.FC = () => {
  const authors = [
    {
      name: "Floyd Miles",
      description: "Content Writer @Company",
      img: "https://gravatar.com/avatar/4208d66dbc36d70a75c0d9532632f6de?s=400&d=robohash&r=x",
    },
    {
      name: "Floyd Miles",
      description: "Content Writer @Company",
      img: "https://gravatar.com/avatar/c7b0be1c714e2eb083e75bde47a92fa3?s=400&d=robohash&r=x",
    },
    {
      name: "Floyd Miles",
      description: "Content Writer @Company",
      img: "https://gravatar.com/avatar/cb8a9b8b51f02c7c4382625beb7967c8?s=400&d=robohash&r=x",
    },
    {
      name: "Floyd Miles",
      description: "Content Writer @Company",
      img: "https://gravatar.com/avatar/f3e1016369074d50f9c148c046742d0e?s=400&d=robohash&r=x",
    },
  ];

  return (
    <section id="Authors" className="m-auto mb-20 w-4/5">
      <h1 className="mb-12 text-center text-4xl font-bold">List of Authors</h1>
      <div className="flex justify-between">
        {authors.map(({ name, description, img }) => (
          <AuthorCard name={name} description={description} img={img} />
        ))}
      </div>
    </section>
  );
};
