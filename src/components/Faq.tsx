"use client";
import React, { useState, useRef } from "react";
import { faqData } from "@/constants/faqs";

interface FaqItem {
  question: string;
  answer: string;
}

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="flex flex-col items-center justify-center text-center mb-6 sm:mb-8 md:mb-12">
        <h2 className="text-sm sm:text-md md:text-lg text-textPrimary text-center gradient-border font-medium border-b rounded-[100px] mb-3 sm:mb-4 md:mb-5 uppercase tracking-wide px-3 py-1">
          FAQ
        </h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-textPrimary font-poppins font-semibold tracking-tighter text-center">
          Top Answered Questions
        </h2>
      </div>

      <div className="mt-6 sm:mt-8 md:mt-10 space-y-4">
        {faqData.map((item: FaqItem, index: number) => (
          <AccordionItem 
            key={index} 
            question={item.question} 
            answer={item.answer} 
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 md:py-5 -mb-2 px-2 md:px-4 flex justify-between items-center focus:outline-none"
        onClick={onToggle}
      >
        <span className="font-semibold text-sm sm:text-md md:text-lg text-[#031811] text-left mr-2">{question}</span>
        <span className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <div 
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0' }}
      >
        <div className="pb-4 sm:pb-5 px-2 sm:px-4 text-[#031811B2] text-xs sm:text-sm md:text-md">
          {answer}
        </div>
      </div>
    </div>
  );
}
