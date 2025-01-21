import { useEffect, useState } from "react";
import CardAboutUs from "../components/AboutUsComponent/CardAboutUs";
import { fetchDevData } from "../data/https";
import { dynamicPageTitle } from "../util/util";

export default function About() {
  const [devs, setDevs] = useState([]);
  const [dataNotFetched, setdataNotFetched] = useState(false);
  dynamicPageTitle(window.location.pathname);

  useEffect(() => {
    async function fetchDevs() {
      setdataNotFetched(true);
      try {
        const dev = await fetchDevData();
        setDevs(dev);
      } catch (error) {
        setError({ errorMessage: error.message });
      }
      setdataNotFetched(false);
    }
    fetchDevs();
  }, []);

  return (
    
    <section className="bg-gelo flex flex-wrap justify-center w-[] pb-10 md:b-20">
      <div className="w-full pb-5 md:pb-10 ">
        <h1 className="text-lunar text-center text-[64px] font-bold font-garamond ">
          About <span className="text-abacate">Us</span></h1>
      </div>
      {dataNotFetched ? (
        <p>Fetching data...</p>
      ) : (
        devs.map((dev) => {
          return <CardAboutUs dev={dev} />;
        })
      )}
    </section>
  );
}
