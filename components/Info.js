export function Info() {
  return (
    <section className="flex flex-wrap bg-gray-400 bg-blue-light h-auto py-24 px-4 sm:px-16 lg:px-28 font-light">
      <div className="flex flex-1 flex-col justify-center p-4">
        <div className="text-40px md:text-6xl text-gray-light whitespace-nowrap">
          <div>Luxury Plaza</div>
          <div>Hotel for You</div>
        </div>
        <div className="text-lg py-7 opacity-50">
          <div>Distant orb has power to raise and purify</div>
          <div>our thoughts like a strain of sacred music.</div>
        </div>
        <div className="mt-7 mb-12 px-8 py-3 text-gray-dark border border-solid border-[#3333334d] rounded-2xl w-60">
          <div className="border-gray-dark">ABOUT US</div>
        </div>
      </div>

      <div className="w-full sm:w-auto">
        <div className="relative pb-7/10 h-100 w-full sm:w-142">
          <img
            className="absolute object-cover w-full h-full rounded-t-3xl"
            src="/images/image_item.svg"
          />
        </div>

        <div className="flex h-auto bottom-0 w-full bg-white p-8 rounded-b-3xl">
          <img className="w-20" src="/images/button_player.svg" />
          <div className="items-center p-2 pl-4">
            <div className="text-2xl">Play video</div>
            <div className="text-lg opacity-50">2:34</div>
          </div>
        </div>
      </div>
    </section>
  );
}
