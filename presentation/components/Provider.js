import React, { Fragment } from "react"
import { injectGlobal } from "styled-components"
import DefaultProvider from "mdx-deck/dist/Provider"

injectGlobal`
  code.scroll-content .token-line .token.comment:first-of-type {
    opacity: 0.3;
  }
`

const Provider = props => (
  <Fragment>
    <link rel="stylesheet" href="https://use.typekit.net/rmg3mwa.css" />
    <link rel="stylesheet" href="https://dank.sh/static/dmvendor.css" />
    <DefaultProvider {...props} />
  </Fragment>
);

export default Provider;
