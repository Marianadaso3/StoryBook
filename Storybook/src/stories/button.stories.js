import React from 'react';
import Button  from './button';


export default {

  title: 'Button',
  component: Button,


  parameters: {
      actions: {
        handles: ['mouseover', 'click .btn'],
      },
    },
};



const Template = (args) => <Button {...args} />;

export const ButtonSubmit = Template.bind({});

ButtonSubmit.args = {
  
  Text: 'Submit',
};




