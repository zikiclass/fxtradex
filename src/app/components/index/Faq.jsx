"use client";
import React, { useState } from "react";
import "./styles/faq.css";
import { faqs } from "./data";
import { Fade } from "react-awesome-reveal";

const Faq = ({ project_title }) => {
  const faqArray = faqs(project_title);
  // State to keep track of active state for each FAQ item
  const [activeItems, setActiveItems] = useState(
    Array(faqs.length).fill(false)
  );

  // Function to toggle active state for an FAQ item
  const toggleActive = (index) => {
    const newActiveItems = [...activeItems];
    newActiveItems[index] = !newActiveItems[index];
    setActiveItems(newActiveItems);
  };
  return (
    <>
      <div className="faq__wrapper">
        <div className="container">
          <Fade direction="up" triggerOnce>
            <h3>faqs</h3>
            <div className="faqs">
              {faqArray.map((faq, index) => (
                <div className="faq" key={faq.id}>
                  <div className="question" onClick={() => toggleActive(index)}>
                    <span
                      style={{
                        color: `${
                          activeItems[index]
                            ? "var(--primary-color)"
                            : "var(--text-gray)"
                        }`,
                      }}
                    >
                      {faq.question}
                    </span>
                    {activeItems[index] ? (
                      <div>
                        <kbd className="inline-flex items-center px-2 py-1.5 text-dark-100">
                          <svg
                            className="w-2.5 h-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 10"
                          >
                            <path d="M9.207 1A2 2 0 0 0 6.38 1L.793 6.586A2 2 0 0 0 2.207 10H13.38a2 2 0 0 0 1.414-3.414L9.207 1Z" />
                          </svg>
                        </kbd>
                      </div>
                    ) : (
                      <>
                        <kbd className="inline-flex items-center px-2 py-1.5 text-dark-100">
                          <svg
                            className="w-2.5 h-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 10"
                          >
                            <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                          </svg>
                        </kbd>
                      </>
                    )}
                  </div>
                  <div
                    className={
                      activeItems[index] ? "answer active" : "answer hide"
                    }
                  >
                    <p
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                      className="para"
                    ></p>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Faq;
