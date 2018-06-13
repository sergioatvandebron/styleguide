```react
<DashboardMenu>
  <DashboardMenu.Item href="/overzicht" title="Overzicht" active>
    Overzicht
  </DashboardMenu.Item>
  <DashboardMenu.Item href="/laadpassen" title="Laadpassen">
    Laadpassen
  </DashboardMenu.Item>
  <DashboardMenu.Item href="/laadsessies" title="Laadsessies">
    Laadsessies
  </DashboardMenu.Item>
  <DashboardMenu.Item href="/facturen" title="Facturen">
    Facturen
  </DashboardMenu.Item>
  <DashboardMenu.Item href="/gegevens" title="Gegevens">
    Gegevens
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
