import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, pageLoader, ReactSpecimen } from "catalog";

import {
  Button,
  Heading,
  Paragraph,
  Divider,
  Input,
  NumberInput,
  Switch,
  Label,
  Span,
  Link,
  Grid,
  Col,
  Container,
  List,
  Table,
  PhoneCard,
  Icon,
  SkeletonBodyText,
  SkeletonDisplayText,
  SkeletonCard,
} from '../src';
import checkIcon from '../dist/icons/check.svg';

const pages = [
  {
    path: '/',
    title: 'Introduction',
    content: pageLoader(() => import('./pages/intro.md'))
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
        path: '/constants/text',
        title: 'Text',
        content: pageLoader(() => import('./pages/constants/text.md'))
      },
      {
        path: '/constants/spacing',
        title: 'Spacing',
        content: pageLoader(() => import('./pages/constants/spacing.md'))
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
        imports: { Button, Icon, checkIcon },
      },
      {
        path: '/elements/headings',
        title: 'Typograph',
        content: pageLoader(() => import('./pages/elements/headings.md')),
        imports: {
          Heading,
          Paragraph,
          Span,
          Link
        },
      },
      {
        path: '/elements/divider',
        title: 'Divider',
        content: pageLoader(() => import('./pages/elements/divider.md')),
        imports: { Divider },
      },
      {
        path: '/elements/label',
        title: 'Label',
        content: pageLoader(() => import('./pages/elements/labels.md')),
        imports: { Label },
      },
      {
        path: '/elements/grid',
        title: 'Grid',
        content: pageLoader(() => import('./pages/elements/grid.md')),
        imports: { Grid, Col, Container },
      },
      {
        path: '/elements/list',
        title: 'List',
        content: pageLoader(() => import('./pages/elements/list.md')),
        imports: { List, checkIcon, Icon },
      },
      {
        path: '/elements/table',
        title: 'Table',
        content: pageLoader(() => import('./pages/elements/table.md')),
        imports: { Table },
      },
      {
        path: '/elements/icon',
        title: 'Icon',
        content: pageLoader(() => import('./pages/elements/icons.md')),
        imports: { Icon },
      },
      {
        path: '/elements/skeleton-body-text',
        title: 'SkeletonBodyText',
        content: pageLoader(() => import('./pages/elements/skeleton-body-text.md')),
        imports: { SkeletonBodyText },
      },
      {
        path: '/elements/skeleton-display-text',
        title: 'SkeletonDisplayText',
        content: pageLoader(() => import('./pages/elements/skeleton-display-text.md')),
        imports: { SkeletonDisplayText },
      },
      {
        path: '/elements/skeleton-card',
        title: 'SkeletonCard',
        content: pageLoader(() => import('./pages/elements/skeleton-card.md')),
        imports: { SkeletonCard, SkeletonDisplayText, SkeletonBodyText, Grid, Col },
      }
    ]
  },
  {
    title: 'Components',
    pages: [
      {
        path: '/components/phone-card',
        title: 'PhoneCard',
        content: pageLoader(() => import('./pages/components/phone-card.md')),
        imports: { PhoneCard },
      }
    ]
  }
];

ReactDOM.render(
  <Catalog
    title='Vandebron'
    pages={pages}
    specimens={{
      jsx: props => <ReactSpecimen {...props} />
    }}
    logoSrc="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22320%22%20height%3D%2250%22%20viewBox%3D%220%20-1%20320%2050%22%20enable-background%3D%22new%200%20-1%20320%2050%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M16.712%2035.189l-6.41-20.965h-10.302l11.919%2033.631h9.524l11.98-33.631h-10.303l-6.408%2020.965zm151.136-21.037c-9.532%200-16.412%208.158-16.412%2017.002%200%209.414%207.613%2016.771%2016.58%2016.771%203.217%200%206.316-.971%208.91-2.854%202.65-1.825%204.852-4.563%206.373-8.104h-9.588c-1.127%201.657-2.707%202.97-5.695%202.97-3.666%200-6.824-2.227-7.219-5.59h23.291c.732-5.818-.451-10.897-4.398-15.178-2.934-3.134-7.049-5.017-11.842-5.017zm-6.94%2013.008c.227-1.483%202.145-5.02%206.992-5.02%204.852%200%206.77%203.535%206.992%205.02h-13.984zm-101.853-11.197c-2.173-1.057-4.6-1.648-7.17-1.648-9.133%200-16.539%207.487-16.539%2016.726%200%209.237%207.406%2016.729%2016.539%2016.729%202.57%200%204.997-.595%207.17-1.652.307.962%201.202%201.652%202.248%201.652h7.112v-33.459h-7.112c-1.046%200-1.944.688-2.248%201.652zm-.123%2015.689c-.308%203.67-3.349%206.549-7.047%206.549-3.91%200-7.074-3.211-7.074-7.164%200-3.951%203.166-7.155%207.074-7.155%203.699%200%206.739%202.876%207.047%206.54v1.23zm147.845-17.172c-2.514%200-4.902.569-7.039%201.593v-16.073h-9.48v47.936h7.105c1.059%200%201.938-.688%202.254-1.647%202.166%201.056%204.596%201.647%207.16%201.647%209.145%200%2016.539-7.49%2016.539-16.727%200-9.24-7.392-16.729-16.539-16.729zm0%2023.887c-3.695%200-6.73-2.879-7.039-6.541v-1.23c.311-3.673%203.344-6.547%207.039-6.547%203.916%200%207.092%203.209%207.092%207.161%200%203.95-3.178%207.157-7.092%207.157zm60.768-23.83c-11.324%200-16.764%209.02-16.764%2016.674v.057c0%207.715%205.438%2016.732%2016.764%2016.732s16.764-9.018%2016.764-16.732c0-7.713-5.44-16.731-16.764-16.731zm-.025%2023.83c-3.695%200-6.729-2.879-7.039-6.541v-1.23c.311-3.673%203.344-6.547%207.039-6.547%203.916%200%207.092%203.209%207.092%207.159-.003%203.952-3.176%207.159-7.092%207.159zm-131.53-22.293c-2.139-1.023-4.528-1.592-7.04-1.592-9.147%200-16.542%207.486-16.542%2016.728%200%209.235%207.395%2016.728%2016.542%2016.728%202.563%200%204.995-.595%207.159-1.647.313.961%201.195%201.647%202.254%201.647h7.105v-47.938h-9.479l.001%2016.074zm0%2015.752c-.313%203.662-3.346%206.541-7.04%206.541-3.917%200-7.093-3.207-7.093-7.158s3.176-7.161%207.093-7.161c3.696%200%206.729%202.875%207.04%206.547v1.231zm102.672-15.949c-.314-.962-1.195-1.648-2.254-1.648h-7.105v33.625h9.367v-.002h.121v-18.198c0-3.463%203.357-5.856%207.031-5.856l.547.027v-9.568l-.547-.026c-2.566-.002-4.994.591-7.16%201.646zm73.764-.873c-2.855-.91-5.633-.775-5.633-.775-2.564%200-4.996.592-7.16%201.647-.313-.962-1.195-1.647-2.254-1.647h-7.104v33.771h9.6v-18.346c0-3.846%201.977-5.857%205.262-5.857%204.805%200%205.264%203.857%205.264%205.857v18.346h9.6v-20.303c-.003-3.711-.79-10.642-7.575-12.693zm-213.851%200c-2.856-.91-5.636-.775-5.636-.775-2.564%200-4.994.592-7.159%201.647-.313-.962-1.195-1.647-2.255-1.647h-7.104v33.771h9.601v-18.346c0-3.846%201.976-5.857%205.263-5.857%204.805%200%205.264%203.857%205.264%205.857v18.346h9.599v-20.303c-.002-3.711-.791-10.642-7.573-12.693z%22%2F%3E%3C%2Fsvg%3E"
  />
, document.getElementById('catalog'));
