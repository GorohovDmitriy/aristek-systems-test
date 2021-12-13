import React from 'react'

import { useDispatch } from 'react-redux'
import { fetchPosts } from './redux/actions/postsAction'

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Container from './components/Container/Container';


function App() {
	const dispatch = useDispatch()

	React.useEffect(() => {
		dispatch(fetchPosts())
	}, [dispatch])

	return (
		<div>
			<Navbar />
			<Sidebar />
			<Container />
		</div>
	);
}

export default App;
