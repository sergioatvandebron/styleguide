import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, pageLoader, ReactSpecimen } from "catalog";

import Button from '../src/components/Button';
import Heading from '../src/components/Heading';
import Paragraph from '../src/components/Paragraph';
import Divider from '../src/components/Divider';
import Input from '../src/components/Input';
import NumberInput from '../src/components/NumberInput';
import Switch from '../src/components/Switch';
import Label from '../src/components/Label';
import Span from '../src/components/Span';
import Link from '../src/components/Link';
import Grid from '../src/components/Grid';
import Col from '../src/components/Col';
import Container from '../src/components/Container';
import List from '../src/components/List';

const imports = {
  Button,
  Heading,
  Paragraph,
  Divider,
  Span,
  Link,
  Label,
  Grid,
  Col,
  Container,
  List
};

const pages = [
  {
    path: '/',
    title: 'Introduction',
    content: pageLoader(() => import('./pages/intro.md')),
    imports: imports,
  },
  {
    title: 'Constants',
    pages: [
      {
        path: '/constants/colors',
        title: 'Colors',
        content: pageLoader(() => import('./pages/constants/colors.md'))
      },
      {
        path: '/constants/sizes',
        title: 'Sizes',
        content: pageLoader(() => import('./pages/constants/sizes.md'))
      }
    ]
  },
  {
    title: 'Form',
    pages: [
      {
        path: '/form/input',
        title: 'Input',
        content: pageLoader(() => import('./pages/form/input.md')),
        imports: { Input }
      },
      {
        path: '/form/numberinput',
        title: 'NumberInput',
        content: pageLoader(() => import('./pages/form/numberinput.md')),
        imports: { NumberInput }
      },
      {
        path: '/form/switch',
        title: 'Switch',
        content: pageLoader(() => import('./pages/form/switch.md')),
        imports: { Switch } 
      }
    ]
  },
  {
    title: 'Elements',
    pages: [
      {
        path: '/elements/buttons',
        title: 'Buttons',
        content: pageLoader(() => import('./pages/elements/buttons.md')),
        imports: imports,
      },
      {
        path: '/elements/headings',
        title: 'Typograph',
        content: pageLoader(() => import('./pages/elements/headings.md')),
        imports: imports,
      },
      {
        path: '/elements/divider',
        title: 'Divider',
        content: pageLoader(() => import('./pages/elements/divider.md')),
        imports: imports,
      },
      {
        path: '/elements/label',
        title: 'Label',
        content: pageLoader(() => import('./pages/elements/labels.md')),
        imports: imports,
      },
      {
        path: '/elements/grid',
        title: 'Grid',
        content: pageLoader(() => import('./pages/elements/grid.md')),
        imports: imports,
      },
      {
        path: '/elements/list',
        title: 'List',
        content: pageLoader(() => import('./pages/elements/list.md')),
        imports: imports,
      }
    ]
  },
  {
    path: '/components',
    title: 'Components',
    content: pageLoader(() => import('./pages/components/components.md')),
    imports: imports,
  }
];

ReactDOM.render(
  <Catalog
    title='Vandebron'
    pages={pages}
    specimens={{
      jsx: props => <ReactSpecimen {...props} />
    }}
  />
, document.getElementById('catalog'));
