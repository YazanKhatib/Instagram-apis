export const Categories: React.FC = () => {
  const categories = [
    {
      name: "Business",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      img: "/svg/business.svg",
    },
    {
      name: "Startup",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      img: "/svg/startup.svg",
    },
    {
      name: "Economy",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      img: "/svg/economy.svg",
    },
    {
      name: "Technology",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      img: "/svg/technology.svg",
    },
  ];

  return (
    <section id="Authors" className="m-auto mb-20 w-4/5 font-sen">
      <h1 className="mb-12 text-center text-4xl font-bold">
        Choose a Category
      </h1>
      <div className="flex justify-between">
        {categories.map(({ name, description, img }) => (
          <div className="border-1 group mr-8 cursor-pointer border border-gray border-opacity-10 p-12 py-6 px-4 last:mr-0 hover:border-secondary hover:bg-secondary">
            <div className="mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-lg bg-lightYellow group-hover:bg-white group-hover:bg-opacity-90">
              <img src={img} alt={name} />
            </div>
            <h3 className="mb-2 text-2xl font-bold">{name}</h3>
            <p className="text-gray">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
