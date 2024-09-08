
  export const increase = (count)=>{
     return {
          type:"INC",
          payload:count
     }
  }

  export const decrease = (count)=>{
     return {
          type:"DEC",
          payload:count
     }
  }