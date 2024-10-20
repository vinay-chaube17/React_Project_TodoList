import React from 'react'

export const Footer = () => {

    let footerStyle ={
        position: "relative",
        top:"35vh",
        width:"100%",
        border:"5px solid grey",
    
    }



  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
        <p className="text-center">
        Copyright &copy; MyTodosList.com
         </p>
       
      
    </footer>
  )
}


