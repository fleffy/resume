export const Skills = () => {
	return (
		<div className='flex gap-3 flex-col md:flex-row pt-10'>
			<h3 className='font-bold text-slate-400 min-w-[100px]'>Skills</h3>
			<div className='md:pl-[50px]'>
				<div className='flex justify-between w-[300px] font-semibold text-slate-800'>
					<ol>
						<li>React</li>
						<li>JavaScript</li>
						<li>Redux</li>
						<li>Tailwind</li>
						<li>Sanity/Stripe</li>
					</ol>
					<ol>
						<li>HTML & CSS/Sass</li>
						<li>Vite/Webpack</li>
						<li>Git</li>
						<li>VS Code</li>
						<li>Figma/Photoshop</li>
					</ol>
				</div>
			</div>
		</div>
	)
}
