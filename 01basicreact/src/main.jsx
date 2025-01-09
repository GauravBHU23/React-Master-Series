
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


function Myapp(){
    return(
        <div>
        <h1>Custom app ! chai</h1>
        </div>
    )
}

const anotherElement = (
    <a href="https://google.com" target="_blank">Visit Google</a>
)

const anotherUser = "chai aur code"

const reactElement = React.createElement(
    'a',
    {href : 'https://google.com',target: '_blank'},
    'click me to visit google',
    anotherUser
)
createRoot(document.getElementById('root')).render(

    //<App />
    //anotherElement
    reactElement

)
