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

export { default as Button } from './components/Button';
export { default as Heading } from './components/Heading';
export { default as Paragraph } from './components/Paragraph';
export { default as Divider } from './components/Divider';
export { default as Input } from './components/Input';
export { default as NumberInput } from './components/NumberInput';
export { default as Switch } from './components/Switch';
export { default as Label } from './components/Label';
export { default as Span } from './components/Span';
export { default as Link } from './components/Link';
export { default as Grid } from './components/Grid';
export { default as Col } from './components/Col';
export { default as Container } from './components/Container';
export { default as List } from './components/List';
export { default as Table } from './components/Table';
export { default as PhoneCard } from './components/PhoneCard';
export { default as Card } from './components/Card';
export { default as Icon } from './components/Icon';
