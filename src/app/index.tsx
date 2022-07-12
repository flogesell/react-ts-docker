import { isPropertySignature } from 'typescript';
import '../assets/style/index.css';
import { Greet } from '../components/Greet';
import { Person } from '../components/Person';
import { PersonList } from '../components/personList';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    },
  ]

  return (
    <div className="App">
      <Greet name="Flo" messageCount={20} isLoggedIn={true} />
      <Person name={ personName }/>
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;