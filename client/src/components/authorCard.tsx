import { Facebook } from "assets/icons/facebook";
import { Instagram } from "assets/icons/instagram";
import { Linkedin } from "assets/icons/linkedin";
import { Twitter } from "assets/icons/twitter";

interface AuthorCardProps {
  name: string;
  img: string;
  description: string;
}

export const AuthorCard: React.FC<AuthorCardProps> = ({
  name,
  img,
  description,
}) => {
  return (
    <div className="font-ser flex w-1/5 flex-col items-center bg-lightYellow py-8 px-8 text-center">
      <div className="mb-4 w-[180px] overflow-hidden rounded-full bg-white">
        <img src={img} alt="avatar" />
      </div>

      <p className="mb-2 text-2xl font-bold text-primary">{name}</p>
      <p className="b-4 mb-4 text-base text-gray">{description}</p>

      <div className="m-auto flex w-3/5 justify-between">
        <Facebook />
        <Twitter />
        <Instagram />
        <Linkedin />
      </div>
    </div>
  );
};
