import React,{useId} from 'react'

function Select({
     options,
     lable,
     className="",
     ...props

},ref) {

     const id = useId()

  return (
   <>
     {lable && <label htmlFor={id}>{lable}</label> }
     <select ref={ref} className={` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} {...props} id={id}>

     {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
           
     </select>
   </>
  )
}

export default React.forwardRef(Select) 