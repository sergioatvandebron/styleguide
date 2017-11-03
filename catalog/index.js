import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, pageLoader, ReactSpecimen } from "catalog";

import Button from '../src/components/Button';
import Heading from '../src/components/Heading';
import Paragraph from '../src/components/Paragraph';
import Divider from '../src/components/Divider';
import Input from '../src/components/Input';

const imports = {
  Button,
  Heading,
  Paragraph,
  Divider
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
        title: 'Headings',
        content: pageLoader(() => import('./pages/elements/headings.md')),
        imports: imports,
      },
      {
        path: '/elements/divider',
        title: 'Divider',
        content: pageLoader(() => import('./pages/elements/divider.md')),
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
