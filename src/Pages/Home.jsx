import { useEffect } from "react";
import Slider from "../components/Slider";
import { ScrollRestoration, useLoaderData } from "react-router";
import Subscriptions from "../components/Subscriptions";
import Service from "../components/Service";
import Contact from "../components/Contact";

const Home = () => {
  const data = useLoaderData();

  useEffect(() => {
    document.title = "Home | Cratezy";
  }, []);

  return (
    <div className="w-11/12 mx-auto">
      <Slider></Slider>
      <Subscriptions data={data}></Subscriptions>
      <Service></Service>
      <Contact></Contact>
      <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default Home;
