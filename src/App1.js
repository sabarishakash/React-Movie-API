import React, { useEffect, useState } from "react";

import { Movie } from "./Movie";
const API_KEY="api_key=7494aefb278038e2bc1012d2c4375bf4";
const BASE_URL ="https://api.themoviedb.org/3";
const FEATURED_API=BASE_URL+"/discover/movie?sort_by=popularity.desc&" + API_KEY;

const SEARCH_API=BASE_URL+"/search/movie?"+API_KEY;

function Sam(){

   const[movies,setMovies]=useState([]);
   const[searchTerm,setSearchTerm]=useState("");
   useEffect(()=>{

    getMovies(FEATURED_API);
   
   },[]);
   const getMovies=(FEATURED_API)=>{

    fetch(FEATURED_API)
    .then((res)=>res.json())
    .then((data)=>{
     
        setMovies(data.results);
    });
   };
   const handleOnSubmit=(e)=>{

    e.preventDefault();
    
   
    if(searchTerm){
        getMovies(SEARCH_API  +"&query="+ searchTerm);
    
    setSearchTerm("");
   }
};
  
   
  
    return(<>


<header>
    <form onSubmit={handleOnSubmit}>
    <input className="search" type="text" placeholder="Search" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}
    />
    </form>
    </header>
    
    <div className="movie-container">
           {movies.map((movie)=> <Movie key={movie.id} {...movie}/>)}
        </div>
    
    
    </>);
}
export{Sam};

