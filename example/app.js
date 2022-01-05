import { useState } from "https://cdn.skypack.dev/react";
import { Button, Div, H1, H2, P, El } from "https://cdn.skypack.dev/nosx.js";

export default El(() => {
  const [counter, setCounter] = useState(0);
  return Div(
    H1("Hello NoSX!")
      .className("herp derp")
      .style({ color: "red" })
      .id("hello"),
    H2("Magic will happen!"),
    Button("Click me to +1").onClick(() => setCounter(counter + 1)),
    P(`Counter: ${counter}`),
    GreenText("Hello from custom component").style({ fontSize: 15 })
  ).className("App");
});

const GreenText = El(({ children, style }) =>
  Div("Green text: ", ...children).style({ ...style, color: "green" })
);
