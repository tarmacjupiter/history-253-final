import Link from "next/link"
import "../globals.css"

export default function History() {
    return (
    <div class="flex">
      {/* Left Side of the Screen */}
      <div class="box-border flex-none w-1/3 h-screen bg-tanpink rounded-lg" >
        <div>
          <h1 class="text-6xl text-justify text-textbrown ml-4 pt-3 font-bold">History</h1>
        </div>
        <hr class="w-5/6 h-3 pt-1 rounded-md ml-4 mt-2" style={{ color: "#A88962" }}/>
        <div>
          {/* Description */}
          <p class="text-paragraphtext ml-4 pt-3 mr-4">
            This paper covers Egypt's political history from <span class="font-bold" style={{color: "#A88962"}}>1954 to the present</span>, highlighting the transformative and often turbulent leadership periods from <span class="font-bold" style={{color: "#A88962"}}>Nasser's</span> era of Arab socialism and nationalistic policies, through <span class="font-bold" style={{color: "#A88962"}}>Sadat's</span> peacemaking and economic liberalization, to <span class="font-bold" style={{color: "#A88962"}}>Mubarak's</span> rule marked by economic policies and challenges to human rights, and finally to the current contentions under <span class="font-bold" style={{color: "#A88962"}}>el-Sisi's</span> presidency. It discusses significant events like military coups, wars, and revolutions, emphasizing the impact of these leaders and their policies on Egypt's society, economy, and position within the global community.
          </p>
        </div>
      </div>

      {/* Right Side of Screen */}
      <div class="flex flex-col bg-graybrown w-screen h-screen">
        <div class="flex justify-center mt-10 overflow-x-hidden">
          <iframe
            style={{borderRadius: "45px"}}
            width="95%"
            height="450rem"
            src="https://docs.google.com/document/d/1vhxvarvhhehIWuKBTevs_haNKYOhCtC3_uibKojdAlY?rm=minimal"
            allowFullScreen
          >Loading...</iframe>
        </div>

        <div class="flex justify-center mt-10">
            <Link href="/">
                <button class="button-tab">
                    Home 
                </button>
            </Link>
        </div>
      </div>
    </div>
  );
};
