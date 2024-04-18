"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Accident Capital</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      As of my last update, Uttar Pradesh was often referred to as the "accident capital of India." This state has reported a high number of road accidents annually, largely due to its large population and extensive road network. Factors contributing to its high accident rate include poor road conditions, high vehicle density, and sometimes lax enforcement of traffic laws.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">The Figures</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      In India, fatal road accidents are commonly caused by over-speeding, which leads to severe crashes due to reduced reaction times. Drunk driving and wrong-side driving are also significant factors, both resulting in impaired judgment and dangerous collisions. Using mobile phones while driving and jumping red lights contribute to distracted driving and risky intersection incidents. Adverse weather conditions, vehicle defects such as brake failures, and poor road maintenance like unmarked hazards increase accident risks.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Red Zones</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Typically, Uttar Pradesh, including its city Kanpur, reports a high number of fatalities due to road accidents, often leading among states in India. Detailed and specific statistics, such as the total number of deaths due to accidents in Uttar Pradesh and particularly in Kanpur for a given year, would be available in the annual reports published by the Ministry of Road Transport and Highways (MoRTH) or local governmental sources. These reports detail fatalities and are critical for understanding regional trends in road safety.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Sure Signs</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      In highly congested cities like Mumbai and Delhi, common signs of accidents include high-speed crashes during off-peak hours and collisions at congested intersections during peak times. In cities with poor road infrastructure like Patna, accidents frequently occur due to inadequate road maintenance and poorly marked hazards. Seasonal weather conditions, like fog in northern cities such as Chandigarh, also significantly contribute to accident rates by reducing visibility.
      </p>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">The day of Accident</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Historically, research and traffic studies have indicated that weekends, especially Saturdays, tend to see a higher number of road accidents in cities like Mumbai. This trend is generally attributed to increased travel during the weekend, with more vehicles on the road and a higher likelihood of drivers under the influence of alcohol due to social activities.
      </p>
    </div>
  );
};
const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Multiple Reasons</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Road accidents are commonly caused by a combination of human error, environmental factors, and vehicle malfunctions. Over-speeding, drunk driving, distracted driving (such as using mobile phones), and non-compliance with traffic rules are predominant human-related causes. Environmental factors include poor road conditions, adverse weather, and inadequate street lighting, while vehicle-related issues often involve failures like brake defects or tire blowouts.
      </p>
    </div>
  );
};
const SkeletonSeven = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Delhi</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      In Delhi, road accidents are primarily attributed to over-speeding, reckless driving, and non-adherence to traffic rules. The high volume of traffic and poor compliance with road safety norms further compound these issues. Additionally, driving under the influence of alcohol and the presence of unmarked construction zones are significant contributors to the city's road safety challenges.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://cdn.cseindia.org/userfiles/TOI-Delhi-24June-Road-Safety-CSE-2.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.tribuneindia.com/cms/gall_content/2019/2/2019_2$largeimg05_Tuesday_2019_071853710.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1UtVz6U4Kz56GidmIqmkSE-V_T1omSjUjnA&usqp=CAU",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://static.toiimg.com/thumb/imgsize-23456,msid-68178526,width-600,resizemode-4/68178526.jpg",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-1",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGVPBs2WvE0aTcUC34m2KkrZXPpXNLi2RThQ&usqp=CAU",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-1",
    thumbnail:
      "https://www.drishtiias.com/images/uploads/1672828722_Raod_Accidennts_Drishti_IAS_English.png",
  },
  {
    id: 7,
    content: <SkeletonSeven />,
    className: "md:col-span-1",
    thumbnail:
      "https://cdn.cseindia.org/userfiles/Tribune-Delhi-24June-1-Road-Safety-CSE.jpg",
  },
];
