import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Pages } from './Components/Pages'

export interface HelloProps { compiler: string; framework: string; }
export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>

const comp = document.createElement('div')
ReactDOM.render(
    <Pages />,
    comp
)
document.body.appendChild(comp)