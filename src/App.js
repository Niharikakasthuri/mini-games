import './App.css'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import EmojiGame from './components/EmojiGame'
import EmojiRulesPage from './components/EmojiRulesPage'
import RockPaperScissors from './components/RockPaperScissors'
import RpsRulesPage from './components/RpsRulesPage'
import MemoryGame from './components/MemoryGame'
import MemoryCardRules from './components/MemoryCardRules'
import MemoryMatrix from './components/MemoryMatrix'
import MemoryGridRules from './components/MemoryGridRules'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/emoji-start" component={EmojiRulesPage} />
      <Route exact path="/emoji" component={EmojiGame} />
      <Route exact path="/rps-start" component={RpsRulesPage} />
      <Route exact path="/rock-paper-scissors" component={RockPaperScissors} />
      <Route exact path="/memory-start" component={MemoryCardRules} />
      <Route exact path="/memory" component={MemoryGame} />
      <Route exact path="/matrix" component={MemoryMatrix} />
      <Route exact path="/grid-start" component={MemoryGridRules} />
    </Switch>
  </>
)

export default App
