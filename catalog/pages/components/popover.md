This component is a wrapper for [https://react-bootstrap.github.io/components/popovers/](https://react-bootstrap.github.io/components/popovers/)

### Default Popover
```react
<Popover title="Popup title" content="String content">
  <Button theme="primary">Hove me</Button>
</Popover>
```

### Placement
```react
<Popover title="Popup title" content="String content" placement="left">
  <Button theme="primary">Hove me</Button>
</Popover>
```

### Trigger
```react
<Popover title="Popup title" content="String content" trigger="click">
  <Button theme="primary">Click me</Button>
</Popover>
```

### Without title
```react
<Popover content="String content">
  <Button theme="primary">Hover me</Button>
</Popover>
```

### API

```table
columns:
  - Property
  - Description
  - Type
  - Default
rows:
  - Property: placement
    Description: Sets the direction the Popover is positioned towards.
    Type: "one of: 'top', 'right', 'bottom', 'left'"
    Default: 'right'
  - Property: title
    Description: Title content
    Type: string
  - Property: content
    Description: Popover content
    Type: node
  - Property: className
    Description: css modifier classes
    Type: string
  - Property: children
    Description: Element that will trigger the Popover
    Type: node
```
