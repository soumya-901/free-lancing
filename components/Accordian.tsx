// components/Accordion.js
export default function Accordion() {
  const feqQuestions = [
    {
      ques: "Can I choose my meals?",
      ans: "Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget.",
    },
    {
      ques: "When will I receive my order?",
      ans: "Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget.",
    },
    {
      ques: "Can I skip a delivery?",
      ans: "Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget.",
    },
    {
      ques: "Can I add Extras to my delivery?",
      ans: "Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget.",
    },
  ];
  return (
    <div className="w-[98%] md:w-[60%] h-fitrounded-md">
      {/* Accordion Item 1 */}

      {feqQuestions.map((item, index) => (
        <div
          key={index}
          className="border-b w-90% rounded-lg mt-3  bg-white border  "
        >
          <input
            type="checkbox"
            id={`accordion-item-${index}`}
            className="hidden peer"
          />
          <label
            htmlFor={`accordion-item-${index}`}
            className="flex justify-between items-center p-4 cursor-pointer"
          >
            <span className="text-exblue text-2xl font-bold ">{item.ques}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="w-6 h-6 text-lightdark transform transition-transform duration-400 ease-in-out"
              fill="none"
            >
              <path
                d="M9.24145 8.08225L5.58444 4.42525C5.51136 4.3587 5.45237 4.27815 5.41096 4.18839C5.36956 4.09863 5.34659 4.00147 5.3434 3.90267C5.34022 3.80387 5.35689 3.70543 5.39242 3.61319C5.42796 3.52095 5.48164 3.43677 5.55029 3.36565C5.61894 3.29452 5.70116 3.23789 5.79209 3.19911C5.88302 3.16033 5.9808 3.14018 6.07965 3.13987C6.1785 3.13955 6.27641 3.15907 6.36759 3.19727C6.45876 3.23547 6.54134 3.29157 6.61044 3.36225L6.62844 3.38025L10.8084 7.55925C10.947 7.69784 11.0248 7.88578 11.0248 8.08175C11.0248 8.27772 10.947 8.46567 10.8084 8.60425L6.62945 12.7833C6.56201 12.8531 6.48149 12.9089 6.39248 12.9476C6.30347 12.9862 6.20771 13.007 6.11067 13.0087C6.01364 13.0104 5.91722 12.9929 5.82693 12.9573C5.73664 12.9217 5.65424 12.8687 5.58445 12.8013C5.51465 12.7338 5.45882 12.6533 5.42014 12.5643C5.38146 12.4753 5.36069 12.3795 5.35902 12.2825C5.35735 12.1854 5.37481 12.089 5.4104 11.9987C5.44599 11.9084 5.49901 11.8261 5.56645 11.7563L5.58445 11.7383L9.24145 8.08225Z"
                fill="#106B7E"
                stroke="#106B7E"
                strokeWidth="0.5"
              />
            </svg>
          </label>
          <div className=" overflow-hidden transition-all duration-500 ease-in-out max-h-0 peer-checked:max-h-96">
            <div className="p-4">
              <p className="text-2xl text-lightdark">{item.ans}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
