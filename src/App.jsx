import { useState } from 'react';

import './App.css';
import Home from './components/Home';
import Booking from './components/Booking';

const App = () => {
	const [isBooking, setIsBooking] = useState(false);

	return (
		<>
			<div className='container mx-auto flex items-center justify-center min-h-screen max-h-screen'>
				{isBooking ? (
					<Booking setIsBooking={setIsBooking} />
				) : (
					<Home setIsBooking={setIsBooking} />
				)}
			</div>
		</>
	);
};

export default App;
