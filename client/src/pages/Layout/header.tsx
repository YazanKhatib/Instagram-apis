export const Header: React.FC = () => {
  return (
    <nav className="bg-primary py-6 font-sen">
      <div className="m-auto flex w-4/5 justify-between">
        <h1 className="text-2xl text-white">Writeowl</h1>
        <div>
          <a className="mr-12 cursor-pointer text-lg text-white">Homepage</a>
          <a className="mr-12 cursor-pointer text-lg text-white">About us</a>
          <a className="cursor-pointer text-lg text-white">Contact us</a>
        </div>
      </div>
    </nav>
  );
};
