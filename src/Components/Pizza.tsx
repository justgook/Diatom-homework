import * as React from 'react'
import { Image } from './Image'

export interface PizzaState { flavor: string; }
export interface PizzaProps { name: string; image: string; next: (name: string, flavor: string) => void }

const flavors = [
  { name: 'Cheese', value: 'cheese' },
  { name: 'Mushroom', value: 'mushroom' },
  { name: 'Veggie', value: 'veggie' },
  { name: 'Ham', value: 'ham' },
]

export class Pizza extends React.Component<PizzaProps, PizzaState> {
  state = {
    flavor: ''
  }
  choose = (e: React.FormEvent<HTMLInputElement>) => this.setState({ flavor: e.currentTarget.value })
  render(): null
  render() {
    return [
      this.props.name,
      <Image key='1' />,
      ...flavors.map(i =>
        <label key={i.value}>
          <input
            name={this.props.name}
            type='radio'
            value={i.value}
            onChange={this.choose}
          />
          {i.name}
        </label>
      ),
      <button disabled={!this.state.flavor} key='next' onClick={this.props.next.bind(this, this.props.name, this.state.flavor)}>Order</button>
    ]
  }
}