import RoutePaths from "config/routes";
import { useNavigate } from "react-router-dom";

export const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-primary py-6 font-sen">
      <div className="m-auto flex w-4/5 justify-between">
        <h1
          className="cursor-pointer text-2xl text-white"
          onClick={() => navigate(RoutePaths.Homepage)}
        >
          Writeowl
        </h1>
        <div>
          <a
            className="mr-12 cursor-pointer text-lg text-white"
            onClick={() => navigate(RoutePaths.Homepage)}
          >
            Homepage
          </a>
          <a
            className="mr-12 cursor-pointer text-lg text-white"
            onClick={() => navigate(RoutePaths.Posts)}
          >
            Posts
          </a>
          <a className="cursor-pointer text-lg text-white">Contact us</a>
        </div>
      </div>
    </nav>
  );
};
