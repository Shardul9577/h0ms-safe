"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";


const content = [
  {
    title: "h0ms",
    description:
      "h0ms leverages cutting-edge technologies to enhance road safety and prevent accidents. By providing real-time updates about hazardous zones, h0ms aims to eliminate accidents entirely, ensuring safer journeys for all drivers.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img src="/Images/HOMSMAIN.png"/>
      </div>
    ),
  },
  {
    title: "Real Time Data Sensors",
    description:
      "In vehicles, impact sensors are strategically placed in the front engine compartment and passenger zone to detect collisions. These sensors employ a metal ball that, upon impact, moves forward to complete an electrical circuit by contacting gold-plated terminals. This activation signals the central unit of a collision, prompting immediate data retrieval from a server. A microprocessor then processes this data, integrating the severity of the impact and vehicle location, to dispatch emergency signals to authorities and nearby vehicles, enhancing safety and response efficiency.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img src="/Images/Sensor.png"/>
      </div>
    ),
  },
  {
    title: "Server",
    description:
      "A server is a system that provides resources, data, and services to other computers, called clients, over a network. In our system, servers play a crucial role in enhancing road safety by managing and disseminating accident-related information. Specifically, one server interfaces with GPS-based navigation providers like Google Maps to share real-time vehicle locations. A second server is dedicated to connecting with emergency services immediately upon a collision. Together, these servers facilitate swift communication and coordination between drivers and emergency responders, ensuring timely assistance and increased safety on the roads.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <img src="/Images/Server.png"/>
      </div>
    ),
  },
  {
    title: "Navigation",
    description:
      "When an impact sensor detects a collision, it triggers an emergency signal that is immediately broadcast to nearby vehicles. This alert utilizes precise navigation data to pinpoint the exact location of the accident. The collected information is then transmitted to a central server, which is interconnected with all other cars in the vicinity, ensuring rapid and coordinated response to the incident. This system enhances safety by enabling quick situational awareness and assistance.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
       <img src="/Images/Nav.png"/>
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
