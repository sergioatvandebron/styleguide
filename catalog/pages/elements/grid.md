### Grid / Col
```react
<Grid>
  <Col md="4">m2-5</Col>
  <Col md="4">md-2</Col>
  <Col md="4">m2-3</Col>
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
  - Property: sm
    Description: column size for small devices
    Type: string
  - Property: md
    Description: column size for medium devices
    Type: string
  - Property: lg
    Description: column size for large devices
    Type: string
```

### Container
```react
frame: true
---
<Container>
  Hello world!
</Container>
```

```react
frame: true
---
<Container fluid>
  Hello world!
</Container>
```

### API

```table
columns:
  - Property
  - Description
  - Type
  - Default
rows:
  - Property: fluid
    Description: the container will use full width
    Type: string
```
