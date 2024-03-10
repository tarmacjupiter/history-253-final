import Link from "next/link"
import "../globals.css"

export default function History() {
    return (
    <div class="flex">
      {/* Left Side of the Screen */}
      <div class="box-border flex-none w-1/3 h-screen bg-tanpink rounded-lg" >
        <div>
          <h1 class="text-6xl text-justify text-textbrown ml-4 pt-3">History</h1>
        </div>
        <hr class="w-5/6 bg-borderwhite h-3 pt-1 rounded-md ml-4 mt-2" />
        <div>
          {/* Description */}
          <p class="text-paragraphtext ml-4 pt-3 mr-4">
            Lorem ipsu
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Phasellus faucibus, massa 
            non accumsan viverra, urna augue blandit 
            ligula, in auctor ipsum neque et sapien. Mauris 
            euismod nisi ut nisi consectetur, et lobortis 
            mauris luctus. Nunc nec aliquet ipsum. Maecenas ornare, 
            dolor nec maximus pellentesque, lacus risus blandit est,
          </p>
        </div>
      </div>

      {/* Right Side of Screen */}
      <div class="flex flex-col bg-graybrown w-screen h-screen">
        <div class="flex justify-center mt-10 overflow-x-hidden">
          <iframe
            width="95%"
            height="500.25rem"
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
