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

export const A = El("a");
export const Abbr = El("abbr");
export const Address = El("address");
export const Area = El("area");
export const Article = El("article");
export const Aside = El("aside");
export const Audio = El("audio");
export const B = El("b");
export const Base = El("base");
export const Bdi = El("bdi");
export const Bdo = El("bdo");
export const Blockquote = El("blockquote");
export const Body = El("body");
export const Br = El("br");
export const Button = El("button");
export const Canvas = El("canvas");
export const Caption = El("caption");
export const Cite = El("cite");
export const Code = El("code");
export const Col = El("col");
export const Colgroup = El("colgroup");
export const Data = El("data");
export const Datalist = El("datalist");
export const Dd = El("dd");
export const Del = El("del");
export const Details = El("details");
export const Dfn = El("dfn");
export const Dialog = El("dialog");
export const Dir = El("dir");
export const Div = El("div");
export const Dl = El("dl");
export const Dt = El("dt");
export const Em = El("em");
export const Embed = El("embed");
export const Fieldset = El("fieldset");
export const Figcaption = El("figcaption");
export const Figure = El("figure");
export const Font = El("font");
export const Footer = El("footer");
export const Form = El("form");
export const Frame = El("frame");
export const Frameset = El("frameset");
export const H1 = El("h1");
export const H2 = El("h2");
export const H3 = El("h3");
export const H4 = El("h4");
export const H5 = El("h5");
export const H6 = El("h6");
export const Head = El("head");
export const Header = El("header");
export const Hgroup = El("hgroup");
export const Hr = El("hr");
export const Html = El("html");
export const I = El("i");
export const Iframe = El("iframe");
export const Img = El("img");
export const Input = El("input");
export const Ins = El("ins");
export const Kbd = El("kbd");
export const Label = El("label");
export const Legend = El("legend");
export const Li = El("li");
export const Link = El("link");
export const Main = El("main");
export const Map = El("map");
export const Mark = El("mark");
export const Marquee = El("marquee");
export const Menu = El("menu");
export const Meta = El("meta");
export const Meter = El("meter");
export const Nav = El("nav");
export const Noscript = El("noscript");
export const Object = El("object");
export const Ol = El("ol");
export const Optgroup = El("optgroup");
export const Option = El("option");
export const Output = El("output");
export const P = El("p");
export const Param = El("param");
export const Picture = El("picture");
export const Pre = El("pre");
export const Progress = El("progress");
export const Q = El("q");
export const Rp = El("rp");
export const Rt = El("rt");
export const Ruby = El("ruby");
export const S = El("s");
export const Samp = El("samp");
export const Script = El("script");
export const Section = El("section");
export const Select = El("select");
export const Slot = El("slot");
export const Small = El("small");
export const Source = El("source");
export const Span = El("span");
export const Strong = El("strong");
export const Style = El("style");
export const Sub = El("sub");
export const Summary = El("summary");
export const Sup = El("sup");
export const Table = El("table");
export const Tbody = El("tbody");
export const Td = El("td");
export const Template = El("template");
export const Textarea = El("textarea");
export const Tfoot = El("tfoot");
export const Th = El("th");
export const Thead = El("thead");
export const Time = El("time");
export const Title = El("title");
export const Tr = El("tr");
export const Track = El("track");
export const U = El("u");
export const Ul = El("ul");
export const Video = El("video");
export const Wbr = El("wbr");
