import Slider from '../../components/Slider/Slider'

function PlayerEvaluation() {

  return( 
  <div aria-label="form" tabindex="0" class="focus:outline-none xl:w-10/12 w-full px-8">
    <div class="py-12 flex flex-wrap items-center justify-center">
      <div class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
        <div class="w-80">
            <div class="flex items-center">
                <h1 tabindex="0" class="focus:outline-none text-xl font-medium pr-2 leading-5 text-gray-800">Scout Information</h1>
            </div>
            <p tabindex="0" class="focus:outline-none mt-4 text-sm leading-5 text-gray-600">Information about the section could go here and a brief description of how this might be used.</p>
        </div>
      <div>
          <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
            <div class="md:w-64">
                <label class="text-sm leading-none text-gray-800" id="firstName" >First name</label>
                <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="firstName" placeholder="John" />
            </div>
            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                <label class="text-sm leading-none text-gray-800" id="lastName">Last name</label>
                <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="lastName" placeholder="Doe" />
            </div>
          </div>
        </div>
      </div>
    </div>
     {/* Section 2 */}
    <div class="flex flex-wrap items-center justify-center">
      <div class="lg:flex justify-between border-b border-gray-200 pb-16">
        <div class="w-80">
            <div class="flex items-center">
                <h1 tabindex="0" class="focus:outline-none text-xl font-medium pr-2 leading-5 text-gray-800">Player Information</h1>
            </div>
            <p tabindex="0" class="focus:outline-none mt-4 text-sm leading-5 text-gray-600">Information about the section could go here and a brief description of how this might be used.</p>
        </div>
      <div>
          <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
            <div class="md:w-64">
                <label class="text-sm leading-none text-gray-800" id="firstName" >First name</label>
                <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="firstName" placeholder="John" />
            </div>
            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                <label class="text-sm leading-none text-gray-800" id="lastName">Last name</label>
                <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="lastName" placeholder="Doe" />
            </div>
          </div>
          <div class="md:flex items-center lg:ml-24 mt-8">
            <div class="md:w-64">
                <label class="text-sm leading-none text-gray-800" id="emailAddress">Player Team</label>
                <input type="text" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="emailAddress" placeholder="Team" />
            </div>
            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                <label class="text-sm leading-none text-gray-800" id="lastName">Player id</label>
                <input type="id" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="lastName" placeholder="id" />
            </div>
          </div>
        </div>
      </div>
    </div>
     {/* Section 3 */}
    <div class="flex flex-wrap items-center justify-center">
      <div class="py-16 lg:flex justify-between border-b border-gray-200 pb-16">

        <div class="w-80">
            <div class="flex items-center">
              <h1 tabindex="0" class="focus:outline-none text-xl font-medium pr-2 leading-5 text-gray-800">Evaluation</h1>
            </div>
            <p tabindex="0" class="focus:outline-none mt-4 text-sm leading-5 text-gray-600">Information about the section could go here and a brief description of how this might be used.</p>
        </div>
        <div>
          {/* Dribbling */}
          <div class="md:flex lg:ml-24 mt-8">
            <div class="md:w-64">
              <label class="text-base font-medium leading-none text-gray-800" id="emailAddress">Dribbling</label>
            </div>
            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
              <Slider/>
            </div>
          </div>
          {/* Passing */}
          <div class="md:flex lg:ml-24 mt-8">
            <div class="md:w-64">
              <label class="text-base font-medium leading-none text-gray-800" id="emailAddress">Passing</label>
            </div>
            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
              <Slider/>
            </div>
          </div>
          {/* Shooting */}
          <div class="md:flex lg:ml-24 mt-8">
            <div class="md:w-64">
              <label class="text-base font-medium leading-none text-gray-800" id="emailAddress">Shooting</label>
            </div>
            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
              <Slider/>
            </div>
          </div>
          {/* Tackling */}
          <div class="md:flex lg:ml-24 mt-16">
            <div class="md:w-64">
              <label class="text-base font-medium leading-none text-gray-800" id="emailAddress">Tackling</label>
            </div>
            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
              <Slider/>
            </div>
          </div>
          {/* Aggression */}
          <div class="md:flex lg:ml-24 mt-8">
            <div class="md:w-64">
              <label class="text-base font-medium leading-none text-gray-800" id="emailAddress">Aggression</label>
            </div>
            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
              <Slider/>
            </div>
          </div>
          {/* Concentration */}
          <div class="md:flex lg:ml-24 mt-8">
            <div class="md:w-64">
              <label class="text-base font-medium leading-none text-gray-800" id="emailAddress">Concentration</label>
            </div>
            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
              <Slider/>
            </div>
          </div>
          {/* Leadership */}
          <div class="md:flex lg:ml-24 mt-16">
            <div class="md:w-64">
              <label class="text-base font-medium leading-none text-gray-800" id="emailAddress">Leadership</label>
            </div>
            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
              <Slider/>
            </div>
          </div>
          {/* Teamwork */}
          <div class="md:flex lg:ml-24 mt-8">
            <div class="md:w-64">
              <label class="text-base font-medium leading-none text-gray-800" id="emailAddress">Teamwork</label>
            </div>
            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
              <Slider/>
            </div>
          </div>
          {/* Decisions */}
          <div class="md:flex lg:ml-24 mt-8">
            <div class="md:w-64">
              <label class="text-base font-medium leading-none text-gray-800" id="emailAddress">Decisions</label>
            </div>
            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
              <Slider/>
            </div>
          </div>
          {/* Endurance */}
          <div class="md:flex lg:ml-24 mt-8">
            <div class="md:w-64">
              <label class="text-base font-medium leading-none text-gray-800" id="emailAddress">Endurance</label>
            </div>
            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
              <Slider/>
            </div>
          </div>
          {/* Acceleration */}
          <div class="md:flex lg:ml-24 mt-16">
            <div class="md:w-64">
              <label class="text-base font-medium leading-none text-gray-800" id="emailAddress">Acceleration</label>
            </div>
            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
              <Slider/>
            </div>
          </div>
          {/* Jumping */}
          <div class="md:flex lg:ml-24 mt-8">
            <div class="md:w-64">
              <label class="text-base font-medium leading-none text-gray-800" id="emailAddress">Jumping</label>
            </div>
            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
              <Slider/>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  )
}

export default PlayerEvaluation;