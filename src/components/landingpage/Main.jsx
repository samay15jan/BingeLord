import BingelordLogo from '../../assets/Logo.png'
import { useEffect, useState } from 'react'
import RecentActivity from './RecentActivity'
import axios from 'axios'
import './index.css'
/* ------------------------ fonts ----------------------- */
// inter
import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
// space mono
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import { useNavigate } from 'react-router-dom'
import { FaGithub, FaYoutube } from 'react-icons/fa'
import ExpressLogo from '../../assets/icons/express.svg'
import FirebaseLogo from '../../assets/icons/firebase.svg'
import NodeJSLogo from '../../assets/icons/node-js.svg'
import ReactRouterLogo from '../../assets/icons/react-router.svg'
import ReactLogo from '../../assets/icons/react.svg'
import StyledLogo from '../../assets/icons/styled.svg'
import TailwindLogo from '../../assets/icons/tailwind.svg'
import TwinMacroLogo from '../../assets/icons/twin-macro.svg'
import ViteLogo from '../../assets/icons/vite.svg'

export default function Home() {
  const [apiData, setApiData] = useState()
  const [bgOpacity, setBgOpacity] = useState(1)
  const navigate = useNavigate()

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    axios.get(`https://bingelord-backend.onrender.com/api/trendingMovie`)
      .then((response) => {
        setApiData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const newOpacity = Math.max(0, 1 - scrollY / 500)
      setBgOpacity(newOpacity)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const techStack = [
    { name: 'React', logo: ReactLogo, url: 'https://react.dev/' },
    { name: 'Tailwind CSS', logo: TailwindLogo, url: 'https://tailwindcss.com/' },
    { name: 'Firebase', logo: FirebaseLogo, url: 'https://firebase.google.com/' },
    { name: 'Node.js', logo: NodeJSLogo, url: 'https://nodejs.org/' },
    { name: 'Express', logo: ExpressLogo, url: 'https://expressjs.com/' },
    { name: 'React Router', logo: ReactRouterLogo, url: 'https://reactrouter.com/' },
    { name: 'Styled Components', logo: StyledLogo, url: 'https://styled-components.com/' },
    { name: 'Twin Macro', logo: TwinMacroLogo, url: 'https://github.com/ben-rogerson/twin.macro' },
    { name: 'Vite', logo: ViteLogo, url: 'https://vitejs.dev/' },
  ];

  return (
    <div className='bg-[#111113] overflow-x-hidden min-h-screen w-screen layout flex flex-col font-inter'>
      <div className="select-none font-space-mono tracking-tight px-4">
        <div className="relative flex flex-col items-center justify-around gap-y-11 lg:flex-row min-h-[90vh] animate-fade">
          <div className="hidden lg:block z-1 absolute top-[-100px] text-[15rem] md:text-[14rem] text-black stroke-text text-center w-full whitespace-nowrap overflow-hidden" style={{ opacity: bgOpacity }}>
            見る王狂見る王狂
          </div>
          <div className="block lg:hidden z-1 absolute top-[-150px] text-[15rem] stroke-text text-center w-full" style={{ opacity: bgOpacity }}>
            狂見る
          </div>
          <div className="hidden lg:block z-1 absolute text-[8rem] md:text-[15rem] stroke-text text-center w-full" style={{ opacity: bgOpacity }}>
            BINGELORD
          </div>
          <div className="hidden lg:block z-1 absolute bottom-[-150px] text-[15rem] md:text-[15rem] text-black stroke-text text-center w-full whitespace-nowrap overflow-hidden">
            王狂見る王狂見る
          </div>
          <div className='z-10 flex flex-col items-center mt-20 lg:mt-0 w-full lg:w-2/5 text-center animate-fade'>
            <img src={BingelordLogo} alt="" className="p-4 drop-shadow-xl h-[6rem]" />
            <p className="font-space-mono text-sm tracking-widest">A Movies & Series Browsing and Streaming Platform</p>
            <button className="bg-white text-black font-semibold mt-5 px-4 py-2 rounded transition hover:scale-105" onClick={() => navigate('auth')}>Get Started</button>
          </div>
          {apiData && <RecentActivity data={apiData?.results.slice(0, 9)} />}
        </div>
        <div className='z-10 rel mt-24 text-center'>
          <p className="z-10 font-space-mono tracking-widest">built with</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4 mb-5">
            {techStack.map((tech) => (
              <a key={tech.name} href={tech.url} target="_blank" rel="noopener noreferrer">
                <img src={tech.logo} alt={tech.name} className="w-10 h-10 sm:w-12 sm:h-12 transition-transform hover:scale-110" />
              </a>
            ))}
          </div>
          <div className='flex justify-center gap-4'>
            <button className="flex items-center bg-white text-black font-semibold px-4 py-2 rounded transition hover:scale-105" onClick={() => handleRedirect('https://github.com/samay15jan/bingelord')}>
              Github <FaGithub className='ml-2' size={22} />
            </button>
            <button className="flex items-center bg-white text-black font-semibold px-4 py-2 rounded transition hover:scale-105" onClick={() => handleRedirect('https://www.youtube.com/watch?v=jGQ44HlC5UA')}>
              Demo <FaYoutube className='ml-2' size={22} />
            </button>
          </div>
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent mt-10 mb-2"></div>
          <p className="font-space-mono tracking-widest my-4">Crafted By Samay Kumar</p>
        </div>
      </div>
    </div>
  )
}
