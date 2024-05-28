import React from 'react'
import { useId } from 'react'


const Input = React.forwardRef(function Input({

     type ="text",
    label,
     className="",
     ...props
    
},ref) {

  const id = useId()

  return (
     <div className='w-full'>
         {label && <label 
         className='inline-block mb-1 pl-1' 
         htmlFor={id}>
             {label}
         </label>
         }
         <input
         type={type}
         className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
         ref={ref}
         {...props}
         id={id}
         />
     </div>
 )
})

export default Input;





// import React from 'react'
// import { useId } from 'react'


// function Input({

//      type ="text",
//     label,
//      className="",
//      ...props
    
// },ref) {

//   const id = useId()

//   return (
// //     <div className={` ${textColor} ${bgColor} ${className}`} {...props}>{children}</div>
// <>
// <label htmlFor={id}>{label}</label>
// <input className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
//             ref={ref} id={id} type={type} {...props} />
// </>
//   )
// }

// export default React.forwardRef(Input)