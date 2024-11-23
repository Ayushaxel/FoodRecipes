import React from 'react'

function SearchInput({setSearch,onClick}) {
    const handleChange=(e)=>{
        setSearch(e.target.value)
    }

  return (
    <>
    <h1 className='text-center text-3xl mt-5 font-bold'>Food Recipe</h1>
    <div className='flex justify-center gap-x-4 pt-5'>
        <input className='px-2 py-3 w-[30rem]  rounded-lg outline-none bg-gray-200' onChange={handleChange} type="text" placeholder="Search for a recipe" />
        <button className='py-3 bg-yellow-300 px-2 rounded-lg' onClick={()=>onClick()}>Search</button>
    </div>
    </>
  )
}

export default SearchInput