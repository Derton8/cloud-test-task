import { Navigate, Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import './App.scss';
import CreateForm from '../Form/CreateForm/CreateForm';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route index element={<Main />} />
        <Route path='/create' element={<CreateForm />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  );
};

export default App;
