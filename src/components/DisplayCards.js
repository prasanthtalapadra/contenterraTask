import React from 'react';
import ReactHtmlParser from 'react-html-parser';


function DisplayCards(props) {

    
    const decodeEntities = (function () {
        let element = document.createElement('div');
        function decodeHTMLEntities(str) {
            if (str && typeof str === 'string') {
                str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
                str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
                element.innerHTML = str;
                str = element.textContent;
                element.textContent = '';
            }
            return str;
        }

        return decodeHTMLEntities;
    })();


    let text = decodeEntities(props.htmlString)

    return (

        <div className="col-lg-6 ">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.heading}</h5>
                    <p className="card-text">{ReactHtmlParser(text)}</p>
                    <p className="card-text">score: {props.score}</p>
                    <p className="card-text">Url : <a href="#" className="card-text">{props.url}</a></p>  
                </div>
            </div>

        </div>

    )
}

export default DisplayCards;