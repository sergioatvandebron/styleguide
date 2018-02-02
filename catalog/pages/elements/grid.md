# Grid

### Vertical align start

```react
frame: true
---
<Grid style={{ height: 100 }} align="start">
  <Col>Col</Col>
  <Col>Col</Col>
</Grid>
```

### Vertical align center

```react
frame: true
---
<Grid style={{ height: 100 }} align="center">
  <Col>Col</Col>
  <Col>Col</Col>
</Grid>
```

### Vertical align end

```react
frame: true
---
<Grid style={{ height: 100 }} align="end">
  <Col>Col</Col>
  <Col>Col</Col>
</Grid>
```

### Horizontal align (start)

```react
frame: true
---
<Grid style={{ height: 100 }} justify="start">
  <Col sm="3">Col</Col>
  <Col sm="3">Col</Col>
</Grid>
```

### Horizontal align (center)

```react
frame: true
---
<Grid style={{ height: 100 }} justify="center">
  <Col sm="3">Col</Col>
  <Col sm="3">Col</Col>
</Grid>
```

### Horizontal align (end)

```react
frame: true
---
<Grid style={{ height: 100 }} justify="end">
  <Col sm="3">Col</Col>
  <Col sm="3">Col</Col>
</Grid>
```

### Horizontal align (around)

```react
frame: true
---
<Grid style={{ height: 100 }} justify="around">
  <Col sm="3">Col</Col>
  <Col sm="3">Col</Col>
</Grid>
```

### Horizontal align (between)

```react
frame: true
---
<Grid style={{ height: 100 }} justify="between">
  <Col sm="3">Col</Col>
  <Col sm="3">Col</Col>
</Grid>
```

### Without gutters
```react
frame: true
---
<Grid gutters={false}>
  <Col md="3">Col</Col>
  <Col md="3">Col</Col>
</Grid>
```

# Col

```react
frame: true
---
<Grid>
  <Col md="4">m2-5</Col>
  <Col md="4">md-2</Col>
  <Col md="4">m2-3</Col>
</Grid>
```

### without props
```react
frame: true
---
<Grid>
  <Col>Col</Col>
  <Col>Col</Col>
</Grid>
```

### Vertical align
```react
frame: true
---
<Grid style={{ height: 100 }}>
  <Col align="start">Col</Col>
  <Col align="center">Col</Col>
  <Col align="end">Col</Col>
</Grid>
```

### Reordering
```react
frame: true
---
<div>
  <Grid>
    <Col>1</Col>
    <Col>2</Col>
    <Col order="first">3</Col>
  </Grid>

  <Grid>
    <Col>1</Col>
    <Col order="2">2</Col>
    <Col order="1">3</Col>
  </Grid>
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
  - Property: sm
    Description: column size for small devices
    Type: string
  - Property: md
    Description: column size for medium devices
    Type: string
  - Property: lg
    Description: column size for large devices
    Type: string
  - Property: order
    Description: column order [`first`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`]
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
