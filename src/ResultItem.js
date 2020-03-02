import React from 'react'
import './ResultItem.css'

function ResultItem(props) {
    return(
        <div className="result">
            <div className="image"><img src={props.imgSource} alt="book" /></div>
            <section>
                <h2>{props.title}</h2>
                <p>Author: {props.author}</p>
                <p>Price: {props.price}</p>
                <p>{props.description}</p>
            </section>
        </div>
    )
}

export default ResultItem