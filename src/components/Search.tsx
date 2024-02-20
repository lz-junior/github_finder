type SearchProps = {
  loadUser: (userName: string)=> Promise<void>;
};

import { BsSearch } from "react-icons/bs";


const Search = ()=> {
  return (
    <div>
      <h2>Search for a user:</h2>
      <p>See your best repositories</p>
      <div>
        <input type="text" placeholder="Enter the user name"/>
        <button><BsSearch/></button>
      </div>
    </div>
  )
}

export default Search;