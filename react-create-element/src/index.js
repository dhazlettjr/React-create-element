import React from 'react';
import ReactDOM from 'react-dom';
import '././index.css';
import App from '././App';
import '././App.css';
import registerServiceWorker from '././registerServiceWorker';

let meInReact = 
React.createElement('div', {className: 'me'},
React.createElement('h1', {},'An Awesome Person'),
React.createElement('p', {}, 'Who is learning React'),
React.createElement('ul',{className: 'my-interests'},

[
  React.createElement('li', {},'Javascript'),
  React.createElement('li', {}, 'React'),
  React.createElement('li', {}, 'Movies'),
  React.createElement('li', {}, 'Ice Cream')
]
)
);

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
