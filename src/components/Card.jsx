import { NavLink } from "react-router";

const Card = ({ singleData }) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 p-5 border-2 border-[#D1D1D1] rounded-2xl">
      <div className="flex  justify-center md:justify-start">
        <img
          className="w-80 h-40 object-cover rounded-2xl"
          src={singleData.thumbnail}
          alt={singleData.name}
        />
      </div>

      <div className="flex-1">
        <div className="flex flex-wrap gap-2 mb-2">
          <p className="px-3 py-1 text-sm bg-[#e6f4ea] rounded-2xl text-[#09982f] font-medium">
            {singleData.category}
          </p>
          <p className="px-3 py-1 text-sm bg-[#e7f0fc] rounded-2xl text-[#176ae5] font-medium">
            {singleData.frequency}
          </p>
        </div>

        <h1 className="text-xl md:text-2xl font-extrabold text-[#0F0F0F] mb-1">
          {singleData.name}
        </h1>
        <p className="text-sm md:text-base font-medium mb-3 text-[#6f6f6f]">
          Price : {singleData.price}$
        </p>

        <NavLink to={`/Subscription/${singleData.id}`}>
          <button className="w-full text-indigo-600 border border-indigo-600 bg-white hover:bg-indigo-600 hover:text-white transition-colors duration-200 rounded-3xl font-medium py-2">
            View More
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
