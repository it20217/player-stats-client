import styles from './PlayerProfile.module.scss'

function PlayerProfile() {

  return(
    <div className="w-full">
      <div className="h-full border-dashed border-2 bg-white pt-6 mx-auto">
        <div className="flex flex-wrap">
          {/* ---Left Section--- */}
          <div className="md:w-2/5 w-full  pb-6 md:pb-0 md:pr-6">
            {/* Remove class [ h-24 ] when adding a card block */}
            {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
            <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2" >
              {/* ---Avatar image--- */}
              <div className="flex justify-center items-center w-full h-64 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                <div className="h-40 w-40 mr-4 mb-4 lg:mb-0 bg-gray-100 dark:bg-gray-800 shadow-md flex justify-center items-center">
                  <p className="text-gray-600 dark:text-gray-400 font-bold text-4xl">LT</p>
                </div>
              </div>
              {/* ---Name--- */}
              <div className="flex justify-center items-center w-full h-12 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
                <div className="h-40 w-40 mr-4 mb-4 lg:mb-0 flex justify-center items-center">
                  <p className=" text-xl w-40 font-medium whitespace-nowrap ">Leon Tokarev</p>
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
                        <p className="uppercase text-xs mx-8 text-left">Under 11's</p>
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
                        <p className="uppercase text-xs mx-8 text-left">2012</p>
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
                      <p className="w-1/4 uppercase font-bold text-xs mx-8 text-right whitespace-nowrap">Birth year:</p>
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
            <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2">
              

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
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
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
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
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
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
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
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
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
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
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
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
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
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
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
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
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
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
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
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
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
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
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
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
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
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
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
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
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
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                        <div className="w-8 h-2 ml-1 bg-green-500"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerProfile;