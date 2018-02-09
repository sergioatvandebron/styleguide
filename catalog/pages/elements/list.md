### Normal list
```react
<List>
  <List.Item>Item 1</List.Item>
  <List.Item>Item 2</List.Item>
</List>
```

### Unstyled list
```react
<List unstyled>
  <List.Item>Item 1</List.Item>
  <List.Item>Item 2</List.Item>
</List>
```

### List with icons
```react
<List unstyled>
  <List.Item>
    <Icon source={checkIcon} />
    asdsad sadasdasdas
  </List.Item>
  <List.Item>
    <Icon source={checkIcon} />
    asdsad sadasdasdas
  </List.Item>
</List>
```

### API

```table
columns:
  - Property
  - Description
  - Type
  - Default
rows:
  - Property: items
    Description: list items
    Type: array
  - Property: unstyled
    Description: renders list without the bullets
    Type: bool
```
