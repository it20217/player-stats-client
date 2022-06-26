import styles from './Home.module.scss'
import soccerPlayer from '../../images/soccer-player.webp'

function Home() {


  return(
    //    <div className="flex mx-auto container z-40 mt-16 max-h-screen">
    //     <div className="flex w-full items-center justify-center ">
    //         <h1 className="text-6xl font-bold text-gray-900 pl-7 mr-6">
    //             Player <span className="text-4xl font-normal"> perfomance</span>
    //         </h1>
    //         <hr className="w-2.5 h-16 bg-slate-700" />
    //         <h1 className="text-6xl font-bold text-gray-900 pl-7">
    //             Talent<span className="text-4xl font-normal"> scouting</span>
    //         </h1>
    //       <div className="relative place-content-center mt-16">
    //         <img src={soccerPlayer} />
    //       </div>
    //     </div>
        
    // </div>


    <div className="overflow-y-hidden">
    <div className="relative flex justify-center items-center md:flex md:justify-end">
      <img className={styles["soccer-player-image"]} src={soccerPlayer} alt="santa" />
      <div className="w-full flex absolute justify-start flex-col items-center md:py-10 lg:py-20 xl:py-40 md:space-y-12 md:space-y-0">
        <div className=" py-40 sm:py-20  md:hidden">
        </div>
        <div className="w-full custom sm:mt-96 md:mt-0 h-full flex lg:h-96 px-4 z-10 items-end md:items-end md:px-6 xl:px-20 whitespace-nowrap">
          <h1 className="text-6xl font-bold text-gray-900 mr-6 ">
                Player <span className="text-6xl font-normal"> perfomance</span>
            </h1>
            <hr className="w-2.5 h-16 bg-slate-700" />
            <h1 className="text-6xl font-bold text-gray-900 pl-7">
                Talent<span className="text-6xl font-normal"> scouting</span>
            </h1>
        </div>
        <div className="w-full custom h-full flex lg:h-96 px-4 z-10 items-start md:items-start md:px-6 xl:px-20 ">
          <button className="mt-6 w-full md:w-auto lg:mt-8 py-2 md:py-3 px-10 flex justify-center duration-700 hover:-translate-y-1 ease-in-out items-center relative rounded-md text-lg font-medium text-white">
            <p className="relative z-10">Explore Now</p>
            <img className="absolute hidden md:block w-full h-full z-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hero_8_btn.png" alt="gradient" />
            <img className="md:hidden w-full h-full z-0 absolute" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hero_8-btn_mobile.png" alt="gradient" />
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home;