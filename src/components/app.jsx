import React from 'react';
import movies from './data.js'
import Movielist from './movielist.jsx'
import Search from './Search.jsx'
import addMovie from './addMovie.jsx'

class App extends React.Component{
    //construtor
        // this where the state for this component goes as well where we inherit props
        //it is also best practice to put function binding
        constructor(props){
            super(props); // inherit props and react methods
            this.state = {
                displayList: this.props.movies,
                query: ''
            };
            //function binding goes here
            this.handleSearch = this.handleSearch.bind(this)
        }


        handleSearch (query){
            this.setState({
                query:query
            }, this.filterList)
        }
        handleMovieAddition (query){
            this.setState({
                name:query
            }, this.filterList)
        }

        filterList(){
            var filter = this.state.displayList.filter(movie => {
                return (movie.title.toLowerCase().includes(this.state.query.toLowerCase())) 
            })            
            this.setState({displayList: filter})
        }


    //lifecycle method(s)
        //this is wherewe put code we want to execute at specific times
        // in a components lifecycle
    // methods
        // this is where we put functions to minipulate this classes state 
    //render
        // this is what react will insert into the DOM whereever we place this component
            // this is comprised primarily of HTML and react components (which themselve contains )
    render() {
        return (
            <div>
                <Search handleSearch={this.handleSearch}/>
                <addMovie handleSearch={this.handleSearch}/>
            <Movielist movies={this.state.displayList}/>
            </div>
        )
    }
}

export default App;