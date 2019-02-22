import React from 'react';
import App from '../src/App'
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import Welcome from './Welcome';

storiesOf('App', module)
  .add('with text', () => (
   <App />
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));
