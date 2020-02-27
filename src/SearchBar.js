import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
    render() {
        return(
            <div className="searchBar">
                <label for="searchBar">Search:
                    <input type="text" name="searchBar"/>
                    <button>Search</button>
                </label>
                <br />
                <section className="options">
                    <label for="printType">Print Type:
                        <select name="printType">
                            <option value="all">All</option>
                        </select>
                    </label>
                    <label for="bookType">Book Type:
                        <select name="bookType">
                            <option value="noFilter">No Filter</option>
                        </select>
                    </label>
                </section>
            </div>
        )
    }
}

export default SearchBar