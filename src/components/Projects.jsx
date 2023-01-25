export const Projects = () => {
	return (
		<div className='flex gap-3 flex-col md:flex-row pt-10'>
			<h3 className='font-bold text-slate-400 min-w-[100px]'>Projects</h3>
			<div className='md:pl-[50px]'>
				<div className='flex flex-col'>
					<h2 className='text-xl text-slate-800 font-bold'>Kanban Board</h2>
					<p className='text-start text-slate-800 font-medium pt-5'>
						This Kanban app was created for developing my skills in Redux. I got
						acquainted with the possibilities of react-beautiful-dnd. This
						library allowed me to work flexibly with drag & drop. I worked with
						Redux and made it sync with localStorage by redux-persist. The
						project also presents interesting functions like archive.
					</p>
					<span className='text-lg font-medium pt-3'>
						<div className='flex gap-3'>
							<a
								className='underline font-semibold hover:bg-slate-300 transition-all'
								target='_blank'
								href='https://kanban-fleffy.vercel.app/'
							>
								View Website
							</a>
							<a
								className='underline font-semibold hover:bg-slate-300 transition-all'
								target='_blank'
								href='https://github.com/fleffy/kanban-board'
							>
								GitHub Repository
							</a>
						</div>
					</span>
				</div>
			</div>
		</div>
	)
}
