import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { cancel } from "../features/modal/modalSlice";

const Modal = () => {
    let dispatch = useDispatch()
    let {show} = useSelector(state=> state.modal)

    function confirm() {
        dispatch(cancel())
        dispatch(clearCart())
    }

    if(!show) return null

    return (
      <aside className='modal-container'>
        <div className='modal'>
          <h4>Remove all items from your shopping cart?</h4>
          <div className='btn-container'>
            <button type='button' className='btn confirm-btn' onClick={confirm}>
              confirm
            </button>
            <button type='button' className='btn clear-btn' onClick={()=>dispatch(cancel())}>
              cancel
            </button>
          </div>
        </div>
      </aside>
    );
  };
  export default Modal;