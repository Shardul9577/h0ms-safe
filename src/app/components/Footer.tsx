
import React from 'react'
import './css/Footer.css'

function Footer() {
  return (
    <>
    <div className='footer'>
      <div className='footer-section-1'>
        <div className='footer-section-1-img'>
            <img className='footer-section-1-logo' src='/Images/HOMS.png'/>
            <p>h0ms leverages cutting-edge technologies to enhance road safety and <br/> prevent accidents. By providing real-time updates about hazardous <br/> zones, h0ms aims to eliminate accidents entirely, ensuring safer <br/> journeys for all drivers.</p>
        </div>
        <div className='footer-section-1-text'>
        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                <span>
                Tailwind Connect
                </span>
                <svg
                fill="none"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                />
                </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
        </div>
      </div>
      <div className='footer-section-2'>
        <div className='footer-section-2-logos'>
            <div className='footer-section-2-logo-social'>
            <a style={{fontSize:"1vw"}} target='_blank' href='https://www.linkedin.com/in/shardul-chaudhary-bab4b0260/'>Linkedin</a>
            <a style={{fontSize:"1vw"}} target='_blank' href='https://www.instagram.com/_shardul_1210/'>Instagram</a>
            <a style={{fontSize:"1vw"}} target='_blank' href='https://twitter.com/shardul1210'>Twitter</a>
            </div>
            <div className='footer-section-2-logo-notsocial'>
                <img className='logo-img' src='https://www.induced.ai/_next/image?url=%2Ffooter%2Fsoc.png&w=2048&q=75'/>
                <img className='logo-img' src='https://www.induced.ai/_next/image?url=%2Ffooter%2Fgdpr.png&w=2048&q=75'/>
                <img className='logo-img' src='https://www.induced.ai/footer/hipaa.svg'/>
                <a className='logo-img-text' href=''>Privacy Policy</a>
                <a className='logo-img-text' href=''>Terms of Service</a>
            </div>
        </div>
        <div className='footer-section-2-copyright'>&copy; Buidl Inc</div>
      </div>
    </div>
    <div className='footer-2'>
      <img className='footer-2-logo' src='/Images/HOMS.png'/>
      <div className='footer-section-2-logo-social'>
        <a style={{fontSize:"1vw"}} target='_blank' href='https://www.linkedin.com/in/shardul-chaudhary-bab4b0260/'>Linkedin</a>
        <a style={{fontSize:"1vw"}} target='_blank' href='https://www.instagram.com/_shardul_1210/'>Instagram</a>
        <a style={{fontSize:"1vw"}} target='_blank' href='https://twitter.com/shardul1210'>Twitter</a>
      </div>
    </div>
    </>
  )
}

export default Footer
