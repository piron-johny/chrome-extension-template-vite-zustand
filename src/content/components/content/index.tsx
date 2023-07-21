import { useEffect } from 'react';
import { useStore } from '../../../store';
if (process.env.NODE_ENV === 'development') {
	import('../../style.css').catch((error) => {
		console.error('Content style ERROR:', error);
	});
}

function ContentComponent() {
	const count = useStore((state) => state.count);
	const increment = useStore((state) => state.increment);
	const decrement = useStore((state) => state.decrement);
	useEffect(() => {
		console.log('content view loaded');
	}, []);

	return (
		<div className="content">
			<h1>Content Component</h1>
			<div>
				<p>Count: {count}</p>
				<div className="btn-wrapper">
					<button className="content-btn" onClick={increment}>
						Increment
					</button>
					<button className="content-btn" onClick={decrement}>
						Decrement
					</button>
				</div>
			</div>
		</div>
	);
}

export default ContentComponent;
