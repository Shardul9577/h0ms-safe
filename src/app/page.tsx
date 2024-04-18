// "use client";
// import Image from "next/image";
// import Link from 'next/link';
// import { StickyScrollRevealDemo } from "./components/Product";
// import  DrawerAppBar  from "./components/Navbar";
// import Footer from "./components/Footer";
// import './components/css/Mainpage.css'
// import { HeroHighlightDemo } from "./components/globeDemo";
// import { LayoutGridDemo } from "./components/LayoutGridDemo";
// import { TracingBeamDemo } from "./components/TracingBeamDemo";
// import {Head} from 'next/document'

// export default function Home() {
//   return (
//     <main>
//       <Head>
//           <link rel="icon" href="/favicon.ico" />
//           <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
//           <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
//           <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
//       </Head>
//       <DrawerAppBar/>

//             <div style={{width:"100vw",height:"100vh"}}>
//                 <HeroHighlightDemo/>
//             </div>

//             <h1 className="general-heading">Real Cases</h1>          

//             <LayoutGridDemo/>

//             <h1 className="general-heading">Inspiration & Abstract</h1>

//             {/* <div className="cards-alignment">
//             <Link legacyBehavior href="/about">

//               <div className="pin-card">
//                 <AnimatedPinDemo />
//               </div>

//             </Link>
//             <Link legacyBehavior href="/about">
              
//               <div className="pin-card">
//                 <AnimatedPinSDemo />
//               </div>

//             </Link>
//             </div> */}

//             <TracingBeamDemo/>


//             <div>
//               <h1 className="general-heading">Product</h1>
//               <StickyScrollRevealDemo />
//             </div>

//             <Footer />
//     </main>
//   );
// }


import Image from "next/image";
import Link from 'next/link';
import { StickyScrollRevealDemo } from "./components/Product";
import DrawerAppBar from "./components/Navbar";
import Footer from "./components/Footer";
import './components/css/Mainpage.css';
import { HeroHighlightDemo } from "./components/globeDemo";
import { LayoutGridDemo } from "./components/LayoutGridDemo";
import { TracingBeamDemo } from "./components/TracingBeamDemo";
import Head from 'next/head'; // Correct import for the head

export default function Home() {
  return (
    <main>
      <Head>
          <link rel="icon" href="/Images/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/Images/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/Images/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/Images/apple-touch-icon.png" />
          <title>Home - Your Site Name</title> // Add a title or other meta tags here
      </Head>
      <DrawerAppBar/>

      <div style={{width:"100vw", height:"100vh"}}>
        <HeroHighlightDemo/>
      </div>

      <h1 className="general-heading">Real Cases</h1>          

      <LayoutGridDemo/>

      <h1 className="general-heading">Inspiration & Abstract</h1>

      {/* Commented section remains the same. If needed uncomment and use */}
      {/* <div className="cards-alignment">
        <Link legacyBehavior href="/about">
          <div className="pin-card">
            <AnimatedPinDemo />
          </div>
        </Link>
        <Link legacyBehavior href="/about">
          <div className="pin-card">
            <AnimatedPinSDemo />
          </div>
        </Link>
      </div> */}

      <TracingBeamDemo/>

      <div>
        <h1 className="general-heading">Product</h1>
        <StickyScrollRevealDemo />
      </div>

      <Footer />
    </main>
  );
}
