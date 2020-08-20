import React from 'react';
import Movie from './Movie.jsx'
const Movielist = (props) =>(
 <div>
     {this.props.movies.map(movie =>
      <Movie movie={movie.title} />  
        ) }
 </div>
)
//Dynamicallly render from an array using the map function
// out map function will return a jsx fragment
// when you import a flike it will be assigned to whatever you 
export default Movielist;