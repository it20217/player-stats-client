import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './PlayerProfile.module.scss';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';


function PlayerProfile() {

  const { REACT_APP_BASE_URL } = process.env;
  const { id } = useParams();
  const [player, setPlayer] = useState();
  const [performance, setPerformance] = useState({data: [], pp: []});
  const [error, setError] = useState();

  const firstLetter = (name) => {
    const letter = name.charAt(0).toUpperCase();
    return letter;
  }

  useEffect(()=> {
    const getPlayer = async()=> {
      try {
        fetch(`${REACT_APP_BASE_URL}/player/${id}`)
        .then(res => res.json())
        .then(json => {
          setPlayer(json?.result?.response);
          setPerformance((p) => ({...p, ...{data: json?.result?.data, pp: json?.result?.performance}}));
        })    
      } catch {
          /** Catches errors both in fetch and response.json */
        setError({ code: 500, message: "Unable to get users data. Please try again later." });
      }
    }
    getPlayer();
  }, [id]);

  return(
    <div className="w-full">
      <div className="h-full bg-white pt-6 mx-auto">
        <div className="flex flex-wrap">
          {/* ---Left Section--- */}
          <div className="md:w-2/5 w-full  pb-6 md:pb-0 md:pr-6">
            {/* Remove class [ h-24 ] when adding a card block */}
            {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
            <div className="rounded border-gray-300  dark:border-gray-700" >
              {/* ---Avatar image--- */}
              <div className="flex justify-center items-center w-full h-64 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                <div className="h-40 w-40 mr-4 mb-4 lg:mb-0 bg-gray-100 dark:bg-gray-800 shadow-md flex justify-center items-center">
                  <p className="text-gray-600 dark:text-gray-400 font-bold text-4xl">
                    {player?.firstName?.charAt(0).toUpperCase()} {player?.lastName?.charAt(0).toUpperCase()}
                  </p>
                </div>
              </div>
              {/* ---Name--- */}
              <div className="flex justify-center items-center w-full h-12 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                <div className="h-40 w-40 mr-4 mb-4 lg:mb-0 flex justify-center items-center">
                  <p className=" text-xl w-40 font-medium whitespace-nowrap ">{player?.firstName} {player?.lastName}</p>
                </div>
              </div>
              {/* ---Player team details--- */}
              <div className="flex-col justify-center  w-full h-64 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                {/* ---Current Team--- */}
                <div className="flex justify-center items-center w-full h-12 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                  <div className="h-40 w-full mr-4 mb-4 lg:mb-0 flex justify-center items-center">
                    <div className="flex w-full">
                      <p className="w-1/4 uppercase font-bold text-xs mx-8 text-right whitespace-nowrap">Team:</p>
                      <div className="flex w-3/4 items-center justify-center">
                        <p className="uppercase text-xs mx-8 text-left whitespace-nowrap">{player?.homeClub}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ---Position--- */}
                <div className="flex justify-center items-center w-full h-12 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                  <div className="h-40 w-full mr-4 mb-4 lg:mb-0 flex justify-center items-center">
                    <div className="flex w-full">
                      <p className="w-1/4 uppercase font-bold text-xs mx-8 text-right whitespace-nowrap">Position:</p>
                      <div className="flex w-3/4 items-center justify-center">
                        <p className="uppercase text-xs mx-8 text-left">Midfielder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ---Player personal details--- */}
              <div className="flex-col justify-center  w-full h-64 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                {/* ---Nationality--- */}
                <div className="flex justify-center items-center w-full h-12 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                  <div className="h-40 w-full mr-4 mb-4 lg:mb-0 flex justify-center items-center">
                    <div className="flex w-full">
                      <p className="w-1/4 uppercase font-bold text-xs mx-8 text-right whitespace-nowrap">Country:</p>
                      <div className="flex w-3/4 items-center justify-center">
                        <p className="uppercase text-xs mx-8 text-left">Ireland</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ---Birth year--- */}
                <div className="flex justify-center items-center w-full h-12 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                  <div className="h-40 w-full mr-4 mb-4 lg:mb-0 flex justify-center items-center">
                    <div className="flex w-full">
                      <p className="w-1/4 uppercase font-bold text-xs mx-8 text-right whitespace-nowrap">Birth year:</p>
                      <div className="flex w-3/4 items-center justify-center">
                        <p className="uppercase text-xs mx-8 text-left">
                          {player?.birthYear}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ---Height--- */}
                <div className="flex justify-center items-center w-full h-12 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                  <div className="h-40 w-full mr-4 mb-4 lg:mb-0 flex justify-center items-center">
                    <div className="flex w-full">
                      <p className="w-1/4 uppercase font-bold text-xs mx-8 text-right whitespace-nowrap">Height:</p>
                      <div className="flex w-3/4 items-center justify-center">
                        <p className="uppercase text-xs mx-8 text-left">130cm</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ---Weight--- */}
                <div className="flex justify-center items-center w-full h-12 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                  <div className="h-40 w-full mr-4 mb-4 lg:mb-0 flex justify-center items-center">
                    <div className="flex w-full">
                      <p className="w-1/4 uppercase font-bold text-xs mx-8 text-right whitespace-nowrap">Weight:</p>
                      <div className="flex w-3/4 items-center justify-center">
                        <p className="uppercase text-xs mx-8 text-left">30kg</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---Right Section--- */}

          <div className="w-3/5 w-full">
            {/* Remove class [ h-24 ] when adding a card block */}
            {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
            <div className="rounded border-gray-300  dark:border-gray-700">
              

              {/* ---Technical Perfomance Values--- */}

              <div className="flex-col justify-center  w-full rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                {/* ---Header for Technical Perfomance Values--- */}
                <div className="flex justify-center items-center w-full h-12 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                  <div className="w-full mr-4 mb-4 lg:mb-0 flex justify-center items-center">
                    <div className="flex-col w-full">
                      <div className="flex w-full items-center justify-center">
                        <p className="w-1/4 uppercase font-bold text-sm mx-8 text-center whitespace-nowrap">Technical:</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Dribbling performance evaluation */}
                <div className="flex justify-center items-center w-full h-12 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                  <div className="w-full mr-4 mb-4 lg:mb-0 flex justify-center items-center">
                    <div className="flex w-full">
                      <div className=" w-1/4 uppercase font-bold text-xs mx-8 text-right">Dribbling</div>
                      <div className="flex w-3/4 items-center justify-center">
                        {performance?.pp?.dribbling >= 1 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.dribbling >= 21 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.dribbling >= 41 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.dribbling >= 61 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.dribbling >= 81 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Passing performance evaluation */}
                <div className="flex justify-center items-center w-full h-12 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                  <div className="w-full mr-4 mb-4 lg:mb-0 flex justify-center items-center">
                    <div className="flex w-full">
                      <div className=" w-1/4 uppercase font-bold text-xs mx-8 text-right">Passing</div>
                      <div className="flex w-3/4 items-center justify-center">
                        {performance?.pp?.passing >= 1 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.passing >= 21 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.passing >= 41 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.passing >= 61 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.passing >= 81 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Shooting performance evaluation */}
                <div className="flex justify-center items-center w-full h-12 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                  <div className="w-full mr-4 mb-4 lg:mb-0 flex justify-center items-center">
                    <div className="flex w-full">
                      <div className=" w-1/4 uppercase font-bold text-xs mx-8 text-right">Shooting</div>
                      <div className="flex w-3/4 items-center justify-center">
                        {performance?.pp?.shooting >= 1 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.shooting >= 21 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.shooting >= 41 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.shooting >= 61 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.shooting >= 81 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                      </div>
                    </div>
                  </div>
                 </div>
                {/* Tackling performance evaluation */}
                <div className="flex justify-center items-center w-full h-12 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                  <div className="w-full mr-4 mb-4 lg:mb-0 flex justify-center items-center">
                    <div className="flex w-full">
                      <div className=" w-1/4 uppercase font-bold text-xs mx-8 text-right">Tackling</div>
                      <div className="flex w-3/4 items-center justify-center">
                        {performance?.pp?.tackling >= 1 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.tackling >= 21 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.tackling >= 41 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.tackling >= 61 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.tackling >= 81 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ---Menthal  Values--- */}
              <div className="flex-col justify-center  w-full rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800 mt-8">
                {/* ---Header for Technical Perfomance Values--- */}
                <div className="flex justify-center items-center w-full h-12 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                  <div className="w-full mr-4 mb-4 lg:mb-0 flex justify-center items-center">
                    <div className="flex-col w-full">
                      <div className="flex w-full items-center justify-center">
                        <p className="w-1/4 uppercase font-bold text-sm mx-8 text-center whitespace-nowrap">Menthal:</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Aggression evaluation */}
                <div className="flex justify-center items-center w-full h-12 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                  <div className="w-full mr-4 mb-4 lg:mb-0 flex justify-center items-center">
                    <div className="flex w-full">
                      <p className="w-1/4 uppercase font-bold text-xs mx-8 text-right">Aggression</p>
                      <div className="flex w-3/4 items-center justify-center">
                        {performance?.pp?.aggression >= 1 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.aggression >= 21 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.aggression >= 41 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.aggression >= 61 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.aggression >= 81 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Concentration evaluation */}
                <div className="flex justify-center items-center w-full h-12 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                  <div className="w-full mr-4 mb-4 lg:mb-0 flex justify-center items-center">
                    <div className="flex w-full">
                      <div className=" w-1/4 uppercase font-bold text-xs mx-8 text-right">Concentration</div>
                      <div className="flex w-3/4 items-center justify-center">
                        {performance?.pp?.concentration >= 1 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.concentration >= 21 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.concentration >= 41 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.concentration >= 61 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.concentration >= 81 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Leadership performance evaluation */}
                <div className="flex justify-center items-center w-full h-12 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                  <div className="w-full mr-4 mb-4 lg:mb-0 flex justify-center items-center">
                    <div className="flex w-full">
                      <div className=" w-1/4 uppercase font-bold text-xs mx-8 text-right">Leadership</div>
                      <div className="flex w-3/4 items-center justify-center">
                        {performance?.pp?.leadership >= 1 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.leadership >= 21 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.leadership >= 41 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.leadership >= 61 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.leadership >= 81 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Teamwork evaluation */}
                <div className="flex justify-center items-center w-full h-12 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                  <div className="w-full mr-4 mb-4 lg:mb-0 flex justify-center items-center">
                    <div className="flex w-full">
                      <div className=" w-1/4 uppercase font-bold text-xs mx-8 text-right">Teamwork</div>
                      <div className="flex w-3/4 items-center justify-center">
                        {performance?.pp?.teamwork >= 1 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.teamwork >= 21 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.teamwork >= 41 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.teamwork >= 61 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.teamwork >= 81 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decisions making evaluation */}
                <div className="flex justify-center items-center w-full h-12 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                  <div className="w-full mr-4 mb-4 lg:mb-0 flex justify-center items-center">
                    <div className="flex w-full">
                      <div className=" w-1/4 uppercase font-bold text-xs mx-8 text-right">Decisions</div>
                      <div className="flex w-3/4 items-center justify-center">
                        {performance?.pp?.decisions >= 1 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.decisions >= 21 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.decisions >= 41 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.decisions >= 61 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.decisions >= 81 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Endurance making evaluation */}
                <div className="flex justify-center items-center w-full h-12 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                  <div className="w-full mr-4 mb-4 lg:mb-0 flex justify-center items-center">
                    <div className="flex w-full">
                      <div className=" w-1/4 uppercase font-bold text-xs mx-8 text-right">Endurance</div>
                      <div className="flex w-3/4 items-center justify-center">
                        {performance?.pp?.endurance >= 1 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.endurance >= 21 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.endurance >= 41 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.endurance >= 61 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.endurance >= 81 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ---Physical  Values--- */}
              <div className="flex-col justify-center  w-full rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800 mt-8">
                {/* ---Header for Technical Perfomance Values--- */}
                <div className="flex justify-center items-center w-full h-12 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                  <div className="w-full mr-4 mb-4 lg:mb-0 flex justify-center items-center">
                    <div className="flex-col w-full">
                      <div className="flex w-full items-center justify-center">
                        <p className="w-1/4 uppercase font-bold text-sm mx-8 text-center whitespace-nowrap">Physical:</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Accelaretion evaluation */}
                <div className="flex justify-center items-center w-full h-12 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                  <div className="w-full mr-4 mb-4 lg:mb-0 flex justify-center items-center">
                    <div className="flex w-full">
                      <p className="w-1/4 uppercase font-bold text-xs mx-8 text-right">Acceleration</p>
                      <div className="flex w-3/4 items-center justify-center">
                        {performance?.pp?.acceleration >= 1 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.acceleration >= 21 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.acceleration >= 41 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.acceleration >= 61 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.acceleration >= 81 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Concentration evaluation */}
                <div className="flex justify-center items-center w-full h-12 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                  <div className="w-full mr-4 mb-4 lg:mb-0 flex justify-center items-center">
                    <div className="flex w-full">
                      <div className=" w-1/4 uppercase font-bold text-xs mx-8 text-right">Jumping</div>
                      <div className="flex w-3/4 items-center justify-center">
                        {performance?.pp?.jumping >= 1 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.jumping >= 21 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.jumping >= 41 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.jumping >= 61 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.jumping >= 81 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Leadership performance evaluation */}
                <div className="flex justify-center items-center w-full h-12 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                  <div className="w-full mr-4 mb-4 lg:mb-0 flex justify-center items-center">
                    <div className="flex w-full">
                      <div className=" w-1/4 uppercase font-bold text-xs mx-8 text-right">Leadership</div>
                      <div className="flex w-3/4 items-center justify-center">
                        {performance?.pp?.leadership >= 1 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.leadership >= 21 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.leadership >= 41 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.leadership >= 61 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.leadership >= 81 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Teamwork evaluation */}
                <div className="flex justify-center items-center w-full h-12 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                  <div className="w-full mr-4 mb-4 lg:mb-0 flex justify-center items-center">
                    <div className="flex w-full">
                      <div className=" w-1/4 uppercase font-bold text-xs mx-8 text-right">Teamwork</div>
                      <div className="flex w-3/4 items-center justify-center">
                        {performance?.pp?.teamwork >= 1 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.teamwork >= 21 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.teamwork >= 41 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.teamwork >= 61 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.teamwork >= 81 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decisions making evaluation */}
                <div className="flex justify-center items-center w-full h-12 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                  <div className="w-full mr-4 mb-4 lg:mb-0 flex justify-center items-center">
                    <div className="flex w-full">
                      <div className=" w-1/4 uppercase font-bold text-xs mx-8 text-right">Decisions</div>
                      <div className="flex w-3/4 items-center justify-center">
                        {performance?.pp?.decisions >= 1 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.decisions >= 21 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.decisions >= 41 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.decisions >= 61 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                        {performance?.pp?.decisions >= 81 ? <div className="w-8 h-2 ml-1 bg-green-500"/> : <div className="w-8 h-2 ml-1 bg-slate-500"/>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
      <div>
      <BarChart width={1000} height={500} data={performance?.data}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis/>
        <Tooltip/>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="value" fill="#8884d8" barSize={30} />
      </BarChart>
      </div>
    </div>
  )
}

export default PlayerProfile;