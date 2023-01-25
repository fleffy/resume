export const SavePdfButton = () => {
	return (
		<button
			onClick={() => window.print()}
			className='px-3 py-1 mb-2 rounded-md text-white font-semibold bg-slate-400 hover:bg-slate-700 transition-all mt-10'
		>
			save pdf
		</button>
	)
}
