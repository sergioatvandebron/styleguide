### SkeletonCard
```react
<SkeletonCard>
  <SkeletonDisplayText size="extraLarge" full />

  <Grid>
    <Col md={4}>
      <SkeletonDisplayText size="small" full />
    </Col>
    <Col md={4}>
      <SkeletonDisplayText size="small" full />
    </Col>
    <Col md={4}>
      <SkeletonDisplayText size="small" full />
    </Col>
  </Grid>

  <SkeletonBodyText />
</SkeletonCard>
```

### API

```table
columns:
  - Property
  - Description
  - Type
  - Default
rows:
  - Property: className
    Description: css modifier classes
    Type: string
  - Property: children
    Description: children content
    Type: string|node
```
