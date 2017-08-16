import * as React from 'react'

export enum Payment {
  cash = 1,
  card,
}

export interface InfoProps {
  next: (first: string,
    last: string,
    address: string,
    payment: Payment) => void
}
export interface InfoState {
  first: string
  last: string
  address: string
  payment: Payment
}

export class Credentials extends React.Component<InfoProps, InfoState> {
  state = {
    first: '',
    last: '',
    address: '',
    payment: Payment.cash,
  }

  render(): null
  render() {
    const { first, last, address, payment } = this.state
    return [
      <h1 key='title'>Your info</h1>,
      <label key='1'>
        First name
        <input type='text' value={first} onChange={({ currentTarget: { value: first } }) => this.setState({ first })} />
      </label>,
      <label key='2'>
        Last name
        <input type='text' value={last} onChange={({ currentTarget: { value: last } }) => this.setState({ last })} />
      </label>,
      <label key='3'>
        Address
        <input type='text' value={address} onChange={({ currentTarget: { value: address } }) => this.setState({ address })} />
      </label>,
      <div key='4'>
        Payment
        <label>
          Cash
          <input type='radio' checked={payment === Payment.cash} onChange={() => this.setState({ payment: Payment.cash })} />
        </label>
        <label>
          Card
          <input type='radio' checked={payment === Payment.card} onChange={() => this.setState({ payment: Payment.card })} />
        </label>
      </div>,
      <button disabled={!first || !last || !address} key='next' onClick={this.props.next.bind(this, first, last, address, payment)}>Order</button>
    ]
  }
}