type SearchProps = {
  loadUser: (userName: string)=> Promise<void>;
};



import { useState } from "react";
import { BsSearch } from "react-icons/bs";



const Search = ({loadUser}: SearchProps)=> {
  const [userName, setUserName] = useState("");

  return (
    <div>
      <h2>Search for a user:</h2>
      <p>See your best repositories</p>
      <div>
        <input 
          type="text" 
          placeholder="Enter the user name"
          onChange={(e)=> setUserName(e.target.value)}/>
        <button onClick={()=> loadUser(userName)}>
          <BsSearch/>
        </button>
      </div>
    </div>
  )
}

export default Search;