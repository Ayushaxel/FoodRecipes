import { NavLink } from "react-router-dom";
export function Card({ meal }) {


return (
    <div className="flex justify-center items-center">
      <div className=" w-3/4 mt-5 grid lg:grid-cols-3 gap-10 container p-5 ">
        {!meal ? (
          <p>Searching...</p>
        ) : (
          meal.map((item) => {
            return (
              <div
                className="shadow rounded-lg w-[350px] bg-white flex flex-col items-center"
                key={item.idMeal}
              >
                <img className=" rounded-lg" src={item.strMealThumb} />
                <p className="my-5 text-lg font-bold text-center">
                  {item.strMeal}
                </p>
                <NavLink to={`/${item.idMeal}`}>
                  <button className="bg-yellow-300 px-3 py-2 rounded-lg text-xl my-5 ">
                    Recipe
                  </button>
                </NavLink>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
