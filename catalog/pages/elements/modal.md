### Basic example
```react
state: {isModalVisible: false}
---
<div>
  <Button theme="primary" onClick={() => setState({ isModalVisible: true })}>Show Modal</Button>

  <Modal show={state.isModalVisible} onHide={() => setState({ isModalVisible: false })}>
    <Modal.Header>
      <Modal.Title>Details tarieven</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Paragraph>De jaarprijs is berekend door het leveringstarief per telwerk, de energiebelasting en de opslag duurzame energie bij elkaar op te tellen. Onderstaande bedragen zijn gebasseerd op de tarieven van 2017. Let op: het geschatte termijnbedrag kan afwijken van het uiteindelijke termijnbedrag.</Paragraph>
    </Modal.Body>
  </Modal>
</div>
```

### Small modal
```react
state: {isModalVisible: false}
---
<div>
  <Button theme="primary" onClick={() => setState({ isModalVisible: true })}>Show Modal</Button>

  <Modal show={state.isModalVisible} onHide={() => setState({ isModalVisible: false })} size="small">
    <Modal.Header>
      <Modal.Title>Details tarieven</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Paragraph>De jaarprijs is berekend door het leveringstarief per telwerk, de energiebelasting en de opslag duurzame energie bij elkaar op te tellen. Onderstaande bedragen zijn gebasseerd op de tarieven van 2017. Let op: het geschatte termijnbedrag kan afwijken van het uiteindelijke termijnbedrag.</Paragraph>
    </Modal.Body>
  </Modal>
</div>
```

### Large modal
```react
state: {isModalVisible: false}
---
<div>
  <Button theme="primary" onClick={() => setState({ isModalVisible: true })}>Show Modal</Button>

  <Modal show={state.isModalVisible} onHide={() => setState({ isModalVisible: false })} size="small">
    <Modal.Header>
      <Modal.Title>Details tarieven</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Paragraph>De jaarprijs is berekend door het leveringstarief per telwerk, de energiebelasting en de opslag duurzame energie bij elkaar op te tellen. Onderstaande bedragen zijn gebasseerd op de tarieven van 2017. Let op: het geschatte termijnbedrag kan afwijken van het uiteindelijke termijnbedrag.</Paragraph>
    </Modal.Body>
  </Modal>
</div>
```

### With close button
```react
state: {isModalVisible: false}
---
<div>
  <Button theme="primary" onClick={() => setState({ isModalVisible: true })}>Show Modal</Button>

  <Modal show={state.isModalVisible} onHide={() => setState({ isModalVisible: false })}>
    <Modal.Header closeButton>
      <Modal.Title>Details tarieven</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Paragraph>De jaarprijs is berekend door het leveringstarief per telwerk, de energiebelasting en de opslag duurzame energie bij elkaar op te tellen. Onderstaande bedragen zijn gebasseerd op de tarieven van 2017. Let op: het geschatte termijnbedrag kan afwijken van het uiteindelijke termijnbedrag.</Paragraph>
    </Modal.Body>
  </Modal>
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
  - Property: show
    Description: When true The modal will show itself.
    Type: bool
  - Property: size
    Description: Component size variations
    Type: oneOf `small`, `large`
```
