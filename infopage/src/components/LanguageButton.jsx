import React from 'react';

import '../App.css';

const LanguageButton = (props) =>{
    return(
        <div className="buttons__language">
            <a href="/">{props.language}</a>
            <img src="/images/language-list.svg" alt="lang"/>
        </div>
    )
}

export default LanguageButton;