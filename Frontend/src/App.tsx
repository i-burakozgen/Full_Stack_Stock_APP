import React, { SyntheticEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Components/Card/Card';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './Api/api';

function App() {
  const[search, setSearch] = useState<string>("");
  const[searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const[serverError, setServerError]  = useState<string>("");
    const handleChange = (e:React.ChangeEvent<HTMLInputElement> ) => {
        setSearch(e.target.value);
        console.log(e);
    };
    const onClick = async (e : SyntheticEvent) => {
        const result = await searchCompanies(search);
        if(typeof result === "string"){
          setServerError(result);
        }
        else if(Array.isArray(result.data)){
          setSearchResult(result.data);

        }
        console.log(searchResult);

    };
  return (
    <div className="App">
      <Search onClick={onClick} handleChange={handleChange} search={search}></Search>
      <CardList></CardList>
     
    </div>
  );
}

export default App;
