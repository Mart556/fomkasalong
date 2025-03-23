import { useState } from 'react';

const Booking = ({ setIsBooking }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
	const [service, setService] = useState('');

	const Services = [
		{
			name: 'Fade',
			price: '1 Monster',
		},
		{
			name: 'Buzzcut',
			price: '1 Monster',
		},
		{
			name: 'Kliendi soov',
			price: '2 Monsterit',
		},
		{
			name: 'Soeng koos viisaka teenindusega',
			price: '4 Monsterit',
		},
	];

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch(`https://api.emailjs.com/api/v1.0/email/send`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				service_id: 'service_bzrb91p',
				user_id: '8PbQU-6nk3YWyHgMY',
				template_id: 'template_o972fxp',
				template_params: {
					from_name: name,
					message: `Klient ${name} soovib aega broneerida, ${date} kuupäevaks. Kliendi email on ${email}. Teenus on ${service}.`,
				},
			}),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response;
			})
			.then(() => {
				setIsBooking(false);

				setName('');
				setEmail('');
				setDate('');

				alert('Aeg broneeritud!');
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	return (
		<div className='flex flex-col mx-5 items-center justify-center gap-y-10 outline-2xl bg-neutral-900/60 p-15 md:w-[400px] rounded-2xl backdrop-blur-2xl'>
			<h1 className='text-5xl text-white'>Küsi aega</h1>
			<form onSubmit={handleSubmit} className='flex flex-col gap-y-4'>
				<div className='flex flex-col'>
					<input
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
						placeholder='Täisnimi:'
						className='p-2 rounded-md bg-neutral-800 border-2 border-neutral-700 outline-0'
					/>
				</div>
				<div className='flex flex-col'>
					<input
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						placeholder='Email:'
						className='p-2 rounded-md bg-neutral-800 border-2 border-neutral-700 outline-0'
					/>
				</div>

				<select
					required
					className='p-2 rounded-md bg-neutral-800 border-2 border-neutral-700 outline-0'
					defaultValue={''}
					onChange={(e) => setService(e.target.value)}
				>
					<option value='' disabled selected>
						Teenus:
					</option>
					{Services.map((service, index) => (
						<option key={index} value={service.name}>
							{service.name} - {service.price}
						</option>
					))}
				</select>

				<div className='flex flex-col'>
					<input
						type='date'
						value={date}
						onChange={(e) => setDate(e.target.value)}
						required
						placeholder='Kuupäev:'
						className='p-2 rounded-md bg-neutral-800 border-2 border-neutral-700 outline-0'
					/>
				</div>

				<div className='flex flex-row gap-x-4'>
					<button
						type='button'
						className='mt-4 p-2 bg-red-500 text-white rounded-md w-[50%] cursor-pointer'
						onClick={() => setIsBooking(false)}
					>
						Tagasi
					</button>

					<button
						type='submit'
						className='mt-4 p-2 bg-blue-500 text-white rounded-md w-[50%] cursor-pointer'
					>
						Saada
					</button>
				</div>
			</form>
		</div>
	);
};

export default Booking;
