import React, { useState, ChangeEvent, MouseEvent, SyntheticEvent } from 'react'

interface Props {
  onClick:(e: SyntheticEvent) => void;
  handleChange: (e:ChangeEvent<HTMLInputElement> ) => void;
  search: string;

};

const Search: React.FC<Props> = ({onClick, handleChange, search}: Props): JSX.Element => {
    
  return (
    <div>
        <input value={search} onChange={(e) => handleChange(e)}></input>
        <button onClick ={(e) => onClick(e) }></button>
    </div>
  )
}

export default Search;