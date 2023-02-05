import {
	Details,
	Projects,
	Skills,
	Education,
	SavePdfButton,
} from './components'

import './index.css'

function App() {
	return (
		<div className='container mx-auto px-8'>
			<div className='max-w-5xl mx-auto relative pt-[60px] pb-[60px]'>
				<Details />
				<Projects />
				<Skills />
				<Education />
				<SavePdfButton />
			</div>
		</div>
	)
}

export default App
