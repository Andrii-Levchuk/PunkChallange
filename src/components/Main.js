import React, { useState, useEffect } from 'react'
import activePunk from './../assets/punks/5.jpg'
import insta from './../assets/owner/instagram.png'
import twitter from './../assets/owner/twitter.png'
import moreIcon from './../assets/owner/more.png'
import './Main.css'

export const Main = ({selectedPunk,pankList}) => {
  // const [activePunk, setActivePunk] = useState(pankList[0])

  // useEffect(() => {
	// 	setActivePunk(pankList[selectedPunk])
	// }, [selectedPunk, pankList])

	return (
		<div className='main'>
			<div className='mainContent'>
				<div className='punkhighlight'>
					<div className='punkContainer'>
						<img className='selectedPunk' src={activePunk} alt='' />
					</div>
				</div>
				<div className='punkDetails' style={{ color: '#fff' }}>
					<div className='title'>Zise Punk</div>
					<span className='itemNumber'> #4</span>
				</div>
				<div className='owner'>
					<div className='ownerImageContainer'>
						<img src={activePunk} alt='' />
					</div>
					<div className='ownerDetails'>
						<div className='ownerNameAndHandle'>
							<div>Andrii.Levchuk</div>
							<div className='ownerHandle'>Just Practice My React Skills</div>
						</div>
						<div className='ownerLink'>
							<img src={insta} alt='' />
						</div>
						<div className='ownerLink'>
							<img src={twitter} alt='' />
						</div>
						<div className='ownerLink'>
							<img src={moreIcon} alt='' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
