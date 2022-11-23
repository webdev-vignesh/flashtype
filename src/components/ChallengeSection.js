import '../stylesheets/ChallengeSection.css';
import TestContainer from './TestContainer';

const ChallengeSection = (props) => {
    return(
        <div className="challenge-section-container">
            <h1 data-aos='fade-down' className='challenge-section-header'> 
                Take Speed Test now!
            </h1>
            <TestContainer />
        </div>
    )
}

export default ChallengeSection;