import CartContainer from './components/CartContainer';
import Modal from './components/modal';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCartItems } from './features/cart/cartSlice';

function App() {
  let { modal:{show}, cart:{isLoading,error} } = useSelector((state) => state);
  let dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCartItems())
  },[])

  if(isLoading){
    return <div className="loading">
      <h2>loading ...</h2>
    </div>
  }
  if(error){
    return <div className="loading">
      <h2>error ...</h2>
      <button onClick={()=>dispatch(getCartItems())}> try again</button>
    </div>
  }

  return (
    <>
      {show && <Modal />}
      <Navbar />
      <CartContainer />
    </>
  );
}
export default App;
