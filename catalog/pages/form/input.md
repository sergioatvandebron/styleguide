# Input
`Input` represents an HTML `<input>` element with `type` set to any text type, but not `checkbox` or `radio`.

### A note on props
`Input` will pass all the props down to the underlying element, except for `meta` and `input`, which are common props injected by redux-form's `Field`.
A `className` prop will be added (but not replace) the main input css class.

### Examples
Default input:
```react
<Input />
```

An input with `type` email and a placeholder:
```react
<Input type="email" placeholder="Enter your e-mail" />
```

An input with `read-only` attribute:
```react
<Input readOnly />
```
