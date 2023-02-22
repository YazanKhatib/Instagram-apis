import * as React from "react";
import { useParams } from "react-router-dom";

export const PostDetails: React.FC = () => {
  const { id } = useParams();
  const [data, setData] = React.useState<{ title: string; body: string }>();

  console.log(id);
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://dummyjson.com/posts/${id}`);

      const result = await data.json();

      setData(result);
    };

    fetchData();
  }, []);

  return (
    <section className="m-auto w-4/5">
      <div className="flex justify-center">
        <div className="mt-20 mb-12 flex w-[600px] flex-col items-start">
          <div className="flex justify-center">
            <div className="mr-6 mb-4 w-[50px] overflow-hidden rounded-full bg-gray">
              <img
                src="https://gravatar.com/avatar/cb8a9b8b51f02c7c4382625beb7967c8?s=400&d=robohash&r=x"
                alt="author"
              />
            </div>
            <div className="font-sen">
              <h2 className="text-2xl font-bold text-purple">Andrew Jonson</h2>
              <p className="text-gray">Posted on 27th January 2022</p>
            </div>
          </div>

          <h1 className="mb-4 font-sen text-4xl font-bold text-primary">
            {data?.title}
          </h1>

          <div className="flex items-center">
            <img className="mr-2" src="/svg/startup.svg" width={18} alt="tag" />
            <p className="font-semibold text-primary">Startup</p>
          </div>
        </div>
      </div>

      <div className="h-[500px]">
        <img
          className="h-full w-full cursor-pointer object-cover"
          src="https://images.unsplash.com/photo-1676476461152-8548f28a0777?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt=""
        />
      </div>

      <div className="mb-12 flex justify-center">
        <div className="flex w-[600px] justify-start">
          <p className="mt-20 font-sen text-lg font-normal text-gray">
            {data?.body}
          </p>
        </div>
        <p></p>
      </div>
    </section>
  );
};
