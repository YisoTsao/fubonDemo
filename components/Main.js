import { Navbar } from "../components/Navbar";
export function Main({}) {
  return (
    <main className="bg-[url('/images/image_background.svg')] bg-top py-8 px-4 sm:px-16 lg:px-36 bg-cover ">
      <Navbar />

      <div className="text-white text-72px mt-40 font-light">
        <div>Exclusive</div>
        <div>Boutique</div>
        <div>Hotel</div>
        <div className="text-xl py-5">Luxury Boutique Hotel</div>
      </div>

      <div className="flex pb-16">
        <img src="/images/Image_FB.svg" />
        <img className="px-2" src="/images/image_twitter.svg" />
        <img src="/images/Image_IG.svg" />
      </div>

      <div className="flex flex-wrap flex-col xl:flex-row bg-blue-dark text-white p-auto pl-0 2xl:pl-8 w-full 2xl:w-fit font-light rounded-2xl shadow-normal relative">
        <div className="flex flex-col xl:flex-row flex-2">
          <div className="p-8 2xl:pt-7 2xl:pb-2 2xl:pr-16 border-b border-r border-solid border-black">
            <div className="text-sm	opacity-50">ARRIVAL</div>
            <div className="flex items-center">
              <div className="text-6xl">18</div>
              <div className="px-6 whitespace-nowrap">
                <div className="text-lg">Oct, 2019</div>
                <div className="text-sm opacity-50">Friday</div>
              </div>
              <img src="/images/button_onlyDropDown.svg" />
            </div>
          </div>
          <div className="p-8 2xl:pt-7 2xl:pb-2 2xl:pr-16 border-b border-r border-solid border-black">
            <div className="text-sm	opacity-50">ARRIVAL</div>
            <div className="flex items-center">
              <div className="text-6xl">19</div>
              <div className="px-6 whitespace-nowrap">
                <div className="text-lg">Oct, 2019</div>
                <div className="text-sm opacity-50">Saturday</div>
              </div>
              <img src="/images/button_onlyDropDown.svg" />
            </div>
          </div>
        </div>

        <div className="flex flex-2">
          <div className="flex items-center justify-center flex-col flex-1 lg:flex-0 p-8 border-b border-r border-solid border-black">
            <div className="text-sm	opacity-50">ADULTS</div>
            <div className="flex">
              <div className="text-2xl leading-extra-loose">-</div>
              <div className="text-6xl px-2">2</div>
              <div className="text-2xl leading-extra-loose">+</div>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col flex-1 lg:flex-0 p-8 border-b border-r border-solid border-black">
            <div className="text-sm	opacity-50">CHILDREN</div>
            <div className="flex">
              <div className="text-2xl leading-extra-loose">-</div>
              <div className="text-6xl px-2">0</div>
              <div className="text-2xl leading-extra-loose">+</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center p-12 md:p-6">
          <button className="bg-green-light rounded-2xl text-gray-light px-7 py-4">
            CHECK AVAILABILITY
          </button>
        </div>
        <img
          className="absolute arrowDropTransform"
          src="/images/button_dropDown.svg"
        />
      </div>
    </main>
  );
}
