import React from 'react'

class AddMovie  extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this)
    }

    handleChange(event){
        this.setState({value:event.target.value})
    }


    submit(event){
        event.preventDefault()
        this.props.handleSearch(this.state.value)
    }
  


    render(){
        return(
            <form>
                <input type='text' value={this.state.value} onChange={this.handleChange}/>
                <input type='submit' value='submit' onClick={this.submit}/>
            </form> 
        )
    }
}

// create a form in react
// forms in react are generally class components by default;

export default AddMovie;