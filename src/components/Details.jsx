export const Details = () => {
	return (
		<div className='flex gap-3 flex-col md:flex-row'>
			<h3 className='font-bold text-slate-400 min-w-[100px]'>Details</h3>
			<div className='md:pl-[50px]'>
				<div className='flex flex-col gap-2'>
					<span className='font-semibold text-slate-500'>Kyiv, Ukraine</span>
					<span className='font-semibold text-slate-500'>
						YevheniiSivukhin@gmail.com
					</span>
				</div>
				<div className='flex flex-col'>
					<h2 className='text-4xl text-slate-800 font-bold pt-10'>
						Yevhenii Sivukhin, Front-end Developer
					</h2>
					<span className='text-lg text-slate-800 font-semibold pt-5'>
						Im looking for a company, where I can acquire new skills and
						professional development.
					</span>
					<span className='text-lg font-medium pt-3'>
						Contact with me via -{' '}
						<a
							className='underline font-semibold hover:bg-slate-300 transition-all'
							target='_blank'
							href='https://t.me/fleffydesign'
						>
							Telegram
						</a>
					</span>
					<span className='text-lg font-medium pt-3'>
						My Code -{' '}
						<a
							className='underline font-semibold hover:bg-slate-300 transition-all'
							target='_blank'
							href='https://github.com/fleffy'
						>
							GitHub
						</a>
					</span>
				</div>
			</div>
		</div>
	)
}
