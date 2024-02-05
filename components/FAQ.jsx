"use client";

import { useState } from "react";

const faqs = [
  {
    question: "WHEN SHOULD I BEGIN THE SEARCH? ",
    answers: [
      "We recommend 6-12 months before your event. If your event is sooner we can offer express orders that can be placed for an additional 10% of the original dress price, depending on the design.",
      "",
      "",
      "",
    ],
  },
  {
    question: "WHERE SHOULD I LOOK FOR INSPIRATION?",
    answer:
      "There are many places to find inspiration for your dream dress, you can follow MoNihe on IG ",
  },
  {
    question: "CAN I BOOK A CONSULTATION IN-STORE?  ",
    answers: [
      "We offer a small number of in-store consultations with our in-house design team who will bring your vision for your big day life.&nbsp;",
      "Your measurements will be taken on the day, please come wearing appropriate clothing to ensure your dress has the perfect fit!",
    ],
  },
  {
    question: "CAN I BRING GUESTS TO MY IN-STORE APPOINTMENT?",
    answer:
      "As we only offer a small number of in-store appointments, we advise that you choose your friends and loved ones carefully as there is a limit to 2 people.",
  },
  {
    question: "",
    answer: "",
    link: "",
  },
  {
    question: "",
    answer: "",
  },
];

const FAQ = () => {
  const [selectedFaq, setSelectedFaq] = useState(null);

  return (
    <div className=" px-4 mt-[100px]">
      <h2 className="font-[700] text-2xl"> FAQ</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 text-[14px] gap-5">
        {faqs.map((faq, index) => (
          <div className="w-full bg-primary rounded-xl  h-min p-2" key={index}>
            <button
              onClick={() => {
                if (index !== selectedFaq) {
                  setSelectedFaq(index);
                } else {
                  setSelectedFaq(null);
                }
              }}
              className={`text-start ${
                index !== selectedFaq
                  ? "text-gray-900 bg-transparent"
                  : "bg-white text-primary"
              } box w-full flex  justify-between items-center duration-500`}
            >
              <strong className="text-base font-semibold">
                {faq.question}
              </strong>
            </button>
            {index === selectedFaq && (
              <div className="text-gray-900 mt-2 px-3 pb-3">
                <p className="pb-5 md:text-base text-[12px]">{faq.answer}</p>
                {faq.link && (
                  <a href={faq.link} className="underline">
                    {faq.link}
                  </a>
                )}
                {faq.answers && (
                  <ul>
                    {faq.answers.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
