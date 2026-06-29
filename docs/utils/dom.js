/**
 * Helper to create new elements quickly
 *
 * @template {keyof HTMLElementTagNameMap} K
 *
 * @param {K} tag - The HTML tag name to create
 *
 * @param {Object} [props] - Optional DOM properties, attributes, or HTML injection
 * @param {Record<string, string>} [props.attrs] - HTML attributes to set via setAttribute
 * @param {string} [props.html] - Inner HTML string (use with caution)
 * @param {Partial<CSSStyleDeclaration>} [props.style] - Inline styles
 *
 * @returns {HTMLElementTagNameMap[K]} The created HTMLElement
 *
 * Note: other properties on `props` are assigned directly onto the element.
 */
export function el(tag, props, children) {
  const node = document.createElement(tag);

  if (props) {
    const { attrs, html, style, ...domProps } = props;

    Object.assign(node, domProps);

    if (style) {
      for (const [k, v] of Object.entries(style)) {
        if (v === undefined) continue;
        node.style[k] = v;
      }
    }

    if (attrs) {
      for (const [key, value] of Object.entries(attrs)) {
        node.setAttribute(key, value);
      }
    }

    if (html !== undefined) {
      node.innerHTML = html;
    }
  }

  if (children !== undefined) {
    const list = Array.isArray(children) ? children : [children];

    for (const c of list) {
      if (c == null) continue;

      if (typeof c === "string") {
        node.appendChild(document.createTextNode(c));
      } else {
        node.appendChild(c);
      }
    }
  }

  return node;
}
