### Normal list
```react
<Table
  columns={[
    { value: 'Player name' },
    { value: 'Team' },
    { value: 'Nacionality' }
  ]}

  rows={
    [
      {
        cells: [
          { value: 'Neymar' },
          { value: 'PSG' },
          { value: 'Brazilian' }
        ]
      },
      {
        cells: [
          { value: 'Gabriel Jesus' },
          { value: 'Manchester City' },
          { value: 'Brazilian' }
        ]
      },
      {
        cells: [
          { value: 'Cristiano Ronaldo' },
          { value: 'Real Madrid' },
          { value: 'Portuguese' }
        ]
      },
      {
        cells: [
          { value: 'Lionel Messi' },
          { value: 'Barcelona' },
          { value: 'Argentine' }
        ]
      }
    ]
  }

  footer={
    [
      {
        cells: [
          { value: 'Player name' },
          { value: 'Team' },
          { value: 'Nacionality' }
        ]
      }
    ]
  }
/>
```

### Full width
```react
<Table
  full

  columns={[
    { value: 'Player name' },
    { value: 'Team' },
    { value: 'Nacionality' }
  ]}

  rows={
    [
      {
        cells: [
          { value: 'Neymar' },
          { value: 'PSG' },
          { value: 'Brazilian' }
        ]
      },
      {
        cells: [
          { value: 'Gabriel Jesus' },
          { value: 'Manchester City' },
          { value: 'Brazilian' }
        ]
      },
      {
        cells: [
          { value: 'Cristiano Ronaldo' },
          { value: 'Real Madrid' },
          { value: 'Portuguese' }
        ]
      }
    ]
  }
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
