import Header from './components/Header';
import './App.css';
import PunkList from './components/PunkList'
import { Main } from './components/Main';



function App() {
  return (
		<div className='app'>
			<Header />
			<Main/>
			<PunkList />
		</div>
	)
}

export default App;
