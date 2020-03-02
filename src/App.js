import React from 'react';
import './App.css';
import Header from "./Header";
import SearchBar from "./SearchBar";
import Results from "./Results";


class App extends React.Component {
    constructor() {
        super();
        this.state= {
            UserInput: ""
        }
    }
    inputChanged = (value) => {
        this.setState({
            UserInput: value,
            bookArray: []
        })
    }
    searchAPI = () => {
        const searchTerm = this.state.UserInput
        const parsedSearch = encodeURI(searchTerm)
        console.log(parsedSearch)
        const APIKey = "AIzaSyCUdYRv1NbX3OWaZeK9hFg2LDpfER5WJlI"
        const url = `https://www.googleapis.com/books/v1/volumes?q=${parsedSearch}&key=${APIKey}`
        fetch(url)
            .then(result => result.json())
            .then(result => this.displayResults(result))
    }
    displayResults = (results) => {
        console.log(results)
        this.setState({
            bookArray: results.items
        })
    }
    render() {
        return (
        <div>
          <Header />
          <SearchBar value={this.state.UserInput}search={this.searchAPI} inputChange={this.inputChanged}/>
          <Results info={this.state.bookArray} />
        </div>
        );
    }
}

export default App;
