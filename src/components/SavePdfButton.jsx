export const SavePdfButton = () => {
	return (
		<button
			onClick={() => window.print()}
			className='px-3 py-1 mb-2 rounded-md text-white font-semibold bg-indigo-300 hover:bg-indigo-400 mt-10'
		>
			save pdf
		</button>
	)
}
