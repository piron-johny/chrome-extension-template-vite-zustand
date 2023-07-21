import React from 'react';
import ReactDOM from 'react-dom';
import ContentComponent from './content';

const anchor = document.createElement('div');
anchor.id = 'content-anchor';
document.body.insertAdjacentElement('beforeend', anchor);

ReactDOM.render(
	<React.StrictMode>
			{document.location.host === '127.0.0.1:5173' ? null : <ContentComponent />}
	</React.StrictMode>,
	document.getElementById('content-anchor')
);