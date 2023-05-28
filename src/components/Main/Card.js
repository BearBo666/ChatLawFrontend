
import './Card.css'

import Pic from '../../assets/img/beautiful-img1.svg'

export const Card = () => {
    return (
        <div className='Card'>
            <div className='text'>
                <div className='title'>A few words about us</div>
                <div className='content'>There are many variations of passages of availablebut the majority have suffered alteration in someform,by injected hum randomised words whichdon't look even slightly.</div>
            </div>
            <img className='pic' src={Pic}></img>
        </div>
    )
}