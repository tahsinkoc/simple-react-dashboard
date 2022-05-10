import './App.css';
import Leftbar from './components/Leftbar';
import Topbar from './components/Topbar';
import Content from './components/Content';
import ContentLayout from './components/ContentLayout';

function App() {
  return (
    <div style={{ display: 'flex' }} className="App">
      <Leftbar teacher={false} />
      <div style={{ width: '100%' }}>
        <ContentLayout cType={'group'} teacher={false} />
      </div>
    </div>
  );
}

export default App;
