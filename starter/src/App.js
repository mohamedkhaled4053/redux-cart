import CartContainer from './components/CartContainer';
import Modal from './components/modal';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';

function App() {
  let {show} = useSelector(state=> state.modal)
  return (
    <>
      {show &&  <Modal />}
      <Navbar />
      <CartContainer />
    </>
  );
}
export default App;
