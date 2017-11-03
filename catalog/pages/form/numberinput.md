# NumberInput
`NumberInput` represents an HTML `input` element with `type` number and custom `up` and `down` controls.

### Props
Refer to `Input`'s section on props.

### Examples
Default input:
```react
<NumberInput />
```

Input with `step` set:
```react
<NumberInput step={42} />
```

Input with error:
```react
<NumberInput meta={{ touched: true, error: true }} />
```
