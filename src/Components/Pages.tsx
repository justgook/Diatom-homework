import * as React from 'react'
import { PizzaList } from './PizzaList'
import { OrderDone } from './OrderDone'
import { Credentials, Payment } from './Credentials'


const API = 'http://localhost:3000'

export interface PagesState { name: string; flavor: string, first: string, last: string, address: string, payment: Payment }

export class Pages extends React.Component<null, PagesState> {
  state = { name: '', flavor: '', first: '', last: '', address: '', payment: Payment.cash }
  next1 = (name: string, flavor: string) => this.setState({ name, flavor })
  next2 = (first: string, last: string, address: string, payment: Payment) => {
    fetch(`${API}/addOrder`, {
      method: 'POST',
      body: JSON.stringify({ ...this.state, first, last, address, payment })
    })

    this.setState({ first, last, address, payment })
  }
  render(): null
  render() {
    const { name, flavor, first, last, address, payment } = this.state
    return name && flavor && (!first && !last && !address) // TODO make more readable 
      ? <Credentials next={this.next2} />
      : (first && last && address
        ? <OrderDone />
        : <PizzaList next={this.next1} />)
  }
}