import * as React from 'react'

export class OrderDone extends React.Component<null, null> {
  render(): null
  render() {
    return [
      <h1 key='1'>Thank you for your order, our operator will get in touch with you shortly</h1>,
      <a key='2' href='/'>redirect link to homepage</a>
    ]
  }
}