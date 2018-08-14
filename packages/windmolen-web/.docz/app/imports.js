export const imports = {
  'index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "index" */ 'index.mdx'),
  'components/button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-button" */ 'components/button.mdx'),
}
