import Intro from "./ui/intro";
import Stack from "./ui/stack";
import Contact from "./ui/contact";
import Work from "./ui/work";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex-col">
      <Intro />{/*
      <Work />
      <Contact />
      <Stack /> */}
    </main>
  );
}
