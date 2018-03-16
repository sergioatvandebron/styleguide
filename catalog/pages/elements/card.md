### Card
```react
<Grid>
  <Col md={4}>
    <Card>
      My card
    </Card>
  </Col>
</Grid>
```

### Card with shadow
```react
<Grid>
  <Col md={4}>
    <Card shadow>
      My card
    </Card>
  </Col>
</Grid>
```

### API

```table
columns:
  - Property
  - Description
  - Type
  - Default
rows:
  - Property: shadow
    Description: adds a shadow to the card element
    Type: boolean
    Default: "false"
  - Property: className
    Description: css modifier classes
    Type: string
  - Property: children
    Description: children content
    Type: node
```
