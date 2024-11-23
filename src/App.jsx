import React, { useEffect, useState } from "react";
import SearchInput from "./Components/SearchInput";
import { Card } from "./Components/Card";

function App() {
  const [meal, setMeal] = useState([]);
  const [search, setSearch] = useState("veg"); // Assuming search state is set

  const getMeal = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      if (!response.ok) throw new Error("Error fetching data");
      const data = await response.json();
      setMeal(data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  // Call getMeal when the search state changes
  useEffect(() => {
    getMeal();
  }, []);

  useEffect(() => {
    console.log(meal);
  }, [meal]); // Logs meal every time it gets updated

  const handleClick = () => {
    getMeal();
  };

  return (
    <>
      
        <SearchInput setSearch={setSearch} onClick={handleClick} />
        <Card meal={meal} />
      
    </>
  );
}

export default App;
