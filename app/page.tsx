import Custombutton from "@/components/Custombutton";
import VideoLink from "@/components/VideoLink";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  console.log("hello inside the mail hello world");
  return (
    <main className="flex flex-col justify-center items-center ">
      {/* hero section */}

      <div className="flex flex-col  sm:w-[90vw]  lg:w-[90vw] xl:w-[80vw]  max-w-[1705px] relative justify-center h-[500px] items-center">
        <p className="text-seoblue w-[90%] text-5xl text-center ">
          YouTube Video Downloader
        </p>
        <img
          src="/smalltringale.svg"
          alt="youtube video downloader"
          className="w-12 h-12 absolute hidden md:block  md:left-[.1vw]  lg:left-[5vw] bottom-[20rem]"
        />
        <img
          src="/largetringle.svg"
          alt="youtube video downloader"
          className="w-20  h-30 absolute hidden md:block md:right-[1rem] lg:right-[5vw] top-[16rem] "
        />
        <img
          src="/tread2.svg"
          alt="youtube video downloader"
          className="h-[10rem] absolute top-[13rem] sm:right-[5vw] right-[1vw] lg:right-[25vw]  "
        />
        <img
          src="/tread1.svg"
          alt="youtube video downloader"
          className=" h-[10rem] absolute left-[1vw] sm:left-[5vw] lg:left-[20vw]  top-[12.5rem] "
        />
        <p className="text-2xl sm:w-3/4  md:w-[50vw] text-seodark text-center  mt-6">
          Never let slow internet ruin your YouTube experience. Download any
          video instantly with youTube Video Downloader and enjoy buffer-free
          viewing.
        </p>
        <Link
          className="w-[100px] bg-seoblue font-bold text-center text-white py-1.5 mt-7 rounded-md"
          href={"#dowloadpage"}
        >
          Explore
        </Link>
      </div>

      {/*  main download and recaptch section   */}
      <div
        id="dowloadpage"
        className="flex flex-col max-w-[1705px] lg:flex-row justify-center w-[90vw] my-5  h-[200px] items-center "
      >
        <img
          src="/youtubedownload.svg"
          alt="youtube video downloader"
          className=" h-[14rem] mr-0 sm:mr-10 "
        />
        <VideoLink />
      </div>

      {/*  platform support section   */}
      <div
        id="dowloadpage"
        className="flex flex-col max-w-[1705px]  justify-center w-[90vw] h-auto mt-[9rem] sm:mt-[7rem] md:mt-[4rem]  items-center "
      >
        <p className="text-center text-2xl w-[90%] sm:w-[70%] h-30 mb-5 text-seodark ">
          Discover the perfect tool for fast and efficient video and music
          downloads from the web: our SEO Horizon Video Downloader. This
          intuitive free application simplifies the process of securing your
          favorite media content with just one click. Ensuring a smooth and
          hassle-free experience!
        </p>
        <p className="text-center h-[3rem] text-4xl my-5 ">
          Supported Platforms
        </p>
        <div className="flex flex-wrap my-5 w-[90%]  md:w-[70%] justify-between ">
          <img
            src="platform/platform1.svg"
            alt="youtube video downloader"
            className=" h-[8rem] w-[8rem] my-2 "
          />
          <img
            src="platform/platform2.svg"
            alt="youtube video downloader"
            className=" h-[8rem] w-[8rem] my-2 "
          />
          <img
            src="platform/platform3.svg"
            alt="youtube video downloader"
            className=" h-[8rem] w-[8rem] my-2 "
          />
          <img
            src="platform/platform4.svg"
            alt="youtube video downloader"
            className=" h-[8rem] w-[8rem] my-2 "
          />
        </div>
      </div>

      {/* Guide for saving mp3 section  */}

      <div
        id="dowloadpage"
        className="flex flex-col bg-gradient-with-sm-image lg:bg-gradient-with-image bg-left bg-no-repeat max-w-[1705px]  justify-center w-[100vw] my-10 h-[90vh]  lg:h-[60vh] items-center "
      >
        <p className="text-center w-[90%] text-4xl text-white my-5 ">
          Guide: Saving MP4 Videos in HD - Top Methods Explained
        </p>
        <p className="text-center w-[90%] lg:w-[50%] text-2xl text-white mb-5 ">
          Looking to preserve the pristine HD quality of your MP4 videos?
          Discover proven techniques to make it happen:
        </p>
        <div className="flex flex-col w-[80%] lg:w-[52%] justify-center my-5">
          <p className="text-left text-1xl w-[100%] text-white mb-5 ">
            1. Visit the desired video. Capture it’s URL, and insert it into the
            designated field at the page’s pinnacle. Once completed. Hit “Enter”
            or select the “Download” button.
          </p>
          <p className="text-left text-1xl w-[100%] text-white mb-5">
            2. For expedited retrieval. Insert “SEO” before the YouTube video
            URL and press “Enter”. E.G..
            https://seohorizon.com/somethingSomething
          </p>
          <p className="text-left text-1xl w-[100%] text-white mb-5">
            3. Seek a more seamless solution? Consider adopting a browser
            add-on, enabling single-click video downloads.
          </p>
        </div>
      </div>
    </main>
  );
}
