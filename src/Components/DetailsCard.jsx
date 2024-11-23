import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

function DetailsCard() {
  const mealid = useParams();
  const [mealDetail, setMealDetail] = useState(null);
  const getMealDetails = async () => {
    try {
      // Ensure the full URL is used, with 'https://'
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid.id}`
      );

      // Check for valid response
      if (!response.ok) {
        throw new Error("Failed to fetch meal details");
      }

      const data = await response.json();

      // Handle the response data
      console.log(data);
      setMealDetail(data.meals[0]);
      // Store the fetched data in state
    } catch (error) {
      console.log("errror");
    }
  };
  useEffect(() => {
    getMealDetails();
  }, []);
  console.log(mealDetail);
  return (
    <div className="flex flex-col items-center bg-yellow-300 min-h-screen">
    <h1 className="text-3xl my-5 font-bold">Food Recipe</h1>
    <div className="flex mt-5 justify-center">
      <div className="flex justify-center px-10 gap-x-10">
        <div className="w-full">
          <img 
            className="w-full max-w-[500px] h-auto rounded-lg" 
            src={mealDetail ? mealDetail.strMealThumb : ""} 
            alt={mealDetail ? mealDetail.strMeal : "Meal Image"} 
          />
        </div>
        <div className="w-full max-h-[70vh] overflow-y-auto ">
          <p className="text-2xl">
            {mealDetail ? mealDetail.strInstructions || "No instructions available" : "No instructions available"}
          </p>
        </div>
      </div>
    </div>
  </div>
  

  );
}

export default DetailsCard;
