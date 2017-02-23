import React from 'react';

function leftContentPage(props){
    return(
        <div>                                
            <h1>Left Page</h1>
            <p>This is the left content page</p>
            <button onClick={() => props.setPageContext("interest")}>Interests</button>
            <button onClick={() => props.setPageContext("home")}>Home</button>
            <button onClick={() => props.setPageContext("portfolio")}>Portfolio</button>       
        </div>
    );
}

export default leftContentPage;