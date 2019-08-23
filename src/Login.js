import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import App from './App'

class Login extends React.Component {
  state = {
    allWhales: [],
    name: "",
    pass: "",
    LoginOrApp: 0
  }

  componentDidMount() {
    fetch('http://localhost:3000/whales')     //Populate Whales
    .then(res => res.json())
    .then(whaleData => {
      this.setState({
        ...this.state,
        allWhales: whaleData
      })
    })
  }
  handleUser = (e) =>
  {
    this.setState({
      ...this.state,
      name: e.target.value})
  }
  handlePass = (e) =>
  {
    this.setState({pass: e.target.value })
  }

  handleSubmit = (e) =>
  {
    e.preventDefault();

    for (let i=0; i < this.state.allWhales.length; i++) {
      if (this.state.name === this.state.allWhales[i].name) {
        let val = this.state.LoginOrApp;
        if (val === 0) {
          val = 1;
        }
        else if (val === 1) {
          val = 0;
        }
        this.setState({
          ...this.state,
          LoginOrApp: val
        })
      }
    }

    // let val = this.state.LoginOrApp;
    // if (val === 0) {
    //   val = 1;
    // }
    // else if (val === 1) {
    //   val = 0;
    // }
    // this.setState({
    //   ...this.state,
    //   LoginOrApp: val
    // })
  }
  whichToRender = () =>
  {
    if (this.state.LoginOrApp === 0)
    {
      return(
        <div>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='blue' textAlign='center'>
              Log-in to your account
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input onChange = {this.handleUser} fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                <Form.Input
                  onChange = {this.handlePass}
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />

                <Button onClick = {this.handleSubmit} color='blue' fluid size='large'>
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
        </div>
      )
    }
    else
    {
      return(< App />)
    }
  }
  render() {

    return(
      <div>
        {this.whichToRender()}
      </div>
    )
  }
}

export default Login
