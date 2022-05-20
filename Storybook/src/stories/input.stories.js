import React from 'react';

import Input  from './input';

export default {

  title: 'Input',
  component: Input,
  parameters: {
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
  },


};


const Template = (args) => <Input {...args} />;

export const inputText = Template.bind({});

inputText.args = {
  
  typeText: 'text',
  Text: 'Username',
};

export const inputPassword = Template.bind({});

inputPassword.args = {
  
  typeText: 'password',
  Text: 'Password',
};
