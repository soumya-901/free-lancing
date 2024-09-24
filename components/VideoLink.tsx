// components/VideoLink.js
// import { FaLink } from 'react-icons/fa';
"use client";

import axios, { AxiosError } from "axios";
import { ChangeEvent, useEffect, useRef, useState } from "react";

interface VideoFormat {
  url: string;
  qualityLabel: string;
}
interface eachClarity {
  format: string;
  size: Number;
  quality: string;
  tag: any;
}

const backendUrl: string = "http://localhost:5000/api";

interface CollapseProps {
  checked: boolean;
  collapsedSize: number;
  children: React.ReactNode;
}

const Collapse: React.FC<CollapseProps> = ({
  checked,
  collapsedSize,
  children,
}) => {
  const ref = useRef<HTMLDivElement | null>(null); // Define the ref as a div element or null initially
  const [maxHeight, setMaxHeight] = useState<string>(`${collapsedSize}px`);

  useEffect(() => {
    if (ref.current) {
      if (checked) {
        // Get the scrollHeight of the element once the component is mounted
        const fullHeight = ref.current.scrollHeight;
        setMaxHeight(`${fullHeight}px`);
      } else {
        setMaxHeight(`${collapsedSize}px`);
      }
    }
  }, [checked, collapsedSize]);

  return (
    <div
      ref={ref} // Assign ref to the div
      className="transition-max-height duration-300 w-[100%] ease-in-out overflow-hidden"
      style={{
        maxHeight: maxHeight,
      }}
    >
      {children}
    </div>
  );
};

const VideoLink = () => {
  const [url, setUrl] = useState<string>("");
  const [fetchData, setFetchData] = useState<any>({});
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [formatChange, setFormatChange] = useState<boolean>(true);
  const [specificLoader, setSpecificLoader] = useState<Number>(-1);
  const [showOption, setShowOption] = useState(false);
  const [tableRow, setTableRow] = useState<Array<eachClarity>>([]);
  const [erromessage, setErrorMessage] = useState<string>("");

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    if (showOption) {
      setShowOption(false);
    }
    if (erromessage.length > 0) {
      setErrorMessage("");
    }
  };
  const downloadsecificFormat = async (
    item: string,
    index: number,
    retryCount = 0
  ) => {
    console.log("Downloading for ", item);
    setSpecificLoader(index); // Set the loader for the specific button

    if (erromessage.length > 0) {
      setErrorMessage(""); // Reset error message if present
    }

    const payload = {
      url: url,
      format: item,
    };

    const maxRetries = 3; // Define maximum number of retries
    let intervalid; // Declare interval variable

    try {
      const response = await axios.get(
        `${backendUrl}/download/${formatChange ? "video" : "audio"}`,
        { params: payload }
      );

      if (response.data.DownloadURL) {
        // If the API returns the download URL, proceed with downloading
        const a = document.createElement("a");
        a.href = response.data.DownloadURL;
        document.body.appendChild(a);
        a.click();

        // Remove the anchor tag after the download starts
        setTimeout(() => {
          document.body.removeChild(a);
        }, 100);

        // Clear interval if it was set
        if (intervalid) {
          clearInterval(intervalid);
          console.log("Interval cleared after successful download.");
        }

        setSpecificLoader(-1); // Remove the loader
      } else {
        // Handle case when there's no download URL but no error is thrown
        console.log("No Download URL, retrying...");

        // Set the retry interval if it's the first retry
        if (retryCount === 0) {
          setTimeout(async () => {
            console.log("Retrying download...");
            await downloadsecificFormat(item, index, retryCount + 1);
          }, 10000); // Retry every 13 seconds
        }

        // Check if retries have exceeded maxRetries
        if (retryCount >= maxRetries) {
          // Max retries reached, show error message and stop loader
          clearInterval(intervalid); // Ensure interval is cleared after max retries
          setSpecificLoader(-1);
          setErrorMessage(
            "Download failed: No Download URL after multiple attempts."
          );
        }
      }
    } catch (error) {
      // Error handling in the catch block (network/API error)
      console.log("Error in the download API:", error);
      setSpecificLoader(-1); // Stop the loader if an error occurs
      setErrorMessage("An error occurred while trying to download the file.");

      // Clear interval in case of an error
      if (intervalid) {
        clearInterval(intervalid);
      }
    }
  };

  const onChangeFormat = () => {
    if (erromessage.length > 0) {
      setErrorMessage("");
    }
    let isvideo = formatChange;
    setFormatChange((prev) => !prev);
    console.log(isvideo);
    if (isvideo) {
      const mp4Formats = fetchData?.availableClarity.filter(
        (item: any) => item.format === "mp3"
      );
      setTableRow(mp4Formats);
    } else {
      const mp3Formats = fetchData?.availableClarity.filter(
        (item: any) => item.format === "mp4"
      );
      setTableRow(mp3Formats);
    }
  };
  function bytesToMB(bytes: any) {
    return (bytes / (1024 * 1024)).toFixed(2); // Convert to MB and round to 2 decimal places
  }
  const downloadVideo = async () => {
    setShowLoader(true);
    if (erromessage.length > 0) {
      setErrorMessage("");
    }
    const payload = {
      url: url,
    };
    try {
      const response = await axios.get(`${backendUrl}/videoinfo`, {
        params: payload,
      });
      console.log(response);
      setFetchData(response.data);
      const mp4Formats = response?.data?.availableClarity.filter(
        (item: any) => item.format === "mp4"
      );
      setShowLoader(false);
      setShowOption(true);
      setTableRow(mp4Formats);
    } catch (error: any) {
      setShowLoader(false);
      if (error?.response?.data?.ERRCODE == "INVALIDURL") {
        setErrorMessage("Please Entered a valid url");
      }
      console.log("error in the download api ", error);
    }
  };

  return (
    <>
      <div
        id="dowloadpage"
        className="flex flex-col max-w-[1805px] lg:flex-row justify-center w-[90vw]  items-center "
      >
        <img
          src="/youtubedownload.svg"
          alt="youtube video downloader"
          className="w-[25rem] h-[18rem] mr-0 sm:mr-10 "
        />
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
                onChange={handleUrlChange}
                placeholder="Paste your video link here"
                className="flex-grow  py-3 w-[90%] sm:w-[50%]   outline-none text-gray-600 placeholder-gray-400"
              />
            </div>
            <button
              onClick={downloadVideo}
              disabled={showLoader}
              className="flex text-2xl font-bold w-[80%] sm:w-[40%] md:w-[30%] lg:w-[20%]  min-w-[10rem] justify-center bg-seoblue text-white  py-2.5 rounded-md hover:bg-seoblue transition duration-300"
            >
              {showLoader ? (
                <>
                  <div role="status" className="flex">
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 text-gray-200 animate-spin dark:text-white fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <p className="text-[16px] ml-2">Processing ...</p>
                  </div>
                </>
              ) : (
                <>
                  Download
                  <img
                    className="inline-flex ml-1"
                    width={15}
                    height={15}
                    src="/utils/arrow.svg"
                    alt=""
                  />
                </>
              )}
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
      </div>
      {erromessage && (
        <p className="text-2xl h-5 text-red-600">{erromessage}</p>
      )}
      <Collapse checked={showOption} collapsedSize={4}>
        <div className="flex flex-col max-w-[1805px] lg:flex-row justify-center w-[100%] mb-6 items-center ">
          {(fetchData && fetchData?.videoFormats?.length > 0) ||
            (true && (
              <div className="flex flex-col lg:flex-row max-w-[1805px] justify-center items-center mt-4 w-[100%]  ">
                <div className="w-[80%] lg:w-[40%] my-3 flex flex-col justify-center items-center ">
                  <img
                    src={fetchData?.picture}
                    className="inline-flex ml-1"
                    width={400}
                    height={350}
                  />
                  <p className="text-center text-2xl mt-3 w-[90%] md-w-[80%] text-wrap">
                    {fetchData?.title}
                  </p>
                  <p className="text-center text-2xl w-[90%] sm:w-[80%] h-30 mt-5 text-seodark ">
                    {fetchData?.duration}
                  </p>
                </div>
                <div className="w-[95%] md-w-[80%] overflow-y-auto no-scrollbar lg:w-[40%] h-[20rem] max-h-[25rem] flex flex-col items-center ">
                  <div className="flex w-[100%]">
                    <button
                      onClick={onChangeFormat}
                      className=" px-5 py-3 mr-10 rounded-3xl border-2 border-[#0385DB] text-2xl  "
                      style={
                        formatChange
                          ? { backgroundColor: "#0385DB", color: "white" }
                          : { backgroundColor: "white", color: "black" }
                      }
                    >
                      Video
                    </button>
                    <button
                      onClick={onChangeFormat}
                      className=" px-5 py-3 mr-10 rounded-3xl border-2 border-[#0385DB] text-2xl  "
                      style={
                        !formatChange
                          ? { backgroundColor: "#0385DB", color: "white" }
                          : { backgroundColor: "white", color: "black" }
                      }
                    >
                      Audio
                    </button>
                  </div>
                  <div className="flex w-[100%]  justify-between  my-4">
                    <p className="text-center text-[1.4rem] font-semibold">
                      Resolution
                    </p>
                    <p className=" text-[1.4rem] font-semibold">File Size</p>
                    <p className=" text-[1.4rem] font-semibold">Download</p>
                  </div>
                  {tableRow &&
                    tableRow.map((item, index) => (
                      <div
                        key={index}
                        className="w-[100%] flex justify-between items-center mb-4 "
                      >
                        <p className="text-2xl w-[35%]   text-seodark ">
                          {item?.quality + " " + item?.format}
                        </p>
                        <p className="text-2xl w-[25%]    text-seodark ">
                          {bytesToMB(item?.size).toString()}MB
                        </p>

                        <button
                          onClick={() =>
                            downloadsecificFormat(item.quality, index)
                          }
                          disabled={specificLoader == index}
                          className="flex text-1xl font-bold min-w-[8rem]  md:text-1.3rem   justify-center bg-seoblue text-white  py-1 rounded-md hover:bg-seoblue transition duration-300"
                        >
                          {specificLoader == index ? (
                            <>
                              <div role="status" className="flex">
                                <p className="text-[15px]">Processing </p>
                                <svg
                                  aria-hidden="true"
                                  className="w-5 h-4 mt-1 text-gray-200 animate-spin dark:text-white fill-blue-600"
                                  viewBox="0 0 100 101"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"
                                  />
                                </svg>
                              </div>
                            </>
                          ) : (
                            <>
                              Download
                              <img
                                className="inline-flex ml-2 mt-1"
                                width={12}
                                height={15}
                                src="/utils/arrow.svg"
                                alt=""
                              />
                            </>
                          )}
                        </button>
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </Collapse>
    </>
  );
};
export default VideoLink;
