import React from 'react'
import ResultItem from "./ResultItem";
import './Results.css'

class Results extends React.Component {
    createItems= (infoArray) => {
        const results = infoArray.map(book => {
            return(
                <ResultItem
                    key={book.id}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors ? book.volumeInfo.authors[0] : "No Author Listed"}
                    price={book.saleInfo.retailPrice ? book.saleInfo.retailPrice.amount : "Not for Sale"}
                    description={book.volumeInfo.description}
                    imgSource={book.volumeInfo.imageLinks.smallThumbnail}
                />
            )
        })
        return(results)
    }
    render() {
        return(
            <div className="results">
                {this.props.info ? this.createItems(this.props.info) : "No results yet"}
            </div>
        )
    }
}

export default Results