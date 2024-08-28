import React from "react";

const CardComponent = () => {
  const cardData = [
    {
      title: "Quality Option",
      desc: " You'll be able to choose between different quality options, including SD, HD, Full HD (1080p), 2K, and even 4K. Either option is great, but keep in mind that the qualities available may vary from one video to another - not every video is available in HD or 4K ",
      icon: "hdr",
    },
    {
      title: "User-Friendly Interface",
      desc: "Our tool is extremely easy to use. All it takes is two or three clicks to save the video you want. It's quick, safe, and quite convenient. You'll be able to save your favorite YouTube videos in high quality within a few moments.",
      icon: "box",
    },
    {
      title: "No Advertisements",
      desc: "It can be annoying to deal with ads when all you want is to download a video. That's why we've chosen to keep our website free of advertisements - you can directly go to save your media without losing time.",
      icon: "announce",
    },
    {
      title: " Compatibility with Various Browsers",
      desc: "Our tool is compatible with several browsers. Whether you use Chrome or prefer to navigate the web with Firefox, you'll be able to use it without problems. It is also compatible with most browsers available on mobile devices.",
      icon: "global",
    },

    {
      title: "Faster Video Conversion",
      desc: "It'll take only a few moments for our tool to process your video. It is time-saving, allowing you to download your piece of media without losing time. You'll have what you're looking for in less than a few minutes. Our YouTube Video Downloader is the fastest option on the web!",
      icon: "mordercamera",
    },

    {
      title: "No Account is Required",
      desc: "You don't need an account to use our downloader. The tool is accessible at any time and doesn't require you to submit any extra information to get any piece of media you'd like. Whether it is music or a funny video, you can get it without registering.",
      icon: "helpcenter",
    },

    {
      title: "Free of Cost",
      desc: "Our tool is 100% free. You can download as many videos as you'd like without paying a single penny - no need to worry about anything!",
      icon: "receipt",
    },

    {
      title: "No Watermark!",
      desc: "Watermarks are quite annoying and can diminish your experience with any video. However, that's not a problem when you use our tool, as it'll let you save the video without any watermarks!",
      icon: "ofcstamp",
    },
  ];

  return (
    <div className="flex w-[80%] flex-wrap justify-center lg:justify-between ">
      {cardData.map((eachCard, index) => (
        <div
          key={index}
          className="group m-5 relative h-[16rem] rounded-xl shadow-xl  w-[14rem]"
        >
          <div className=" absolute h-full w-full rounded-xl shadow xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
            <div className="flex justify-center h-full items-center  absolute inset-0 [backface-visibility:hidden] ">
              <img
                src={`/cards/${eachCard.icon}.svg`}
                alt="benifits"
                className="h-25 w-35 "
              />
            </div>
            <div className="absolute inset-0 w-full h-full rounded-xl bg-seoblue text-center [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center ">
              <p className="text-white w-[90%] text-3xl my-3 ">
                {eachCard.title}
              </p>
              <p className="text-center w-[90%] text-[12px] text-white  mb-5 ">
                {eachCard.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
