import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Admin } from './Components/Admin'


const comp = document.createElement('div')
ReactDOM.render(
    <Admin />,
    comp
)
document.body.appendChild(comp)