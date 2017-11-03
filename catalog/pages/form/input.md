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

Input with `type` email and a placeholder:
```react
<Input type="email" placeholder="Enter your e-mail" />
```

Input with `read-only` attribute:
```react
<Input readOnly />
```

Input with `onChange` handler:
```react
<Input onChange={ev => alert(ev.target.value)} />
```

Input with error:
```react
<Input meta={{ touched: true, error: true }} />
```

Input with error message:
```react
<Input meta={{ touched: true, error: 'Oops! You messed up.' }} />
```

Input with success:
```react
<Input meta={{ touched: true }} />
```
