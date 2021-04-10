import Button from "../components/button";
import { Menu } from "../components/menu";

export default function Home() {
  return (
    <div className="mx-10">
      <header className="">
        <Menu />
      </header>
      <h1 className="text-5xl font-bold text-secondary hover:text-red-500 hover:bg-green-600  transition-color duration-300">
        GP Devs Meetup
      </h1>
      <Button title="Click me!" />

      <div className="my-10 bg-primary inline-block flex flex-col max-w-sm">
        <img className="" src="/images/cat.jpg" alt="Cat" />
        <h3 className="text-xl">Simple card</h3>
        <p className="">Lorem ipsum</p>
      </div>
    </div>
  );
}
