import { Link } from "react-router-dom";

export default function Product({ plant }) {
  const price = parseFloat(plant.price.split("$")[1]);

  const discountPrice = (
    price -
    price * (plant.discountPercentage / 100)
  ).toLocaleString("en-US", { style: "currency", currency: "USD" });

  return (
    <li className="px-2 py-2">
      <div className="max-w-sm rounded-[7px] overflow-hidden shadow-lg">
        <img className="w-full" src={`src/${plant.imgUrl}`} alt=" " />
        <div className="px-6 py-4">
          <div className="text-lunar text-[34px] font-bold font-garamond">
            {plant.name}
          </div>
          <p className="font-raleway text-textgray text-[14px]">
            {plant.subtitle}
          </p>
        </div>
        <div className="px-6 py-4">
          {plant.label.map((label) => {
            return (
              <p className=" text-verdinho border border-verdinho rounded-[100px] bg-[#F6FFF6] inline-flex mr-2 py-1 px-3">
                {label}
              </p>
            );
          })}
          {/* <span className=" text-lunar text-[20px] rounded-full px-3 py-1 font-semibold">
            {plant.price}{" "}
          </span> */}
          <div className="flex flex-row px-3 py-6">
          {" "}
          <p className="text-lunar text-[20px] font-lato font-semibold">{discountPrice}</p>
          {plant.isInSale && (
            <p className="discount-card">
              {plant.price}
            </p>
          )}{" "}
        </div>
        </div>
        <button className="flex justify-center bg-lunar text-white w-full px-6 py-4">
          <Link to={`${plant.id}`}>Know More</Link>
        </button>
      </div>
    </li>
  );
}
