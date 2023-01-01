import React, { useState } from "react";

import { Button, Form, Grid, Segment } from "semantic-ui-react";

const LoginScreen = () => {
  const [signUp, setSignUp] = useState(true);
  const Signup = () => {
    return (
      <Form unstackable>
        <Form.Group widths={2}>
          <Form.Input label="First name" placeholder="First name" />
          <Form.Input label="Last name" placeholder="Last name" />
        </Form.Group>
        <Form.Checkbox label="I agree to the Terms and Conditions" />
        <Button type="submit">Submit</Button>
        <Button type="button" primary onClick={() => setSignUp(!signUp)}>
          Login
        </Button>
      </Form>
    );
  };

  const Login = () => {
    const [input, setInput] = useState({ Username: "", password: "" });

    return (
      <>
        <Segment placeholder>
          <Grid columns={2} relaxed="very" stackable>
            <Grid.Column>
              <Form>
                <Form.Input
                  icon="user"
                  iconPosition="left"
                  label={input.Username}
                  placeholder="Username"
                  onChange={(e) =>
                    setInput({ ...input, Username: e.target.value })
                  }
                />
                <Form.Input
                  icon="lock"
                  iconPosition="left"
                  label="Password"
                  type="password"
                  onChange={(e) =>
                    setInput({ ...input, password: e.target.value })
                  }
                />

                <Button content="Login" primary />
              </Form>
            </Grid.Column>
            <Grid.Column verticalAlign="middle">
              <Button
                content="Sign up"
                icon="signup"
                size="big"
                onClick={() => setSignUp(!signUp)}
              />
            </Grid.Column>
          </Grid>
        </Segment>
      </>
    );
  };
  return (
    <div className="loginContainer">{signUp ? <Login /> : <Signup />}</div>
  );
};

export default LoginScreen;
