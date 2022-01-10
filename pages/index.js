import { Main } from "./../components/Main";
import { Info } from "../components/Info";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div className="max-w-280 lg:max-w-full">
        <Main />
        <Info />
        <Footer />
      </div>
    </div>
  );
}
