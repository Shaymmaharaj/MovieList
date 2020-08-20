import ReactDOM from 'react-dom'
import React from 'react'
import App from './components/app.jsx'
import movies from './components/data.js'
import Search from './components/Search.jsx'


ReactDOM.render(<App movies={movies} Search={Search}/>, document.getElementById('app'))
// movies={movies}