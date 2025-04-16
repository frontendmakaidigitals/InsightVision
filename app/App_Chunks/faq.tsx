"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PhoneCall, ChatDots } from "@phosphor-icons/react";

export function AccordionDemo() {

  return (
    <div className="bg-slate-100 ">
      <div className="container pt-24 pb-32">
        <p className="text-[#bb9bfc] font-Plus-Jakarta-Sans font-[600]">FAQs</p>
        <h1 className="text-3xl mt-2 lg:text-5xl max-w-2xl font-Plus-Jakarta-Sans font-[600]">
          Question? <span className="text-indigo-700">Look here.</span>
        </h1>

        <div className="grid grid-cols-[1.5fr_0.5fr] gap-5 mt-10">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="grid grid-cols-1 gap-y-3">
            <div className="bg-[#0e2147] p-4 rounded-lg">
              <div className="flex w-full justify-center">
                <ChatDots weight="fill" className="text-slate-50 text-5xl" />
              </div>
              <p className="text-center mt-2 text-slate-50 font-Plus-Jakarta-Sans font-[500] text-sm">
                You have a different questions?
              </p>
              <p className=" text-center mt-1 text-xs text-slate-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex justify-center mt-3">
                <button className="px-4 text-xs py-2 cursor-pointer bg-indigo-500 font-[600] font-Plus-Jakarta-Sans text-slate-50 rounded-full">
                  Contact us
                </button>
              </div>
            </div>
            <div className="flex gap-4 bg-white rounded-lg items-center p-4">
              <div>
                <div className="size-10 flex items-center justify-center bg-indigo-200 rounded-full">
                  <PhoneCall weight="fill" className="text-2xl" />
                </div>
              </div>
              <div>
                <p className="text-xs">Your Questions, Our Priority</p>
                <p className="text-2xl font-Plus-Jakarta-Sans font-[600] mt-1">
                  24/7 Service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    
    </div>
  );
}
