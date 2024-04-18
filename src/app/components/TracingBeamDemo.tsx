// "use client";
// import React from "react";
// import Image from "next/image";
// import { twMerge } from "tailwind-merge";
// import { TracingBeam } from "../ui/tracing-beams";

// export function TracingBeamDemo() {
//   return (
//     <TracingBeam className="px-6">
//       <div className="max-w-2xl mx-auto antialiased pt-4 relative">
//         {dummyContent.map((item, index) => (
//           <div key={`content-${index}`} className="mb-10">
//             <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
//               {item.badge}
//             </h2>

//             <p className={twMerge("text-xl mb-4")}>
//               {item.title}
//             </p>

//             <div className="text-sm  prose prose-sm dark:prose-invert">
//               {item?.image && (
//                 <Image
//                   src={item.image}
//                   alt="blog thumbnail"
//                   height="1000"
//                   width="1000"
//                   className="rounded-lg mb-10 object-cover"
//                 />
//               )}
//               {item.description}
//             </div>
//           </div>
//         ))}
//       </div>
//     </TracingBeam>
//   );
// }

// const dummyContent = [
//   {
//     title: "Inspiration",
//     description: (
//       <>
//         <p>
//         Two died and over a dozen commuters were reportedly
//         injured as nearly 40 vehicles met with an accident due to
//         low visibility caused by dense fog in Uttar Pradesh's
//         Bulandshahr.
//         </p>
//       </>
//     ),
//     badge: "",
//     image:
//       "https://i.pinimg.com/736x/7e/7f/6f/7e7f6f714bbef33b5aa0d275c410d093.jpg",
//   },
//   {
//     title: "Abstract",
//     description: (
//       <>
//         <p>
//         Main focus of our system is to prevent multiple accidents
// occurring due to low light conditions or low visibility due to fog
// and smog conditions. Many times in such conditions, multiple
// accident occur due to delay in transfer of information of
// accident ahead on road which leads to traffic jam or car
// smashing into debris of previous accident. Our system resolves
// this problem by informing surrounding vehicles of upcoming
// road blockage due to road accident and thus redirecting traffic to
// another route which leads to faster first aid and resolution of the
// situation.
//         </p>
//         <br/>
//         <p>
//         Secondary objective of our system is to reduce the delay in
// emergency services. Our system directly contacts emergency
// services in case of accident so required assistance and medical help
// can be sent in minimal time increasing the mortality rate.
//         </p>
//         <br/>
//         <p>Overall, our systems aims to reduce damage done to life and
// property due to delay in information relay. This technology is
// centralized and must need concept in todays context as more and
// more people choose private transport which results in increasing
// number of vehicle on road day by day. This further results into ever
// growing rate of accident and unreversible damage to economy which
// this unfortunate incidents bring </p>
//       </>
//     ),
//     badge: "",
//     image:
//       "https://www.cartoq.com/wp-content/uploads/2017/11/Fog-Crash-on-the-Agra-Lucknow-Expressway.jpg",
//   },
// ];

"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beams";

export function TracingBeamDemo() {
  return (
    <TracingBeam className='px-6'>
      <div className='max-w-2xl mx-auto antialiased pt-4 relative'>
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className='mb-10'>
            <h2 className='bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4'>
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4")}>{item.title}</p>

            <div className='text-sm prose prose-sm dark:prose-invert'>
              {item?.image && (
                <Image
                  src={item.image}
                  alt='blog thumbnail'
                  height='1000'
                  width='1000'
                  className='rounded-lg mb-10 object-cover'
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Inspiration",
    description: (
      <>
        <p>
          Two died and over a dozen commuters were reportedly injured as nearly
          40 vehicles met with an accident due to low visibility caused by dense
          fog in Uttar Pradesh Bulandshahr.
        </p>
      </>
    ),
    badge: "",
    image:
      "https://i.pinimg.com/736x/7e/7f/6f/7e7f6f714bbef33b5aa0d275c410d093.jpg",
  },
  {
    title: "Abstract",
    description: (
      <>
        <p>
          Main focus of our system is to prevent multiple accidents occurring
          due to low light conditions or low visibility due to fog and smog
          conditions. Many times in such conditions, multiple accident occur due
          to delay in transfer of information of accident ahead on road which
          leads to traffic jam or car smashing into debris of previous accident.
          Our system resolves this problem by informing surrounding vehicles of
          upcoming road blockage due to road accident and thus redirecting
          traffic to another route which leads to faster first aid and
          resolution of the situation.
        </p>
        <br />
        <p>
          Secondary objective of our system is to reduce the delay in emergency
          services. Our system directly contacts emergency services in case of
          accident so required assistance and medical help can be sent in
          minimal time increasing the mortality rate.
        </p>
        <br />
        <p>
          Overall, our systems aims to reduce damage done to life and property
          due to delay in information relay. This technology is centralized and
          must need concept in today context as more and more people choose
          private transport which results in increasing number of vehicle on
          road day by day. This further results into ever growing rate of
          accident and irreversible damage to economy which this unfortunate
          incidents bring
        </p>
      </>
    ),
    badge: "",
    image:
      "https://www.cartoq.com/wp-content/uploads/2017/11/Fog-Crash-on-the-Agra-Lucknow-Expressway.jpg",
  },
];
