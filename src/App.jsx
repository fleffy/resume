import {
	Details,
	Projects,
	Skills,
	LearningNow,
	Education,
	SavePdfButton,
} from './components'

import './index.css'

function App() {
	return (
		<div className='container mx-auto px-8'>
			<div className='max-w-5xl mx-auto relative pt-[100px] pb-[60px]'>
				<Details />
				<Projects />
				<Skills />
				<LearningNow />
				<Education />
				<SavePdfButton />
			</div>
		</div>
	)
}

export default App
