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
        <img
          src="/icons/facebook.svg"
          alt="facebook icon"
          className="cursor-pointer"
        />
        <img
          src="/icons/twitter.svg"
          alt="twitter icon"
          className="cursor-pointer"
        />
        <img
          src="/icons/instagram.svg"
          alt="instagram icon"
          className="cursor-pointer"
        />
        <img
          src="/icons/linkedin.svg"
          alt="linkedin icon"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};
