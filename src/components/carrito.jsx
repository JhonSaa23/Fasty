import React, { useState } from 'react';

function Carrito() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <i className='bx <i bx bx-basket hover:text-comp cursor-pointer' onClick={() => setIsOpen(!isOpen)}></i>

            <div className={`fixed top-0 right-0 bottom-0 w-[400px] bg-[#fff] text-[#000] shadow-2xl transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 grid grid-rows-[auto_1fr_auto]`}>
                
                <h1 className="text-xl font-light p-[14px] border-b border-comp">Carrito</h1>
                
                <div className="overflow-auto">
                    
                    <div className="p-4 text-center text-xl opacity-50">Sin pedidos</div>
                
                </div>
                
                <div className="grid grid-cols-2 gap-4 p-4">
                    
                    <button onClick={() => setIsOpen(false)} className="bg-[#eee] text-black py-2 rounded shadow text-[18px]">Cerrar</button>
                    
                    <button className="bg-comp text-white py-2 rounded shadow text-[18px]">Pagar</button>
                
                </div>
            
            </div>
        
        </div>
    );
}

export default Carrito;