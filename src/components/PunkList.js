import React from 'react'
import CollectionCard from './CollectionCard'
import image1 from './../assets/punks/1.jpg'
import image2 from './../assets/punks/2.jpg'
import image3 from './../assets/punks/3.jpg'
import image4 from './../assets/punks/4.jpg'
import image5 from './../assets/punks/5.jpg'
import image6 from './../assets/punks/6.jpg'
import './PunkList.css'



const punkList = [
	{
		id: 0,
		name: 'Bandana Punk',
		traits: 7,
		image: image1,
	},
	{
		id: 1,
		name: 'Gugarna Punk',
		traits: 22,
		image: image2,
	},
	{
		id: 2,
		name: 'Montana Punk',
		traits: 3,
		image: image3,
	},
	{
		id: 3,
		name: 'Kraken Punk',
		traits: 6,
		image: image4,
	},
	{
		id: 4,
		name: 'Zise Punk',
		traits: 1,
		image: image5,
	},
	{
		id: 5,
		name: 'BigBo Punk',
		traits: 9,
		image: image6,
	}

]

function PunkList() {
	return (
		<div>
			<div className='punkListOrder'>
				{punkList.map(punk => (
					<div key={punk.id}>
						<CollectionCard
							id={punk.id}
							name={punk.name}
							traits={punk.traits}
							image={punk.image}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default PunkList
