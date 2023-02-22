import * as React from "react";
import { useNavigate } from "react-router-dom";

export const AllPosts: React.FC = () => {
  const navigate = useNavigate();

  const [data, setData] = React.useState<{ posts: [] }>();
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://dummyjson.com/posts`);

      const result = await data.json();

      setData(result);
    };

    fetchData();
  }, []);

  return (
    <section className="m-auto w-4/5">
      <h1 className="mb-12 border-b border-gray border-opacity-20 py-4 text-4xl font-bold">
        All posts
      </h1>
      <div>
        {data?.posts?.map(({ id, title, body }) => (
          <div key={id} className="mb-12 flex">
            <div className="mr-12 h-[300px] w-[500px]">
              <img
                onClick={() => navigate("/posts/" + id)}
                className="mb-4 h-full w-full cursor-pointer object-cover"
                src="https://images.unsplash.com/photo-1676476461152-8548f28a0777?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                alt=""
              />
            </div>

            <div className="flex w-3/5 flex-col justify-center">
              <h3 className="mb-2 font-semibold text-purple">Startup</h3>
              <h1 className="mb-4 font-sen text-2xl font-bold">{title}</h1>
              <p className="mb-4 font-sen text-base font-normal text-gray">
                {body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
