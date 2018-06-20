### How to use
To use an icon you have to import the `Icon` component and also the `.svg` file.

```code
lang: jsx
---
import { Icon } from 'vandebron-styleguide';
import gearIcon from 'vandebron-styleguide/dist/icons/gear.svg';

<Icon source={gearIcon} />
```

### API

```table
columns:
  - Property
  - Description
  - Type
  - Default
rows:
  - Property: source
    Description: the SVG file content
    Type: string
  - Property: animation
    Description: the type of animation, one of `spin`, `pulse`
    Type: string
```

### Available Icons
Click at the icon that you want to use to copy the importing code to your clipboard.

```react
noSource
---
new ClipboardJS('.catalog-icon', {
  text: function(trigger) {
    const iconName = trigger.querySelector('.icon-name').innerHTML;
    return `import icon from 'vandebron-styleguide/dist/icons/${iconName}';`;
  }
});

<div className="catalog-icons">
  {icons.map((i, idx) => (
    <div className="catalog-icon" key={`icon-${idx}`}>
      <Icon source={i.svg} />
      <span className="icon-name">{i.name}</span>
    </div>
  ))}
</div>
```
