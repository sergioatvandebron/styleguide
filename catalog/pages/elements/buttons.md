### Theme
```react
<Button theme="primary">Primary button</Button>
```

```react
<Button theme="info">Info button</Button>
```

```react
<Button theme="warning">Warning button</Button>
```

```react
<Button theme="danger">Danger button</Button>
```

```react
<Button theme="success">Success button</Button>
```

```react
<Button theme="facebook">Facebook color button</Button>
```

```react
<Button theme="primary" inverted>Primary button</Button>
```

```react
<Button disabled>Disabled button</Button>
```

### Shape

#### Square
```react
<Button theme="primary" shape="square">
  <Icon source={checkIcon} />
  Hello
</Button>
```

```react
<Button theme="primary" shape="square">
  Hello
  <Icon source={checkIcon} />
</Button>
```

```react
<Button theme="primary" shape="square" size="small">
  <Icon source={checkIcon} />
</Button>
```

#### Circle
```react
<Button theme="primary" shape="circle">
  <Icon source={checkIcon} />
</Button>
```

### Grayscale

```react
<Button theme="primary" shape="square" grayscale>
  <Icon source={checkIcon} />
  Hello
</Button>
```

### Sizes
```react
<Button theme="primary" size="big">Big button</Button>
```

```react
<Button theme="primary" size="small">Small button</Button>
```

```react
<Button theme="primary" size="compact">Compact button</Button>
```

```react
  <Button theme="primary" full>Full button</Button>
```

### Link
Make button act like a link.

```react
<Button theme="primary" href="https://vandebron.nl" target="_blank" link>Big link</Button>
```


### API

```table
columns:
  - Property
  - Description
  - Type
  - Default
rows:
  - Property: theme
    Description: set heading tag `h1`, `h2`, `h3`, `h4`
    Type: string
    Default: h1
  - Property: size
    Description: Button size `compact`, `small`, `big`
    Type: string
  - Property: inverted
    Description: invert colors
    Type: bool
  - Property: className
    Description: sdfdsf
    Type: string
```
