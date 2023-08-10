import React from "react";
const IMAGE_API="https://image.tmdb.org/t/p/w500";
const setVoteClass=(vote_average)=>{

    if(vote_average>=8){
        return "green";
    }
    else if(vote_average>=6){
        return "orange";
    }
    else{
        return "red";
    }

}
let Movie=({title, poster_path, overview, vote_average})=>{
    return(<>

    <div className="movie">
        <div className="movie-header">

        <img src={IMAGE_API + poster_path} alt={title}/>

        <div className="movie-info">
            <h3>{title}</h3>
            <span className={setVoteClass(vote_average)}>{vote_average}</span>
             </div>

        <div className="movie-over">
            <h2>Overview</h2>
            <p>{overview}</p>
        </div>
        
        
        
        </div>


        </div>

        
    
    
    </>);
}
export{Movie};