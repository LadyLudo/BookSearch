import React from 'react'
import ResultItem from "./ResultItem";
import './Results.css'

class Results extends React.Component {
    render() {
        return(
            <div className="results">
                <ResultItem />
                <ResultItem />
            </div>
        )
    }
}

export default Results