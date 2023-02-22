import { Facebook, Linkedin, Twitter, Instagram } from "assets/icons";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-primary py-20 font-sen">
      <div className="m-auto flex w-4/5 items-center justify-between">
        <div>
          <h1 className="mb-4 text-4xl font-bold text-white">Write owl</h1>
          <p className="text-gray">yazankhatib97@gmail.com</p>
        </div>

        <div className="flex w-1/5 justify-between">
          <Facebook color="white" />
          <Twitter color="white" />
          <Instagram color="white" />
          <Linkedin color="white" />
        </div>
      </div>
    </footer>
  );
};
