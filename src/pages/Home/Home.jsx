import Lottie from "lottie-react";
import bannerLottieData from "../../assets/Animation - 1733944931898.json";
import { easeOut, motion } from "framer-motion";
const Home = () => {
  return (
    <div className="md:flex md:flex-row-reverse items-center text-center p-5 mt-4 md:mt-8 bg-blue-50 font-sans">
      {/* Animation Section (on the left side on larger screens) */}
      <div className="w-full flex justify-center sm:justify-end mt-5 sm:mt-0 mb-5 sm:mb-0">
        <div>
          <Lottie animationData={bannerLottieData}></Lottie>
        </div>
      </div>

      {/* Text Section */}
      <div className="max-w-2xl mb-5">
        <motion.h1 
        animate={{ x: 50 }}
        transition={{ duration:2, delay: 1, ease: easeOut, repeat: Infinity }}
        className="md:text-5xl text-2xl font-bold text-gray-800">
          The <span className="text-blue-500">Easiest Way</span> to Get Your New
          Job
        </motion.h1>
        <p className="text-gray-600 mt-3">
          Each month, more than 3 million job seekers turn to our website in
          their search for work, making over 140,000 applications every single
          day.
        </p>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-5">
          <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none">
            <option>Industry</option>
          </select>
          <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none">
            <option>Location</option>
          </select>
          <input
            type="text"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
            placeholder="Your keyword..."
          />
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
            Search
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-3">
          Popular Searches:{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Designer
          </a>
          ,{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Web
          </a>
          ,{" "}
          <a href="#" className="text-blue-500 hover:underline">
            iOS
          </a>
          ,{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Developer
          </a>
          ,{" "}
          <a href="#" className="text-blue-500 hover:underline">
            PHP
          </a>
          ,{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Senior
          </a>
          ,{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Engineer
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
