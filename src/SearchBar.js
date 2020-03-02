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
                        <select name="printType">
                            <option value="all">All</option>
                        </select>
                    </label>
                    <label htmlFor="bookType">Book Type:
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