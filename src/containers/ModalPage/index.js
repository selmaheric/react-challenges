import { useState } from 'react';
import './styles.scss';


export default function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);

  const isShownClassname = isOpen ? 'overlay isShown' : 'overlay notShown'

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <div className='modalContainer'>
      <button onClick={openModal}>Open Modal</button>
      <div className={isShownClassname} onClick={() => setIsOpen(false)}>
        <div className='modal'>
          <div>MODAL CONTENT</div>
          <button onClick={() => setIsOpen(false)}>close</button>
        </div>
      </div>
    </div>
  )
}