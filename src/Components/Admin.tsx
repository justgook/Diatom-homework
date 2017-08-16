import * as React from 'react'
import { Login } from './Login'
import { Order } from './Order'
import { OrderProps } from './Order'

export const API = 'http://localhost:3000'

export interface AdminState { error?: string, orders?: OrderProps[], user: string, password: string }

export class Admin extends React.Component<null, AdminState> {
  state: AdminState = {
    orders: null,
    user: '',
    password: '',
    error: null,
  }
  login = (user: string, password: string) =>
    fetch(`${API}/getData`, {
      method: 'POST',
      body: JSON.stringify({ user, password })
    })
      .then(res => {
        if (res.status !== 200) {
          throw Error('Wrong username or password')
        }
        return res.json()
      })
      .then(orders => this.setState({ orders, user, password }))
      .catch(({ message: error }) => this.setState({ error }))

  fulfil = (id: number) =>
    fetch(`${API}/fulfil`, {
      method: 'POST',
      body: JSON.stringify({ user: this.state.user, password: this.state.password, id })
    })
      .then(res => res.json())
      .then(orders => this.setState({ orders }))

  render(): null
  render() {
    const { orders, error } = this.state
    const { fulfil } = this
    return orders === null
      ? <Login next={this.login} error={error} />
      : [
        <h1 key='1'>Orders</h1>,
        orders.map((v, k) => <Order fulfil={fulfil} key={k} {...v} />)
      ]
  }
}