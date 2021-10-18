import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import GifExpertApp from './GifExpertApp';


/*ReactDOM.render(
    <GifExpertApp />,
  document.getElementById('root')
); */

const divRoot = document.querySelector('#root');

ReactDOM.render(<GifExpertApp />, divRoot);

