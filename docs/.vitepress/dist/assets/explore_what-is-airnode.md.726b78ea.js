import {
  _ as s,
  a as i,
  b as l,
} from "./chunks/api-provider-overview-container.ee22ccd3.js";
import {
  _ as a,
  o as r,
  c as d,
  a as e,
  b as n,
  t as c,
  d as p,
  w as u,
  r as m,
} from "./app.b352a92c.js";
const O = JSON.parse(
    '{"title":"Airnode config.json","description":"","frontmatter":{"title":"Airnode config.json","folder":"Explore","basePath":"/explore","sidebarHeader":"Explore","tags":null},"headers":[],"relativePath":"explore/what-is-airnode.md"}'
  ),
  h = { name: "explore/what-is-airnode.md" },
  _ = { id: "frontmatter-title", tabindex: "-1" },
  g = e(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  f = e(
    "p",
    null,
    [
      n(
        "An Airnode is a first-party oracle that will push off-chain API data to any on-chain requester. It is defined by a "
      ),
      e("a", { href: "/reference/airnode/latest/" }, "config.json"),
      n(" file."),
    ],
    -1
  ),
  b = e(
    "p",
    null,
    [
      n("See the "),
      e("a", { href: "/guides/providers/" }, "Guides"),
      n(
        " section in the API Provider docs to build the necessary files required to deploy an Airnode. The diagrams below illustrate the required components to successfully deploy an Airnode to AWS, GCP or a Docker Container."
      ),
    ],
    -1
  ),
  y = e("p", null, "@tab:AWS", -1),
  A = e("img", { src: s, style: { width: "450px" } }, null, -1),
  x = e(
    "ol",
    null,
    [
      e("li", null, [
        e("p", { class: "diagram-line" }, [
          e("b", null, "config.json"),
          n(
            ": Contains the Airnode's configuration. The OIS object is important as it maps an API to Airnode endpoints."
          ),
        ]),
      ]),
      e("li", null, [
        e("p", { class: "diagram-line", style: { "margin-top": "10px" } }, [
          e("b", null, "secrets.env"),
          n(": Values that should not be exposed in config.json."),
        ]),
      ]),
      e("li", null, [
        e(
          "p",
          { class: "diagram-line", style: { "margin-top": "10px" } },
          "aws.env: AWS credentials required by the Docker deployer image."
        ),
      ]),
      e("li", null, [
        e("p", { class: "diagram-line", style: { "margin-top": "10px" } }, [
          e("b", null, "Docker deployer image"),
          n(": Deploys Airnode using its deploy command."),
        ]),
      ]),
    ],
    -1
  ),
  j = e("p", null, "@tab:GCP", -1),
  w = e("img", { src: i, style: { width: "450px" } }, null, -1),
  D = e(
    "ol",
    null,
    [
      e("li", null, [
        e("p", { class: "diagram-line" }, [
          e("b", null, "config.json"),
          n(
            ": Contains the Airnode's configuration. The OIS object is important as it maps an API to Airnode endpoints."
          ),
        ]),
      ]),
      e("li", null, [
        e("p", { class: "diagram-line", style: { "margin-top": "10px" } }, [
          e("b", null, "secrets.env"),
          n(": Values that should not be exposed in config.json."),
        ]),
      ]),
      e("li", null, [
        e("p", { class: "diagram-line", style: { "margin-top": "10px" } }, [
          e("b", null, "Docker deployer image"),
          n(": Deploys Airnode using its deploy command."),
        ]),
      ]),
    ],
    -1
  ),
  I = e("p", null, "@tab:Container", -1),
  P = e("img", { src: l, style: { width: "450px" } }, null, -1),
  v = e(
    "ol",
    null,
    [
      e("li", null, [
        e("p", { class: "diagram-line" }, [
          e("b", null, "config.json"),
          n(
            ": Contains the Airnode's configuration. The OIS object is important as it maps an API to Airnode endpoints."
          ),
        ]),
      ]),
      e("li", null, [
        e("p", { class: "diagram-line", style: { "margin-top": "10px" } }, [
          e("b", null, "secrets.env"),
          n(": Values that should not be exposed in config.json."),
        ]),
      ]),
      e("li", null, [
        e("p", { class: "diagram-line", style: { "margin-top": "10px" } }, [
          e("b", null, "Docker client image"),
          n(": Deploys Airnode using its deploy command."),
        ]),
      ]),
    ],
    -1
  );
function C(t, S, k, V, T, $) {
  const o = m("tabs");
  return (
    r(),
    d("div", null, [
      e("h1", _, [n(c(t.$frontmatter.title) + " ", 1), g]),
      f,
      b,
      p(o, null, { default: u(() => [y, A, x, j, w, D, I, P, v]), _: 1 }),
    ])
  );
}
const B = a(h, [["render", C]]);
export { O as __pageData, B as default };
