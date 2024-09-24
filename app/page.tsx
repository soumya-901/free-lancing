import Accordion from "@/components/Accordian";
import CardComponent from "@/components/CardComponent";
import Custombutton from "@/components/Custombutton";
import AutoSlider from "@/components/Slider";
import VideoLink from "@/components/VideoLink";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  console.log("hello inside the mail hello world");
  return (
    <main className="flex flex-col justify-center items-center ">
      {/* Header section  */}
      <nav className=" w-[100%] px-6 bg-white shadow-md flex flex-wrap items-center lg:py-0 py-2 h-[4.5rem]">
        <div className=" flex-1 md:flex-[.87]  flex justify-between items-center">
          <a href="/" className="flex text-lg font-semibold">
            <img
              src="/headerLogo.png"
              width="230"
              height="50"
              className="p-2"
              alt="Seo horizon"
            />
          </a>
        </div>

        {/* Hamburger Icon */}
        <input type="checkbox" id="menu-toggle" className="hidden peer" />
        <label
          htmlFor="menu-toggle"
          className="lg:hidden block cursor-pointer transition-transform duration-300 ease-in-out"
        >
          <svg
            className="w-6 h-6 text-gray-800 transform peer-checked:rotate-90 transition-transform duration-300 ease-in-out"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </label>

        {/* Overlay for graying out the background, excluding the navbar */}
        <div className="fixed top-[4.5rem] left-0 right-0 bottom-0 bg-gray-900/50 z-10 hidden peer-checked:block lg:hidden"></div>

        {/* Navbar Items */}
        <div
          className="peer-checked:max-h-[500px] z-20 max-h-0 lg:max-h-full overflow-hidden lg:flex lg:items-center lg:w-auto w-full transition-all duration-500 ease-in-out bg-white absolute lg:static top-[4.5rem] left-0 right-0 lg:bg-transparent"
          id="menu"
        >
          <nav>
            <ul className="text-xl text-center items-center gap-x-7 pt-4 md:gap-x-10 lg:text-lg lg:flex lg:pt-0">
              <li>
                <a className="text-[16px] font-medium" href="#">
                  TOPICS
                </a>
              </li>
              <li>
                <a className="text-[16px] font-medium" href="#">
                  TOOLS
                </a>
              </li>
              <li>
                <a className="text-[16px] font-medium" href="#">
                  REVIEWS
                </a>
              </li>
              <li>
                <a className="text-[16px] font-medium" href="#">
                  CONTACT
                </a>
              </li>
              <li>
                <div className="flex-1 sm:flex-[.3] md:flex-[.6] flex justify-center md:justify-end items-center">
                  <a href="/" className="flex text-lg font-semibold">
                    <img
                      src="/social.png"
                      width="230"
                      height="50"
                      className="p-2"
                      alt="Seo horizon"
                    />
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </nav>

      {/* beadcrum */}

      <nav aria-label="Breadcrumb" className="w-[95%] ">
        <ol className="flex flex-col  sm:flex-row  bg-[#EAF9FE] w-[min-content]  mt-3 py-2 px-3 rounded-[20px] items-left sm:items-center space-x-2 text-[14px] md:text-base md">
          <li>
            <Link
              className="flex  items-center text-blue-600 hover:text-blue-800"
              href="/"
              passHref
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 mr-1 mb-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2V21a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-5a1 1 0 011-1h2a1 1 0 011 1v5m-6 0H6a1 1 0 01-1-1V10m0 0L12 4m0 0l7 7"
                />
              </svg>
              Home
              <span className="text-gray-500 mx-1">›</span>
            </Link>
          </li>
          <li>
            <Link
              className="text-blue-600 block w-[10rem] hover:text-blue-800"
              href="/social-media-tools"
              passHref
            >
              Social Media Tools
              <span className="text-gray-500 mx-1">›</span>
            </Link>
          </li>
          <li className="text-gray-700 w-[14rem] " aria-current="page">
            Youtube Video Downloader
          </li>
        </ol>
      </nav>

      {/* hero section */}

      <div className="flex flex-col  sm:w-[90vw]  lg:w-[90vw] xl:w-[80vw]  max-w-[1705px] relative justify-center h-[500px] items-center">
        <p className="text-seoblue w-[90%] sm:text-5xl text-[3rem] font-bold text-center text-wrap ">
          YouTube Video Downloader
        </p>
        <img
          src="/smalltringale.svg"
          alt="youtube video downloader"
          className="w-12 h-12 absolute hidden md:block  md:left-[.1vw]  lg:left-[1vw] xl:left-[.1vw] bottom-[20rem]"
        />
        <img
          src="/largetringle.svg"
          alt="youtube video downloader"
          className="w-20  h-30 absolute hidden md:block md:right-[1rem] lg:right-[5vw] top-[16rem] "
        />
        <img
          src="/tread2.svg"
          alt="youtube video downloader"
          className="h-[13rem] w-fit absolute hidden md:block  top-[13rem] sm:right-[5vw] right-[1vw] lg:right-[20vw]  "
        />
        <img
          src="/tread1.svg"
          alt="youtube video downloader"
          className=" h-[13rem] w-fit absolute hidden md:block  left-[1vw] sm:left-[5vw] lg:left-[13vw]  top-[12.5rem] "
        />
        <p className="text-2xl sm:w-3/4 w-[90%]  md:w-[50vw] text-seodark text-center  mt-6">
          Never let slow internet ruin your YouTube experience. Download any
          video instantly with youTube Video Downloader and enjoy buffer-free
          viewing.
        </p>
        <Link
          className="min-w-[7rem] cursor-pointer bg-seoblue font-bold text-center text-white text-2xl py-2.5 mt-7 px-7 rounded-md"
          href={"#dowloadpage"}
        >
          Explore
        </Link>
      </div>

      {/*  main download and recaptch section   */}

      <VideoLink />

      {/*  platform support section   */}
      <div className="flex flex-col max-w-[1805px]  justify-center w-[90%] h-auto my-[3rem]  items-center ">
        <p className="text-center text-2xl w-[90%] sm:w-[80%] h-30 mb-5 text-seodark ">
          Discover the perfect tool for fast and efficient video and music
          downloads from the web: our SEO Horizon Video Downloader. This
          intuitive free application simplifies the process of securing your
          favorite media content with just one click. Ensuring a smooth and
          hassle-free experience!
        </p>
        <p className="text-center h-[3rem] text-4xl my-7 ">
          Supported Platforms
        </p>
        <div className="flex flex-wrap my-5 w-[90%]  md:w-[75%] sm:justify-between justify-center ">
          <img
            src="platform/platform1.svg"
            alt="youtube video downloader"
            className=" h-[12rem] w-[12rem] my-2 "
          />
          <img
            src="platform/platform2.svg"
            alt="youtube video downloader"
            className=" h-[12rem] w-[12rem] my-2 "
          />
          <img
            src="platform/platform3.svg"
            alt="youtube video downloader"
            className=" h-[12rem] w-[12rem] my-2 "
          />
          <img
            src="platform/platform4.svg"
            alt="youtube video downloader"
            className=" h-[12rem] w-[12rem] my-2 "
          />
        </div>
      </div>

      {/* Guide for saving mp3 section  */}

      <div className="flex flex-col bg-gradient-with-sm-image lg:bg-gradient-with-image bg-left bg-no-repeat mt-[3rem]   justify-center w-full  h-auto min-h-[30rem] items-center ">
        <p className="text-center w-[90%] text-4xl text-white mt-5  ">
          Guide: Saving MP4 Videos in HD - Top Methods Explained
        </p>
        <p className="text-center [word-wrap:break-word] w-[90%] lg:w-[50%] text-2xl text-white my-7 ">
          Looking to preserve the pristine HD quality of your MP4 videos?
          Discover proven techniques to make it happen:
        </p>
        <div className="flex flex-col w-[80%] lg:w-[65%] justify-center my-5">
          <p className="text-left text-1xl w-[100%] text-white mb-7 ">
            1. Visit the desired video. Capture it’s URL, and insert it into the
            designated field at the page’s pinnacle. Once completed. Hit “Enter”
            or select the “Download” button.
          </p>
          <p className="text-left [word-wrap:break-word] text-1xl w-[100%] text-white mb-7">
            2. For expedited retrieval. Insert “SEO” before the YouTube video
            URL and press “Enter”. E.G..
            https://seohorizon.com/somethingSomething
          </p>
          <p className="text-left text-1xl w-[100%] text-white mb-7">
            3. Seek a more seamless solution? Consider adopting a browser
            add-on, enabling single-click video downloads.
          </p>
        </div>
      </div>

      {/* card componenet */}

      <div className="flex flex-col max-w-[1705px]  justify-center w-[100%] lg:w-[90vw] h-full  mt-[3rem] sm:mt-[7rem] md:mt-[4rem]  items-center">
        <p className="text-center w-[90%] text-4xl text-exdark my-5 ">
          Benefits of using our YouTube Video Downloader
        </p>
        <p className="text-center w-[90%] lg:w-[60%] text-2xl  text-seodark  mb-5 ">
          This tool is an excellent option if you want to save favorite YouTube
          videos without losing time. Here are some of the reasons why our
          YouTube Video Downloader is quite popular within the community.
        </p>

        <CardComponent />
      </div>

      {/* how to download components */}
      <div className="flex flex-col max-w-[1705px]  justify-center w-[96vw] lg:w-[90vw]  mt-[5rem]  items-center">
        <p className="relative text-center w-[90%] text-4xl text-exdark mt-5 ">
          How to download with SEO YouTube Downloader
        </p>
        <div className="flex flex-col md:flex-row mt-[2rem] w-[100%] lg:w-[90%]">
          <div className=" w-[100%] md:w-[40%] mt-[3rem]  h-fit flex flex-col items-center justify-center">
            <button className="text-white w-fit bg-seoblue rounded-[3rem] py-1.5 px-5">
              1. Copy the video link
            </button>
            <img
              src="step1download.png"
              alt="youtube video downloader"
              className=" h-[18rem] w-[25rem] my-2 "
            />
            <p className="text-center w-[90%] lg:w-[55%] text-lightdark text-2xl  mb-5 ">
              Open the video you want to download and copy its link at the top
              of the screen
            </p>
          </div>
          <div className="w-[100%] md:w-[40%] mt-[3rem] h-fit flex flex-col items-center justify-center">
            <button className="text-white w-fit bg-seoblue min-w-[17rem] rounded-[3rem] py-1.5 px-5">
              2. Paste the link into the input
            </button>
            <img
              src="step2download.png"
              alt="youtube video downloader"
              className=" h-[18rem] w-[25rem] my-2 "
            />
            <p className="text-center w-[90%] lg:w-[55%] text-lightdark text-2xl  mb-5 ">
              Then go to our website and paste the link into the input field
            </p>
          </div>
          <div className="w-[100%] md:w-[40%] mt-[3rem] h-fit flex flex-col items-center justify-center">
            <button className="text-white w-fit bg-seoblue rounded-[3rem] py-1.5 px-5">
              3. Download Video
            </button>
            <img
              src="step3download.png"
              alt="youtube video downloader"
              className=" h-[18rem] w-[25rem] my-2 "
            />
            <p className="text-center  lg:w-[55%] text-lightdark text-2xl  mb-5 ">
              Select the quality that suits you and click the "download" button.
              Ready!
            </p>
          </div>
        </div>
      </div>

      {/* Frequently asked questino */}

      <div className="flex flex-col max-w-[1705px]  justify-center w-[90vw]  mt-[5rem]  items-center">
        <p className="relative text-center w-[90%] text-4xl text-exdark mt-5 ">
          Frequently Asked Questions
        </p>
        <div className="flex flex-col min-h-[40rem] p-5 justify-center items-center bg-[#DFF1FF] rounded-3xl my-[3rem] w-[98%] md:w-[80%] lg:w-[75%]">
          <Accordion />
        </div>
      </div>

      {/* Reference Tools */}

      <div className="flex flex-col max-w-[1705px]  justify-center w-[90vw]  mt-[5rem] mb-[5rem] items-center">
        <p className="relative text-center w-[90%] text-4xl text-exdark mt-5 ">
          Related Tools
        </p>
        <AutoSlider />
      </div>

      {/* Footer  */}
      <footer className="bg-black text-white pt-10 pb-5 w-[100%]">
        <div className="w-[80%]">
          <div className="flex">
            <p>
              Join Our <span> Newsletter</span> & Get Updated.
            </p>
            <div>
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
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex">
            <div>
              <img src="/headerLogo.png" alt="" />
              <p>Read employee reviews from startups before applying.</p>
              <div className="flex">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
