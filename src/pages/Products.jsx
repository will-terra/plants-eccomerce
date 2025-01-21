import Products from "../components/ProductComponents/Products";
import { useLoaderData } from "react-router-dom";
import { queryClient } from "../data/https";
import { fetchPlant } from "../data/https";
import { dynamicPageTitle } from "../util/util";

export default function Product() {
  const plants = useLoaderData();
  dynamicPageTitle(window.location.pathname);

  return (
    <>
      <div className="flex flex-wrap justify-center">
        <Products plants={plants} />
      </div>
    </>
  );
}

export function loader({ params }) {
  const id = params.id;
  return queryClient.fetchQuery({
    queryKey: ["plant"],
    queryFn: () => fetchPlant({ id }),
  });
}
