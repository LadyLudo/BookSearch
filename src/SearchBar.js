import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {

    render() {
        return(
            <div className="searchBar">
                <label htmlFor="searchBar">Search:
                    <input type="text" name="searchBar" value={this.props.value} onChange={(e) => this.props.inputChange(e.target.value)}/>
                    <button onClick={this.props.search}>Search</button>
                </label>
                <br />
                <section className="options">
                    <label htmlFor="printType">Print Type:
                        <select name="printType" value={this.props.printTypeValue} onChange={this.props.optionChange} >
                            <option value="all">All</option>
                            <option value="books">Books</option>
                            <option value="magazines">Magazines</option>
                        </select>
                    </label>
                    <label htmlFor="bookType">Book Type:
                        <select name="bookType" value={this.props.bookTypeValue} onChange={this.props.optionChange}>
                            <option value="noFilter">No Filter</option>
                            <option value="partial">Partial View</option>
                            <option value="full">Full View</option>
                            <option value="free-ebooks">Free E-books</option>
                            <option value="paid-ebooks">Paid E-books</option>
                            <option value="ebooks">All E-books</option>
                        </select>
                    </label>
                </section>
            </div>
        )
    }
}

export default SearchBar