import '../stylesheets/TestContainer.css';

const TestContainer = ({words, characters, wpm}) => {
    return(
        <div className="test-container">
            <div className="try-again">
                <h1>This is the test container</h1>
            </div>
        </div>
    )
}

export default TestContainer;