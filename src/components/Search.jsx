import { MagnifyingGlassIcon } from "@heroicons/react/24/outline" 
import { useState ,useEffect } from "react"
import { callAPI } from "../utils/CallApi";
const Search = () => {
  const [suggestions , setSuggestions] = useState(null);
    const [searchTerm , setSearchTerm] = useState("");

    const getSuggestions = () => {
      callAPI(`data/suggestions.json`).then((suggestionResults) => {
        setSuggestions(suggestionResults);
      });
    };
  
  useEffect(() =>{
    getSuggestions();
  }, [])

  return (
    <div className='w-[100%]'>
      <div className='flex items-center h-10 bg-amazonclone-yellow'>
        <select className="p-2 bg-gray-300 text-black text-xs xl:text-sm">
            <option>all</option>
            <option>deals</option>
            <option>Amazon</option>
            <option>Fashion</option>
            <option>Computer</option>
            <option>Home</option>
            <option>Mobile</option>
         </select>
        <input className='flex grow items-center h-[100%] rounded-l text-black' type='text' value={searchTerm}
        onChange={(e)=>{setSearchTerm(e.target.value)}}/>
        <button className="w-[45px]">
            <MagnifyingGlassIcon className="h-[25px] m-auto stroke-slate-900"/>
        </button>
      </div>
      {
        suggestions &&
        <div className="bg-white text-black w-full z-40 absolute">
           {suggestions
            .filter((suggestion) => {
              const currentSearchTerm = searchTerm.toLowerCase();
              const title = suggestion.title.toLowerCase();
              return (
                currentSearchTerm &&
                title.startsWith(currentSearchTerm) &&
                title !== currentSearchTerm
              );
            })
            .slice(0, 10)
            .map((suggestion) => (
              <div
                key={suggestion.id}
                onClick={() => setSearchTerm(suggestion.title)}
              >
                {suggestion.title}
              </div>
            ))}
        </div>
      }
    </div>
  )
}

export default Search
 