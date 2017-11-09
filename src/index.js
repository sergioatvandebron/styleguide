import './index.scss';

if (process.env.NODE_ENV === 'development') {
  Promise.all([
    import('react'),
    import('react-dom'),
    import('./App')
  ])
    .then(([
      React,
      ReactDOM,
      {default: App}
    ]) => {
      ReactDOM.render(<App />, document.getElementById('root'));
    });
}

import Button from './components/Button';
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';
import Divider from './components/Divider';
import Input from './components/Input';
import NumberInput from './components/NumberInput';
import Switch from './components/Switch';
import Label from './components/Label';
import Span from './components/Span';
import Link from './components/Link';
import Grid from './components/Grid';
import Col from './components/Col';
import Container from './components/Container';
import List from './components/List';
import Table from './components/Table';
import PhoneCard from './components/PhoneCard';
import Card from './components/Card';

export {
  Button,
  Heading,
  Paragraph,
  Divider,
  Input,
  NumberInput,
  Switch,
  Span,
  Link,
  Label,
  Grid,
  Col,
  Container,
  List,
  Table,
  PhoneCard,
  Card
}
