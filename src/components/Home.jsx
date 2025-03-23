import Button from './Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSquareFacebook,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import fomkaLogo from '../assets/fomka.png';

const Home = ({ setIsBooking }) => {
	return (
		<div className='flex flex-col items-center justify-center gap-y-10 outline-2xl bg-neutral-900/60 p-15 md:w-[400px] rounded-2xl  backdrop-blur-2xl'>
			<img
				src={fomkaLogo}
				alt='Fomka Logo'
				className='rounded-4xl w-50 h-50'
			/>

			<Button className='' onClick={() => setIsBooking(true)}></Button>

			<div className='flex gap-x-5'>
				<a
					href='https://www.facebook.com/kaimer.fomkin'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FontAwesomeIcon icon={faSquareFacebook} size='2xl' />
				</a>
				<a
					href='https://www.instagram.com/f0mkin/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FontAwesomeIcon icon={faInstagram} size='2xl' />
				</a>
			</div>

			<h2 className='text-lg md:text-2xl'>Elva | +372 5303 4840</h2>
		</div>
	);
};

export default Home;
