import { NavLink } from "react-router-dom";
export function Card({ meal }) {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[1380px] mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 container p-5">
        {/* Show loading text or spinner while data is loading */}
        {!meal ? (
          <p className="text-center text-xl">Searching...</p>
        ) : (
          meal.map((item) => (
            <div
              className="shadow rounded-lg w-full bg-white flex flex-col items-center p-4"
              key={item.idMeal}
            >
              {/* Meal image with responsive size */}
              <img
                className="w-full h-48 object-cover rounded-lg"
                src={item.strMealThumb}
                alt={item.strMeal}
              />
              <p className="my-4 text-lg font-bold text-center">
                {item.strMeal}
              </p>
              <NavLink to={`/${item.idMeal}`}>
                <button className="bg-yellow-300 px-6 py-3 rounded-lg text-xl my-4 hover:bg-yellow-400 transition duration-300 w-full">
                  Recipe
                </button>
              </NavLink>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
