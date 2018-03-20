### Spinner
```react
<Spinner />
```

### Spinner with children
```react
<Spinner>
  <Heading>Big, big words</Heading>
  <Heading size="h3">And then some smaller words</Heading>
</Spinner>
```

### Full-screen Spinner
```react
frame: true
showSource: true
noSource: true
---
<div style={{ height: 500 }}>
  <Spinner fullScreen />
</div>
```

### API
```table
columns:
  - Property
  - Description
  - Type
  - Default
rows:
  - Property: fullScreen
    Description: whether to display spinner container with position fixed
    Type: boolean
    Default: "false"
  - Property: children
    Description: DOM elements to display below the spinner
    Type: node
```
