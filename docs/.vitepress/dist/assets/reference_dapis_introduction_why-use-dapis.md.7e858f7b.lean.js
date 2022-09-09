import {
  _ as c,
  o as l,
  c as p,
  d as r,
  w as s,
  a as e,
  b as t,
  t as o,
  e as h,
  r as i,
} from "./app.b352a92c.js";
const k = JSON.parse(
    '{"title":"Developers\u2014Why use dAPIs?","description":"","frontmatter":{"title":"Developers\u2014Why use dAPIs?","sidebarHeader":"dAPIs","folder":"Introduction"},"headers":[],"relativePath":"reference/dapis/introduction/why-use-dapis.md"}'
  ),
  f = { name: "reference/dapis/introduction/why-use-dapis.md" },
  u = { id: "frontmatter-title", tabindex: "-1" },
  m = e(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  y = e(
    "p",
    null,
    "Due to being composed out of first-party data feeds, dAPIs offer security, transparency, cost-efficiency and scalability in a turn-key package.",
    -1
  ),
  _ = e(
    "p",
    null,
    [
      e("strong", null, "Security"),
      t(
        ": Data used to update a first-party data feed is cryptographically signed by the owner of the data. This means that the data that will update a feed cannot be tampered with once it leaves the source. Furthermore, the API providers host a first-party oracle node,"
      ),
    ],
    -1
  ),
  g = t("Airnode"),
  b = h("", 6);
function A(a, v, w, I, P, T) {
  const n = i("TitleSpan"),
    d = i("router-link");
  return (
    l(),
    p("div", null, [
      r(n, null, {
        default: s(() => [t(o(a.$frontmatter.sidebarHeader), 1)]),
        _: 1,
      }),
      e("h1", u, [t(o(a.$frontmatter.title) + " ", 1), m]),
      y,
      _,
      r(
        d,
        { to: "/reference/airnode/latest/" },
        { default: s(() => [g]), _: 1 }
      ),
      b,
    ])
  );
}
const B = c(f, [["render", A]]);
export { k as __pageData, B as default };
