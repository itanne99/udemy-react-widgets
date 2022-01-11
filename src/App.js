import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
        title:'What is React?',
        content:'React is a front end js framework'
    },
    {
        title:'Why use React?',
        content:'React is a favorite js library among engineers'
    },
    {
        title:'How to use React?',
        content:'You use react by creating components'
    },
];

export default () => {
    return(
      <div>
          <Accordion items={items}/>
      </div>
    );
}
