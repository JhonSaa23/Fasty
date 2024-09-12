import { useState } from 'react'

function Busqueda(){

    const [isopen, setIsopen] = useState(false);
    const [isClose, setIsClose] = useState(false);

    return (
        <>
            <i className='bx bx-search-alt-2 hover:text-comp cursor-pointer' onClick={()=>{setIsopen(true); setIsClose(false)}}></i>

            {isopen && (
                <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-[2px] flex justify-center items-center z-[2]'>
                    <div className='absolute w-full z-[-1] h-full left-0 top-0' onClick={() => { setTimeout(() => { setIsopen(false) }, 700); setIsClose(true); }}></div>
                    <div className={`w-full bg-white flex flex-col z-[1] modal ${isClose ? '' : 'modal-open'} ${isClose ? 'modal-close' : ''}`}>
                        <div className='w-full flex justify-between items-center gap-8 mb-[20px]'>
                            <div className='flex items-center w-full bg-gray-100 py-2 px-4 rounded-[30px] gap-3'>
                                <i className='bx bx-search-alt-2 text-[30px]'></i>
                                <input type="text" className='w-full bg-transparent rounded-lg focus:border-indigo-500 duration-200 text-[20px]' placeholder='¿Que quiero comer hoy?' />
                            </div>
                            <div className='icon-close-modal'>
                                <i className='bx bx-x cursor-pointer text-[30px]' onClick={() => { setTimeout(() => { setIsopen(false) }, 700); setIsClose(true); }}></i>
                            </div>
                        </div>
                        <div className='w-full mb-[6px]'>
                            <h2 className='mb-[2px]'>Hola</h2>
                            <div className='w-full h-[2px] bg-gray-200'></div>
                        </div>
                        <div className='flex w-full mb-[8px] card-search gap-[10px] cursor-pointer'>
                            <div className='flex w-full gap-3 items-center hover:bg-comp hover:text-white p-3 rounded-xl'>
                                <div>
                                    <img className='w-[60px] rounded-[50%]' src="https://multitienda.faugetdigital.shop/imagenes_tiendas/th.jpeg" alt="" />
                                </div>
                                <div>
                                    <h2 className='text-[18px] font-bold'>Prueba Osvaldo</h2>
                                    <p className='text-[15px]' >Pruebita osvaldo</p>
                                </div>
                            </div>
                            <div className='flex w-full gap-5 items-center hover:bg-comp hover:text-white p-3 rounded-xl'>
                                <div>
                                    <img className='w-[60px] rounded-[50%]' src="https://multitienda.faugetdigital.shop/imagenes_tiendas/logo.15021d127bc863b68dcf.png" alt="" />
                                </div>
                                <div>
                                    <h2 className='text-[18px] font-bold transition-none'>Prueba Osvaldo</h2>
                                    <p className='text-[15px] transition-none' >Pruebita osvaldo</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full mb-[15px]'>
                            <h2 className='mb-[2px]'>Productos</h2>
                            <div className='w-full h-[2px] bg-gray-200'></div>
                        </div>
                        <div className='flex w-full justify-center overflow-y-auto'>
                            <div className="w-full grid grid-cols-2 gap-1 cursor-pointer">
                                <div className='w-full flex items-center gap-3 hover:bg-comp hover:text-white p-2 rounded-lg'>
                                <img src='https://multitienda.faugetdigital.shop/imagenes_productos/entrecot.jpg' className="w-28 h-[70px] rounded-xl object-cover"></img>
                                    <div className='flex flex-col'>
                                        <h2 className='text-[18px] font-bold transition-none'>Hamburguesa</h2>
                                        <p className='text-[16px] transition-none'>hola hola</p>
                                    </div>
                                </div>
                                <div className='w-full flex items-center gap-3 hover:bg-comp hover:text-white p-2 rounded-lg'>
                                    <img src='	https://multitienda.faugetdigital.shop/imagenes_productos/Ham%20cheddar%20(1).jpg' className="w-28 h-[70px] rounded-xl object-cover"></img>
                                    <div className='flex flex-col'>
                                        <h2 className='text-[18px] font-bold transition-none'>Hamburguesa</h2>
                                        <p className='text-[16px] transition-none'>hola hola</p>
                                    </div>
                                </div>
                                <div className='w-full flex items-center gap-3 hover:bg-comp hover:text-white p-2 rounded-lg'>
                                <img src='https://multitienda.faugetdigital.shop/imagenes_productos/pizza%20mooz%20(1).jpg' className="w-28 h-[70px] rounded-xl object-cover"></img>
                                    <div className='flex flex-col'>
                                        <h2 className='text-[18px] font-bold transition-none'>Hamburguesa</h2>
                                        <p className='text-[16px] transition-none'>hola hola</p>
                                    </div>
                                </div>
                                <div className='w-full flex items-center gap-3 hover:bg-comp hover:text-white p-2 rounded-lg'>
                                <img src='https://multitienda.faugetdigital.shop/imagenes_productos/pepin%20(1).jpg' className="w-28 h-[70px] rounded-xl object-cover"></img>
                                    <div className='flex flex-col'>
                                        <h2 className='text-[18px] font-bold transition-none'>Hamburguesa</h2>
                                        <p className='text-[16px] transition-none'>hola hola</p>
                                    </div>
                                </div>
                                <div className='w-full flex items-center gap-3 hover:bg-comp hover:text-white p-2 rounded-lg'>
                                <img src='https://multitienda.faugetdigital.shop/imagenes_tiendas/portaa-1620220059886.webp' className="w-28 h-[70px] rounded-xl object-cover"></img>
                                    <div className='flex flex-col'>
                                        <h2 className='text-[18px] font-bold transition-none'>Hamburguesa</h2>
                                        <p className='text-[16px] transition-none'>hola hola</p>
                                    </div>
                                </div>
                                <div className='w-full flex items-center gap-3 hover:bg-comp hover:text-white p-2 rounded-lg'>
                                <img src='https://multitienda.faugetdigital.shop/imagenes_productos/Pizza%20Napo.jpg' className="w-28 h-[70px] rounded-xl object-cover"></img>
                                    <div className='flex flex-col'>
                                        <h2 className='text-[18px] font-bold transition-none'>Hamburguesa</h2>
                                        <p className='text-[16px] transition-none'>hola hola</p>
                                    </div>
                                </div>
                                <div className='w-full flex items-center gap-3 hover:bg-comp hover:text-white p-2 rounded-lg'>
                                <img src='https://multitienda.faugetdigital.shop/imagenes_productos/mollejas%20333.jpg' className="w-28 h-[70px] rounded-xl object-cover"></img>
                                    <div className='flex flex-col'>
                                        <h2 className='text-[18px] font-bold transition-none'>Hamburguesa</h2>
                                        <p className='text-[16px] transition-none'>hola hola</p>
                                    </div>
                                </div>
                                <div className='w-full flex items-center gap-3 hover:bg-comp hover:text-white p-2 rounded-lg'>
                                <img src='https://multitienda.faugetdigital.shop/imagenes_productos/jyq.jpg' className="w-28 h-[70px] rounded-xl object-cover"></img>
                                    <div className='flex flex-col'>
                                        <h2 className='text-[18px] font-bold transition-none'>Hamburguesa</h2>
                                        <p className='text-[16px] transition-none'>hola hola</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Busqueda;