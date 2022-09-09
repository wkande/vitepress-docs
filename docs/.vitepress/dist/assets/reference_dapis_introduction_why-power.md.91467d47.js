import {
  _ as c,
  o as h,
  c as p,
  d as o,
  w as s,
  a as e,
  b as t,
  t as r,
  r as n,
} from "./app.b352a92c.js";
const u = "/assets/why-power-beacons.985cc4c2.png",
  J = JSON.parse(
    '{"title":"API Providers\u2014Why power dAPIs?","description":"","frontmatter":{"title":"API Providers\u2014Why power dAPIs?","folder":"Introduction"},"headers":[{"level":2,"title":"Get started with API3","slug":"get-started-with-api3","link":"#get-started-with-api3","children":[]}],"relativePath":"reference/dapis/introduction/why-power.md"}'
  ),
  _ = { name: "reference/dapis/introduction/why-power.md" },
  f = { id: "frontmatter-title", tabindex: "-1" },
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
  w = e(
    "p",
    null,
    "Third-party oracle solutions whitelabel existing APIs, relay their data as middlemen and extract an amount of rent that reaches billions of dollars in total. This results in a non-transparent, costly service that is open to middlemen attacks and inefficiencies. More importantly, third-party oracle solutions cannibalize revenue that API providers could have generated first-hand on Web3.",
    -1
  ),
  v = e(
    "p",
    null,
    "API3 builds API provider-centric oracle solutions. These services are provided directly by the API provider to the data consumer, with no middlemen. As a result, they enable unmatched security and source transparency in a cost-efficient manner. Cutting out the rent-seeking middlemen in this way allows API providers to monetize their services on Web3 effectively.",
    -1
  ),
  y = t("dAPIs are "),
  P = e("em", null, "first-party", -1),
  A = t(
    ", API provider-centric versions of live data feeds, which are typically used in Web3 applications of financial nature. By directly providing continuously updated streams of off-chain data called "
  ),
  g = e("em", null, "Beacons", -1),
  I = t(
    ", API providers can power dAPIs. For this, the API provider needs to own and operate an "
  ),
  b = t("Airnode"),
  k = t(
    ", which is configured to power Beacons that are the building blocks of dAPIs. API3 builds the solutions that are used in this process, and guides API providers in utilizing them."
  ),
  T = e(
    "p",
    null,
    "API3 operates dAPIs on a number of chains and actively works on building new integrations and business relations. This means the API provider does not need to invest technical or business development resources into this newly-emerging yet lucrative field, or possess any blockchain know-how to reap the benefits.",
    -1
  ),
  x = e("blockquote", null, [e("img", { src: u, width: "350px" })], -1),
  B = e(
    "h2",
    { id: "get-started-with-api3", tabindex: "-1" },
    [
      t("Get started with API3 "),
      e(
        "a",
        {
          class: "header-anchor",
          href: "#get-started-with-api3",
          "aria-hidden": "true",
        },
        "#"
      ),
    ],
    -1
  ),
  $ = e(
    "p",
    null,
    "Join the growing number of API providers working with API3 to provide first-party oracle services. Airnode is designed specifically for API providers to operate, and API3 will always be here to help.",
    -1
  ),
  S = e(
    "p",
    null,
    [t("Sounds appealing? Click "), e("strong", null, "here"), t(" to begin!")],
    -1
  );
function W(i, C, N, z, V, D) {
  const a = n("TitleSpan"),
    d = n("Toc"),
    l = n("router-link");
  return (
    h(),
    p("div", null, [
      o(a, null, { default: s(() => [t(r(i.$frontmatter.folder), 1)]), _: 1 }),
      e("h1", f, [t(r(i.$frontmatter.title) + " ", 1), m]),
      o(d),
      w,
      v,
      e("p", null, [
        y,
        P,
        A,
        g,
        I,
        o(
          l,
          { to: "/reference/airnode/latest/" },
          { default: s(() => [b]), _: 1 }
        ),
        k,
      ]),
      T,
      x,
      B,
      $,
      S,
    ])
  );
}
const q = c(_, [["render", W]]);
export { J as __pageData, q as default };
