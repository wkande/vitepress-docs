import {
  _ as d,
  o as h,
  c as p,
  d as e,
  w as u,
  a as s,
  b as o,
  t as i,
  e as m,
  r as t,
} from "./app.b352a92c.js";
const x = JSON.parse(
    '{"title":"Airnode implementation","description":"","frontmatter":{"title":"Airnode implementation","docSetName":"Airnode v0.7","folder":"API Providers","basePath":"/airnode/v0.7","tags":null},"headers":[{"level":2,"title":"Statelessness","slug":"statelessness","link":"#statelessness","children":[{"level":3,"title":"Non-idempotent operations","slug":"non-idempotent-operations","link":"#non-idempotent-operations","children":[]}]},{"level":2,"title":"Fully-serverless stack","slug":"fully-serverless-stack","link":"#fully-serverless-stack","children":[]},{"level":2,"title":"Approach to security","slug":"approach-to-security","link":"#approach-to-security","children":[]}],"relativePath":"reference/airnode/latest/intro/implementation.md"}'
  ),
  f = { name: "reference/airnode/latest/intro/implementation.md" },
  y = { id: "frontmatter-title", tabindex: "-1" },
  g = s(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  v = m("", 18);
function b(a, w, _, k, A, T) {
  const n = t("TitleSpan"),
    r = t("VersionWarning"),
    l = t("TocHeader"),
    c = t("TOC");
  return (
    h(),
    p("div", null, [
      e(n, null, { default: u(() => [o(i(a.$frontmatter.folder), 1)]), _: 1 }),
      s("h1", y, [o(i(a.$frontmatter.title) + " ", 1), g]),
      e(r),
      e(l),
      e(c, { class: "table-of-contents", "include-level": [2, 3] }),
      v,
    ])
  );
}
const I = d(f, [["render", b]]);
export { x as __pageData, I as default };
