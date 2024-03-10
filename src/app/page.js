import Link from "next/link"
import "./globals.css"

export default function Home() {
  return (
    <div class="flex">
      {/* Left Side of the Screen */}
      <div class="box-border flex-none w-1/3 h-screen bg-tanpink rounded-lg" >
        <div>
          <h1 class="text-6xl text-justify text-textbrown ml-4 pt-3 font-bold">About</h1>
        </div>
        <hr class="w-5/6 h-3 pt-1 rounded-md ml-4 mt-2" style={{ color: "#A88962" }}/>
        <div>
          {/* Description */}
          <p class="text-paragraphtext ml-4 pt-3 mr-4">
            Our "History 253 Final" project takes you through the firsthand accounts of the <span class="font-bold" style={{color: "#A88962"}}>October 6th War,</span> a conflict that has left indelible marks on its participants and the national conscience of Egypt and Israel. At the heart of this project is the narrative of an <span class="font-bold" style={{color: "#A88962"}}>Egyptian veteran</span> who served <span class="font-bold" style={{color: "#A88962"}}>7 years</span> in the Egyptian military during this conflict, his experiences offer a humanizing view of the war's legacy. From the strategic calculations behind artillery fire to the grueling moments of survival in the blazing desert, this interview provides a raw perspective on the personal cost of war, political pressures, and incarceration
          </p>
          <br />
          <p className="text-paragraphtext ml-4 pt-3 mr-4">
            The <span class="font-bold" style={{color: "#A88962"}}>"Political Landscape"</span> section covers Egypt's political history around the 1900s
          </p>
          <br />
          <p className="text-paragraphtext ml-4 pt-3 mr-4">
            The <span class="font-bold" style={{color: "#A88962"}}>"Analysis"</span> section covers the relevance of this interview in context with <span class="font-bold" style={{color: "#A88962"}}>Global Camps and Prisons</span>
          </p>
        </div>
      </div>

      {/* Right Side of Screen */}
      <div class="flex flex-col bg-graybrown w-screen h-screen">
        <div class="flex justify-center mt-10">
          <iframe
            style={{borderRadius: "45px"}}
            width="95%"
            height="470rem"
            src="https://www.youtube.com/embed/1rysnVdpHPg?controls=1&rel=0"
            allowFullScreen
          >Loading...</iframe>
        </div>

        <div class="flex justify-center mt-10">
          <Link href="/history">
            <button class="button-tab">
              Political Landscape
            </button>
          </Link>

          <Link href="/analysis">
            <button class="button-tab">
              Analysis
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
