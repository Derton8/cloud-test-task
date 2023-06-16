import '../Form/Form.scss';
import MainForm from '../Form/MainForm/MainForm';
import Header from '../Header/Header';
import './Main.scss';

export default function Main() {
  return (
    <>
      <Header />
      <main className='main'>
        <MainForm />
      </main>
    </>
  );
}
