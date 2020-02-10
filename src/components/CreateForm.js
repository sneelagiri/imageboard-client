import React from "react";

export default function CreateForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        name="title"
        onChange={props.onChange}
        value={props.values.title}
        placeholder="title"
      />
      <input
        type="text"
        name="url"
        onChange={props.onChange}
        value={props.values.url}
        placeholder="url"
      />
      <input type="submit" />
    </form>
  );
}
