### Header
```react
  <DashboardHeader />
```

### Header with dropdowns
```react
  <DashboardHeader>
    <DashboardHeaderDropdown title="One dropdown" icon={treeIcon}>
      <DashboardHeaderDropdown.Option caption="One level" handleClick={() => {}} />
      <DashboardHeaderDropdown.Option caption="Two levels" subcaption="With a subcaption" handleClick={() => {}} />
      <DashboardHeaderDropdown.Option
        inactive={true}
        caption="Inactive item"
        subcaption="Inactive item with a subcaption"
        handleClick={() => {}}
      />
    </DashboardHeaderDropdown>

    <DashboardHeaderDropdown title="Two dropdowns" icon={drinksIcon}>
      <DashboardHeaderDropdown.SectionHeader title="This one has a header" />
      <DashboardHeaderDropdown.Option caption="Wow, icons!" subcaption="So cool" icon={gearIcon} handleClick={() => {}} />
    </DashboardHeaderDropdown>
  </DashboardHeader>
```

### Header with notifications
```react
  <DashboardHeader>
    <DashboardHeaderNotifications>
      <DashboardHeaderNotifications.Notification title="You got notifications" close={() => {}}>
        <div>
          One line<br />
          And a second line
        </div>
      </DashboardHeaderNotifications.Notification>
    </DashboardHeaderNotifications>
  </DashboardHeader>
```

### API

##### DashboardHeader
```table
columns:
  - Property
  - Description
  - Type
  - Default
rows:
  - Property: children
    Description: one or a combination of `DashboardHeaderDropdown` and/or `DashboardHeaderNotifications`
    Type: Node
```

##### DashboardHeaderDropdown
```table
columns:
  - Property
  - Description
  - Type
  - Default
rows:
  - Property: icon
    Description: the icon that appears before the dropdown title, passed to `Icon`; note that only the icon is visible on smaller screens.
    Type: String
  - Property: title
    Description: Dropdown title
    Type: String
  - Property: subtitle
    Description: Dropdown subtitle
    Type: String or Number
  - Property: children
    Description: one or a combination of `DashboardHeaderDropdown.Option` or `DashboardHeaderDropdown.SectionHeader`
    Type: Node
```

##### DashboardHeaderDropdown.SectionHeader
```table
columns:
  - Property
  - Description
  - Type
  - Default
rows:
  - Property: title
    Description: text to be shown as header of a section
    Type: Node
```

##### DashboardHeaderDropdown.Option
```table
columns:
  - Property
  - Description
  - Type
  - Default
rows:
  - Property: icon
    Description: the icon that appears before the option title, passed to `Icon`
    Type: String
  - Property: caption
    Description: Option caption
    Type: Node
  - Property: subcaption
    Description: Option subcaption
    Type: String or Number
  - Property: handleClick
    Description: function to be called when an Option is clicked
    Type: Function
```

##### DashboardHeaderNotifications
```table
columns:
  - Property
  - Description
  - Type
  - Default
rows:
  - Property: children
    Description: one or an array of `DashboardHeaderNotifications.Notification`
    Type: Node
```

##### DashboardHeaderNotifications.Notification
```table
columns:
  - Property
  - Description
  - Type
  - Default
rows:
  - Property: title
    Description: the title to be desplayed in the notification card
    Type: Node
  - Property: close
    Description: function called when clickling the X on the card; the close button will be hidden if no function is passed
    Type: Function
  - Property: children
    Description: the contents of the notification
    Type: Node
```
