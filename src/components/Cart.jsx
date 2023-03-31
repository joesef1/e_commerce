import React,{ useContext ,useState} from 'react'
import { MyContext } from '../context/context-authstate';
// import {signOut} from "firebase/auth";
// import { auth } from "../firebase-config";
import { IoMdClose } from 'react-icons/io';
import  itemsIge  from '../assets/images/vegetables1-4.jpg';
import { motion, AnimatePresence } from 'framer-motion';
// import useOpenNavStore from '../statestore/OpenNavStore';
import useopencartstore from '../statestore/opencartstore';

import { Link, useNavigate  } from 'react-router-dom';


const Cart = () => {

  const currentstate = useopencartstore((state) => state.currentstate)
  const closecart = useopencartstore((state) => state.closecart)
  // const opencart = useopencartstore((state) => state.opencart)
  // const navigate = useNavigate();
  
  
    const variants = {
      open: {
        x: 0,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 40,
        },
      },
      closed: {
        x: '100%',
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 40,
        },
      },
    };
  
    const overlayVariants = {
      visible: {
        opacity: 0.4,
      },
      hidden: {
        opacity: 0,
      },
    };
  

    // 
    
      const [value, setValue] = useState(0);
    
      function decrement() {
        setValue((prevValue) => prevValue - 1);
      }
    
      function increment() {
        setValue((prevValue) => prevValue + 1);
      }
    // 
const [onhover, setOnhover] = useState(false);
const hoveritem = () => {
  setOnhover(true)
}
const unhoveritem = () => {
  setOnhover(false)
}
    
const deleteitem = () => {
  console.log('delete');
}

  return (

    <>
    <AnimatePresence>
        <motion.div
          className="px-8 z-20 bg-white border-b-4 fixed top-0 bottom-0 right-0  w-[27rem]"
          initial="closed"
          animate={currentstate ? 'open' : 'closed'}
          exit="closed"
          variants={variants}
        >
        {/* header  */}
        <div className='flex justify-between align-center py-7'> 
        <div><h2 className='text-xl font-bold'>Shopping Cart</h2></div>
            <div className="flex items-center justify-center text-2xl cursor-pointer">
              <IoMdClose onClick={closecart} />
            </div>
        </div>
        {/* header  */}


        {/* added items */}
        <div onMouseEnter={hoveritem} onMouseLeave={unhoveritem} className='flex flex-col	'> 
        <hr className=" border-gray-100 w-full" />
              <div className='flex justify-between align-center py-4 my-5 '>
                <div onClick={deleteitem} className='w-[25%] relative rounded-md cursor-pointer'>
                  <div className='  	'>
                  <img className='' src={itemsIge} alt="" />
                  </div>
                  {/*  */}
                  {onhover && (
                          <>
                            <div className='absolute bg-black top-0 left-0 right-0 bottom-0 rounded-lg opacity-50'></div>
                            <div className='bg-slate-200 rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                              <IoMdClose />
                            </div>
                          </>
                        )}

                
                  {/*  */}

                </div>

                <div className='w-[70%] flex justify-start flex-col	'>
                  <p className='text-[#212121] font-xl text-sm mb-1'>Barney Chocolate Butter Blend 284g</p>
                  <p className='text-gray-400 font-xl text-sm mb-2'>Unit Price $2.29</p>
                  <div className='flex justify-between'>
                  {/*  */}
                  <div className="custom-number-input h-10 w-32">
    
      <div className="flex flex-row translate-y-2 h-8 w-full rounded-lg relative bg-transparent ">
        <button
          data-action="decrement"
          className="bg-[#212121] text-white hover:bg-[#3f3f3f] h-full w-20 rounded-l cursor-pointer outline-none"
          onClick={decrement}
        >
          <span className="m-auto text-xl leading-6 font-thin">−</span>
        </button>
        <input
          type="text"
          className=" appearance-none outline-none focus:outline-none text-center w-full bg-[#212121] font-semibold text-md text-white focus:text-black md:text-base cursor-default flex items-center text-gray-700  outline-none"
          name="custom-input-number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          data-action="increment"
          className="bg-[#212121] text-white   hover:bg-[#3f3f3f] h-full w-20 rounded-r cursor-pointer"
          onClick={increment}
        >
          <span className="m-auto  text-xl leading-6	 font-thin">+</span>
        </button>
      </div>
    </div>
                  {/*  */}
                  <p className='font-bold translate-y-5 text-md'>$2.29</p>

                  </div>

                </div>

              </div>




              
        </div>
        {/* added items */}



































<div className=' cursor-pointer hover:bg-[#353535] px-10 text-lg py-3 flex justify-between text-white items-center left-0 right-0 bottom-0 bg-[#212121]  fixed m-6 rounded-lg'>
<div><p>Proceed To Checkout</p></div>
<div className='flex justify-around items-center'><span className='w-[1px] h-5 bg-white mr-5'></span> <p>$3.22</p></div>
</div>




        </motion.div>
      

      {currentstate && (
        <motion.div
          className="bg-black opacity-40 absolute h-[100vh] top-0 right-0 left-0 bottom-0"
          initial="hidden"
          animate={currentstate ? 'visible' : 'hidden'}
          variants={overlayVariants}
          onClick={closecart}
        ></motion.div>
      )}
    </AnimatePresence>
  </>
  )
}

export default Cart