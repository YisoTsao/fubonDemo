export function Footer({}) {
  return (
    <footer className="flex flex-wrap items-center bg-blue-dark text-white pt-16 pb-8 lg:py-24 px-4 md:px-34 font-light">
      <div className="flex-auto flex-wrap">
        <div className="text-6xl">HOTEL</div>
        <div className="flex flex-col lg:flex-row justify-between text-lg">
          <div className="flex">
            <img className="w-4 mr-5" src="/images/image_phone.svg" />
            <div>(4321) 0987-654-320</div>
          </div>

          <div className="flex">
            <img className="w-4 mr-5" src="/images/image_mail.svg" />
            <div>support@hotel.com</div>
          </div>

          <div className="flex">
            <img className="w-4 mr-5" src="/images/image_location.svg" />
            <div className="opacity-50">33 Jaja Park Rd, Yellow, USA</div>
          </div>

          <span className="opacity-50"></span>
        </div>
      </div>
      <div className="w-full md:w-auto flex-wrap px-0 2xl:px-24 my-16 lg:my-0">
        <div className="text-2xl">Subscribe</div>
        <div className="pt-4 pb-2">
          <input
            className="bg-white h-12 p-4 w-full md:w-auto"
            placeholder="Email"
          />
        </div>
        <div className="text-sm opacity-50">No spam. Only profit.</div>
      </div>
    </footer>
  );
}
