import * as React from 'react'
import { Pizza } from './Pizza'
const pizza = [
  { name: 'Pizza 1', img: '6' },
  { name: 'Pizza 2', img: '5' },
  { name: 'Pizza 3', img: '4' },
  { name: 'Pizza 4', img: '3' },
  { name: 'Pizza 5', img: '2' },
  { name: 'Pizza 6', img: '1' },
]

export interface PizzaListProps { next: (name: string, flavor: string) => void }

export class PizzaList extends React.Component<PizzaListProps, null> {
  render(): null
  render() {
    return [
      <h1 key='title'>Choose the Pizza</h1>,
      pizza.map(i =>
        <article key={i.name}>
          <Pizza name={i.name} image={i.img} next={this.props.next} />
        </article>
      )
    ]
  }
}