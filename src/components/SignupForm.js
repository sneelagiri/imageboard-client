import React, { Component } from "react";

export default function SignupForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        name="email"
        onChange={props.onChange}
        value={props.values.email}
        placeholder="email"
      />
      <input
        type="password"
        name="password"
        onChange={props.onChange}
        value={props.values.password}
        placeholder="password"
      />
      <input type="submit" />
    </form>
  );
}
