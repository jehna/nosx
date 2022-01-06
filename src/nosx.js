import React from "https://cdn.skypack.dev/react";

const elementProto = new Proxy(
  {},
  {
    get(_, prop) {
      return function (value) {
        this.props[prop] = value;
        return this;
      };
    },
  }
);

export function El(type) {
  return (...children) => {
    const o = React.createElement(type, {}, ...children);
    return globalThis.Object.setPrototypeOf(
      { ...o, props: { ...o.props } },
      elementProto
    );
  };
}

export function MakeEl(...args) {
  const elements = {}
  args.forEach(el=>elements[el] = El(el))
  return elements
}