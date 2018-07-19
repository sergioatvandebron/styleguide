```react
<DashboardMenu>
  <DashboardMenu.Item active>
    <a href="#/components/dashboard-menu" title="Overzicht">Overzicht</a>
  </DashboardMenu.Item>
  <DashboardMenu.Item>
    <a href="#/components/dashboard-menu" title="Laadpassen">Laadpassen</a>
  </DashboardMenu.Item>
  <DashboardMenu.Item>
    <a href="#/components/dashboard-menu" title="Laadsessies">Laadsessies</a>
  </DashboardMenu.Item>
  <DashboardMenu.Item>
    <a href="#/components/dashboard-menu" title="Facturen">Facturen</a>
  </DashboardMenu.Item>
  <DashboardMenu.Item>
    <a href="#/components/dashboard-menu" title="Gegevens">Gegevens</a>
  </DashboardMenu.Item>
</DashboardMenu>
```

### API

##### DashboardMenu
```table
columns:
  - Property
  - Description
  - Type
  - Default
rows:
  - Property: children
    Description: one or a combination of `DashboardMenu.Item`
    Type: Node
```

##### DashboardMenu.Item
```table
columns:
  - Property
  - Description
  - Type
  - Default
rows:
  - Property: href
    Description: This attribute specifies the URL of the linked resource
    Type: String
  - Property: title
    Description: The title attribute has special semantics on the <link> element
    Type: String
  - Property: active
    Description: This attribute indicates if the menu item is active
    Type: Boolean
    Default: 'false'
  - Property: onClick
    Description: Callback function called on item is clicked
    Type: Function
  - Property: children
    Description: Menu item text
    Type: Node
```
