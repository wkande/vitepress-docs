import {
  o as a,
  c as o,
  a as t,
  b as n,
  t as r,
  d as s,
  u as c,
  V as h,
} from "./app.b352a92c.js";
const m = { id: "frontmatter-title", tabindex: "-1" },
  l = t(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  g = JSON.parse(
    '{"title":"API3 Core Technical Team","description":"","frontmatter":{"title":"API3 Core Technical Team"},"headers":[],"relativePath":"team.md"}'
  ),
  u = { name: "team.md" },
  b = Object.assign(u, {
    setup(y) {
      const e = [
        {
          avatar: "https://www.github.com/yyx990803.png",
          name: "Evan You",
          title: "Creator",
          links: [
            { icon: "github", link: "https://github.com/yyx990803" },
            { icon: "twitter", link: "https://twitter.com/youyuxi" },
          ],
        },
        {
          avatar: "https://www.github.com/yyx990803.png",
          name: "Evan You",
          title: "Creator",
          links: [
            { icon: "github", link: "https://github.com/yyx990803" },
            { icon: "twitter", link: "https://twitter.com/youyuxi" },
          ],
        },
        {
          avatar: "https://www.github.com/yyx990803.png",
          name: "Evan You",
          title: "Creator",
          links: [
            { icon: "github", link: "https://github.com/yyx990803" },
            { icon: "twitter", link: "https://twitter.com/youyuxi" },
          ],
        },
        {
          avatar: "https://www.github.com/yyx990803.png",
          name: "Evan You",
          title: "Creator",
          links: [
            { icon: "github", link: "https://github.com/yyx990803" },
            { icon: "twitter", link: "https://twitter.com/youyuxi" },
          ],
        },
        {
          avatar: "https://www.github.com/yyx990803.png",
          name: "Evan You",
          title: "Creator",
          links: [
            { icon: "github", link: "https://github.com/yyx990803" },
            { icon: "twitter", link: "https://twitter.com/youyuxi" },
          ],
        },
      ];
      return (i, p) => (
        a(),
        o("div", null, [
          t("h1", m, [n(r(i.$frontmatter.title) + " ", 1), l]),
          s(c(h), { size: "small", members: e }),
        ])
      );
    },
  });
export { g as __pageData, b as default };
