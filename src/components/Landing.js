import '../stylesheets/Landing.css';
import flash from '../images/hero.png';
import Typewriter from 'typewriter-effect';

const Landing = () => {
    return(
        <div className="landing-container">
            <div className='landing-left' data-aos="fade-right">
                <h1 className='landing-header'>Can you type</h1>
                <div className='typewriter-container'>
                    <Typewriter
                        options={{
                            strings: ['Fast?', 'Correct?', 'Quick?'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div className='landing-right'>
                <img data-aos="fade-left" className='landing-image' src={flash} alt='flash' />
            </div>
        </div>
    )
}

export default Landing;