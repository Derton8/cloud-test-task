import { FC } from 'react';
import '../Form/Form.scss';
import MainForm from '../Form/MainForm/MainForm';
import Header from '../Header/Header';
import './Main.scss';

const Main: FC = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <MainForm />
      </main>
    </>
  );
};

export default Main;
