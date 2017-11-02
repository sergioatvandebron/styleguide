import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, pageLoader, ReactSpecimen } from "catalog";

import Button from '../src/components/Button';
import Heading from '../src/components/Heading';
import Paragraph from '../src/components/Paragraph';

const imports = {
  Button,
  Heading,
  Paragraph
};

const pages = [
  {
    path: '/',
    title: 'Introduction',
    content: pageLoader(() => import('./pages/INTRO.md')),
    imports: imports,
  },
  {
    title: 'Constants',
    pages: [
      {
        path: '/constants/colors',
        title: 'Colors',
        content: pageLoader(() => import('./pages/COLORS.md'))
      }
    ]
  },
  {
    title: 'Elements',
    pages: [
      {
        path: '/elements/buttons',
        title: 'Buttons',
        content: pageLoader(() => import('./pages/BUTTONS.md')),
        imports: imports,
      },
      {
        path: '/elements/headings',
        title: 'Headings',
        content: pageLoader(() => import('./pages/HEADINGS.md')),
        imports: imports,
      }
    ]
  },
  {
    path: '/components',
    title: 'Components',
    content: pageLoader(() => import('./pages/COMPONENTS.md')),
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
