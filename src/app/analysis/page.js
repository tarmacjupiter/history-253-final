import Link from "next/link"
import "../globals.css"

export default function Analysis() {
    return (
    <div class="flex">
      {/* Left Side of the Screen */}
      <div class="box-border flex-none w-1/3 h-screen bg-tanpink rounded-lg" >
        <div>
          <h1 class="text-6xl text-justify text-textbrown ml-4 pt-3 font-bold">Analysis</h1>
        </div>
        <hr class="w-5/6 h-3 pt-1 rounded-md ml-4 mt-2" style={{ color: "#A88962" }}/>
        <div>
          {/* Description */}
          <p class="text-paragraphtext ml-4 pt-3 mr-4">
            This paper presents an interview analysis with an <span class="font-bold" style={{color: "#A88962"}}>Egyptian soldier </span>who served during the <span class="font-bold" style={{color: "#A88962"}}>October 6th War</span> (Yom Kippur War), highlighting his <span class="font-bold" style={{color: "#A88962"}}>forced</span> military service, <span class="font-bold" style={{color: "#A88962"}}>perilous missions</span>, and the harsh realities of life in a military camp. Through his narrative, the paper explores themes of <span class="font-bold" style={{color: "#A88962"}}>human endurance</span>, the impact of <span class="font-bold" style={{color: "#A88962"}}>political</span> pressures, moments of humanity amidst brutality, and the experiences of political imprisonment and coercion. The soldier's story is interwoven with readings from the class, <span class="font-bold" style={{color: "#A88962"}}>"Global Camps and Prisons"</span>, drawing parallels between his experiences and broader historical contexts of oppression and resilience, such as in Nazi Germany, showcasing the enduring human spirit in the face of adversity.
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
            src="https://docs.google.com/document/d/1_Wes7aDKxoPBdke3tO8Iq7O-ZwD8KjD5DUo0h0Lzsso?rm=minimal"
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
