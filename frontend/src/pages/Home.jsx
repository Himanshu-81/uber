import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        className={`bg-[url(/traffic-light.jpg)] bg-cover bg-center h-screen flex justify-between flex-col w-full`}
      >
        <img src={"logo.png"} className="w-38 p-7" alt="" />
        <div className="bg-white py-5 pb-7 px-10">
          <h2 className="text-3xl font-bold text-center">
            Get Started with Uber
          </h2>
          <Link
            to={"/login"}
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5 text-lg"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
