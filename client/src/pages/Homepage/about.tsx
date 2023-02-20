export const About: React.FC = () => {
  return (
    <section className="mb-20">
      <div className="m-auto flex h-[20px] w-4/5">
        <div className="bg h-full w-1/4"></div>
        <div className="h-full w-1/2 bg-secondary"></div>
        <div className="h-full w-1/4 bg-purple"></div>
      </div>
      <div className="m-auto flex w-4/5 justify-between bg-lavender p-20 font-sen">
        <div className="w-[40%]">
          <h2 className="mb-4 font-semibold text-primary">ABOUT US</h2>
          <p className="mb-4 text-4xl font-bold text-primary">
            We are a community of content writers who share their learnings
          </p>
          <p className="mb-4 font-sen text-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="font-bold text-purple">Read More</p>
        </div>

        <div className="w-[40%]">
          <h2 className="mb-4 font-semibold text-primary">OUR MISSION</h2>
          <p className="mb-4 text-3xl font-bold text-primary">
            Creating valuable content for creatives all around the world
          </p>
          <p className="mb-4 font-sen text-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
};
