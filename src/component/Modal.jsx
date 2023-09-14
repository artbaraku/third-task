import { useState } from "react";
import "../styles/Modal.css"

function Modal () {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }
    return (
        <div>
            <div className="btn-showpopup"> 
            <button
            className="btn-modal"
            onClick={toggleModal}>
                show popup                
            </button></div>
           
           {modal && ( 
            <div className="modal">
            <div onClick={toggleModal}
            className="overlay"></div>
            <div className="modal-content">
               <div className="headings">
               <h2>Theme Color</h2>
                <h3>Change Theme</h3>
               </div>
             <div className="container-text"> 
             <div className="left-side">
                   <p>Font Color</p>
                   <p>Background Color</p>
                   <p>Button Color</p>
                   <p>Button Border color</p>
                   <p>Buttons Mouseover Color</p> 
                </div>  
 
                 <div className="right-side">
                  <li>#444444</li>
                <button className="width-btn black"></button>
                   <li>#FFFFFF</li>
                <button className="width-btn white"></button>
                   <li>#2072EF</li>
                <button className="width-btn blue"></button>
                   <li>#2072EF</li>
                <button className="width-btn blue"></button>  
                   <li>#0053D1</li>
                <button className="width-btn bluedarker"></button> 
                 </div>
                
             </div>
                
                  
                <div className="buttons">
                <button className="cancel-modal"
                onClick={toggleModal}>
                    Cancel
                </button> 
                <button className="close-modal"
                onClick={toggleModal}>
                    Save
                </button>  
               </div> 
              
            </div>
            </div>      
           )}    
          



        </div>
    )
}

export default Modal;




