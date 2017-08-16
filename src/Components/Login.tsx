import * as React from 'react'

interface LoginProps { error: string, next: (user: string, password: string) => void }
interface LoginState { user: string, password: string }

export class Login extends React.Component<LoginProps, LoginState> {
  state = {
    password: 'qwerty111',
    user: 'dev@awesomepizza.com',
  }
  render(): null
  render() {
    const { password, user } = this.state
    const { error } = this.props
    return [
      <h1 key='0'>Admin Page</h1>,
      error,
      <input key='1' type='text' value={user} onChange={({ currentTarget: { value: user } }) => this.setState({ user })} />,
      <input key='2' type='password' value={password} onChange={({ currentTarget: { value: password } }) => this.setState({ password })} />,
      <button key='4' onClick={this.props.next.bind(this, user, password)}>Login</button>,
    ]
  }
}
