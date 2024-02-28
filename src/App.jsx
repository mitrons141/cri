import React from "react";

function App() {
  const text =
    "CHEMICALS&PROCESS POWER WATER&WASTEWATER OILS&GAS PHARMA SUGARS&DISTILLERIES PAPER&PULP MARINE&DEFENCE METAL&MINING FOOD&BEVERAGE ";

  const text2 =
    "PETROCHEMICAL&REFINERIES SOLAR BUILDING HVAC FIREFIGHTING AGRICULTURE&RESIDENTIAL";

  const words = text.split(" ");

  const words2 = text2.split(" ");

  const formattedWords = words.map((word, index) => {
    if (index === words.length - 1) {
      return <span key={index}>{word}</span>;
    }
    return (
      <span key={index}>
        {word} <span className="text-red-600">|</span>
      </span>
    );
  });

  const formattedWords2 = words2.map((word, index) => {
    if (index === words.length - 1) {
      return <span key={index}>{word}</span>;
    }
    return (
      <span key={index}>
        {word} <span className="text-red-600">|</span>
      </span>
    );
  });

  return (
    <div className="bg-gradient-to-b from-amber-50 to-amber-200 -z-1">
      <div className="flex items-center justify-center">
        <img src="/logo.png" className="h-[8rem] w-[24rem]" />
      </div>
      <div>
        <div className="flex flex-col lg:flex-row md:flex-row items-center justify-center pt-4 lg:gap-64 md:gap-54">
          <img src="/1.png" className="h-[32rem] w-[24rem]" />
          <div className="text-xs font-semibold pr-4 lg:w-[800px] md:w-[700px]">
            <span className="font-extrabold pl-2">
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </span>
            <span>
              <ul className="list-disc p-10">
                <li>
                  C.R.I.'s energy efficient products are well recognized by
                  various Government Institutions, as trustworthy products for
                  various projects across the globe to save energy.
                </li>
                <li>
                  C.R.I. is the highest contributor in the country for the
                  projects of EESL (Energy Efficiency Services Limited) to
                  replace the old inefficient pumps with 5 Star rated energy
                  efficient smart pumps with IoT enabled control panel.
                </li>
              </ul>
            </span>
            <img
              src="/2.png"
              className="lg:h-[25rem] lg:w-[48rem] md:h-[19rem] md:w-[36rem]"
            />
            <ul className="pt-2 pl-2">
              <li>
                Government of India has awarded the
                <strong>"National Energy Conservation Award 2018"</strong>. Mr.
                G. Selvaraj, Joint Managing Director of C.R.I. Group received
                the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha &
                Shri. Raj Kumar Singh, Honorable Minister of State.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span className="text-sm font-semibold flex items-center justify-center p-6 pt-10">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </span>
      <div className="flex flex-col items-center justify-center">
        <img
          src="/3.png"
          className="lg:h-[25rem] lg:w-[70rem] md:h-[18rem] md:w-[61rem]"
        />
        <span className="text-sm p-4 font-semibold">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </span>
      </div>
      <div className="w-4/5 mx-auto border-t-2 border-red-600 " />
      <span className="text-sm font-bold flex items-center justify-center p-4">
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </span>
      <div className="flex items-center justify-center text-sm font-semibold">
        <div className="w-full lg:w-1/2 xl:w-1/3 text-center">
          {formattedWords}
        </div>
      </div>
      <div className="flex items-center justify-center text-sm font-semibold pb-4">
        <div className="w-full lg:w-1/2 xl:w-1/3 text-center">
          {formattedWords2}
        </div>
      </div>
      <footer class="ml-3 mr-3 dark:bg-red-600">
        <div class="w-full mx-auto max-w-screen-xl p-4">
          <ul class="flex flex-wrap justify-center items-center mt-3 text-sm font-medium dark:text-white sm:mt-0">
            <li className="flex flex-row gap-2 p-2">
              <img
                src="/phn.png"
                className="h-8 w-8 bg-white border rounded-full"
              />
              <a href="#" class="hover:underline pt-1 me-4 md:me-6">
                Toll free <strong>1800 200 1234</strong>
              </a>
            </li>
            <li className="flex flex-row gap-2 p-2">
              <img
                src="/face.png"
                className="h-8 w-8 bg-white border rounded-full"
              />
              <a
                href="https://www.facebook.com/cripumps" target="_blank"
                class="hover:underline pt-1 me-4 md:me-6"
              >
                www.facebook.com/cripumps
              </a>
            </li>
            <li className="flex flex-row pt-1 gap-2 p-2">
              <img
                src="/net.png"
                className="h-8 w-8 bg-white border rounded-full"
              />
              <a
                href="https://www.crigroups.com/" target="_blank"
                class="hover:underline me-4 md:me-6"
              >
                www.crigroups.com
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
