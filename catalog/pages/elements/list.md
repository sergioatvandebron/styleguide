### Normal list
```react
<List
  items={[
    { text: 'Item 1' },
    { text: 'Item 2' },
  ]}
/>
```

### Unstyled list
```react
<List
  items={[
    { text: 'Item 1' },
    { text: 'Item 2' },
  ]}
  unstyled
/>
```

### List with icons
```react
<List
  items={[
    {
      text: 'Item 1',
      icon: 'check',
    },
    {
      text: 'Item 2',
      icon: 'close',
    },
    {
      text: 'Item 3',
      icon: 'facebook',
    },
    {
      text: 'Item 4',
      icon: 'instagram',
    },
  ]}
/>
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
