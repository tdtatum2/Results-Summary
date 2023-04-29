import reactionIcon from './assets/images/icon-reaction.svg';
import memoryIcon from './assets/images/icon-memory.svg';
import verbalIcon from './assets/images/icon-verbal.svg';
import visualIcon from './assets/images/icon-visual.svg';
import './App.scss';

function App() {
  return (
    <div className="container">
      <div className="results-box">
        <p className="results-title">Your Result</p>
        <div className="results-score">
          <span className="score">76</span>
          <p className="out-of">of 100</p>
        </div>
        <p className="results-classification">Great</p>
        <p className="results-percentage">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className="summary-box">
        <p className="summary-title">Summary</p>
        <div className="summary-categories">
          <div className="summary-category reaction-category">
            <div className="category-title">
              <img src={reactionIcon} alt="Reaction Icon (Lightning Bolt)" className="category-icon" />
              <span className="reaction">Reaction</span>
            </div>              
            <p><span className="category-score">80</span> / 100</p>
          </div>
          <div className="summary-category memory-category">
            <div className="category-title">
              <img src={memoryIcon} alt="Memory Icon (Brain)" className="category-icon" />
              <span className="memory">Memory</span>
            </div>            
            <p><span className="category-score">80</span> / 100</p>
          </div>
          <div className="summary-category verbal-category">
            <div className="category-title">
              <img src={verbalIcon} alt="Verbal Icon (Chat Bubble)" className="category-icon" />
              <span className="verbal">Verbal</span>
            </div>            
            <p><span className="category-score">80</span> / 100</p>
          </div>
          <div className="summary-category visual-category">
            <div className="category-title">
              <img src={visualIcon} alt="Visual Icon (Eye)" className="category-icon" />
              <span className="visual">Visual</span>
            </div>
            <p><span className="category-score">80</span> / 100</p>
          </div>
          
          <button className="summary-button">Continue</button>
        </div>
      </div> 
    </div>
      
  );
}

export default App;
