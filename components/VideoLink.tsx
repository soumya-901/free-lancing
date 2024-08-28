// components/VideoLink.js
// import { FaLink } from 'react-icons/fa';

const VideoLink = () => {
  return (
    <div className="flex flex-col items-center w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[55vw] xl:w-[45vw] p-5">
      <div className="flex flex-col sm:flex-row  items-center w-[100%]  border-2 border-blue-500 rounded-md p-2">
        <div className="flex items-center w-[100%]  mb-2 sm:mb-0">
          <img
            className="text-gray-400 mx-1"
            src="/utils/link.svg"
            width={30}
          />
          <input
            type="text"
            placeholder="Paste your video link here"
            className="flex-grow  py-3 w-[90%] sm:w-[50%]   outline-none text-gray-600 placeholder-gray-400"
          />
        </div>
        <button className="flex text-2xl font-bold w-[80%] sm:w-[40%] md:w-[30%] lg:w-[20%]  min-w-[10rem] justify-center bg-seoblue text-white  py-2.5 rounded-md hover:bg-seoblue transition duration-300">
          Download{" "}
          <img
            className="inline-flex ml-1"
            width={15}
            height={15}
            src="/utils/arrow.svg"
            alt=""
          />
        </button>
      </div>
      <div className="text-2xl text-gray-600 flex items-center">
        <span>Scanned by</span>
        <img
          src="/path-to-norton-logo.png" // Replace with your local image path or URL
          alt="Norton Safe Web"
          className="h-5 ml-2"
        />
      </div>
    </div>
  );
};
export default VideoLink;
