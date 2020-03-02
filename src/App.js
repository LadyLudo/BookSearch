import React from 'react';
import './App.css';
import Header from "./Header";
import SearchBar from "./SearchBar";
import Results from "./Results";


class App extends React.Component {
    constructor() {
        super();
        this.state= {
            UserInput: "",
            printType: "all",
            bookType: ""
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
        const APIKey = "AIzaSyCUdYRv1NbX3OWaZeK9hFg2LDpfER5WJlI"
        const filter = this.state.bookType === "" ? "" : `&filter=${this.state.bookType}`
        const url = `https://www.googleapis.com/books/v1/volumes?q=${parsedSearch}&printType=${this.state.printType}${filter}&key=${APIKey}`
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
    handleOptionChange = (event) => {
        console.log("changing option")
        const { name, value} = event.target
        console.log(value)
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
        <div>
          <Header />
          <SearchBar optionChange= {this.handleOptionChange} bookTypeValue= {this.state.bookType}printTypeValue = {this.state.printType} value={this.state.UserInput} search={this.searchAPI} inputChange={this.inputChanged}/>
          <Results info={this.state.bookArray} />
        </div>
        );
    }
}

export default App;
