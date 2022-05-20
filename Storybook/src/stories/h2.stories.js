import React from 'react';

import H2  from './h2';

export default {

  title: 'H2',
  component: H2,

  parameters: {
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
  },
};



const Template = (args) => <H2 {...args} />;

export const h2Default = Template.bind({});

h2Default.args = {
  
  Text: 'Login',
};


