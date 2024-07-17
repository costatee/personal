import RainbowText from "./lib/rainbow";
import Intro from "./ui/intro";
import Work from "./ui/work";
import Contact from "./ui/contact";
import PenStrikeHeading from "./ui/pen";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Intro />
      <Work />
      <Contact />
    </main>
  );
}
