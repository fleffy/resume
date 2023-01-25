export const LearningNow = () => {
	return (
		<div className='flex gap-3 flex-col md:flex-row pt-[80px]'>
			<h3 className='font-bold text-slate-400 min-w-[100px]'>
				Learning <br></br> Now
			</h3>
			<div className='md:pl-[50px]'>
				<p className='text-start text-slate-800 font-medium pb-5'>
					Technologies that I am currently learning to develop my skills in web
					development
				</p>
				<div className='flex justify-between w-[300px] font-semibold text-slate-800'>
					<ol>
						<li>TypeScript</li>
						<li>Next.Js 13</li>
						<li>Framer Motion</li>
					</ol>
					<ol>
						<li>NodeJS</li>
						<li>tRPC</li>
						<li>Prisma</li>
					</ol>
				</div>
			</div>
		</div>
	)
}
