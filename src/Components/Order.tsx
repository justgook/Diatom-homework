import * as React from 'react'

import { Payment } from '../Components/Credentials'

export enum Status {
  progress = 1,
  fulfilled,
}

export interface OrderProps { order_id: string, id: number, name: string, flavor: string, first: string, last: string, address: string, payment: Payment, status: Status }

interface OrderState { loading: boolean }

export class Order extends React.Component<OrderProps & { fulfil: Function }, OrderState> {
  state = {
    loading: false
  }
  fulfil = () => {
    this.setState({ loading: true })
    this.props.fulfil(this.props.id)
  }
  render(): null
  render() {
    const { name, flavor, first, last, address, payment, status, order_id } = this.props
    return (
      <article>
        <span>{name}</span>
        <span>{flavor}</span>
        <span>{first} {last}</span>
        <span>{address}</span>
        <span>{payment === Payment.card ? 'card' : 'cash'}</span>
        <span>{status === Status.progress ? 'In progress' : `Fulfilled (${order_id})`}</span>
        {status === Status.progress &&
          <button disabled={this.state.loading} onClick={this.fulfil}>Fulfil</button>
        }
      </article>
    )
  }
}
