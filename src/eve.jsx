import React, { useState } from 'react';

const Eve = () =>{
    const purple = '#8e44ad';

   const [back,setbac] = useState(purple);

    const bgc = () =>{
        const backe = '#34495e';
    setbac(backe);
    }
    const bagco = () => {
        const col = 'green';
        setbac(col);
    }
    return (
        <>
        <div style={{backgroundColor : back
        }}>
        <button onClick ={bgc} onDoubleClick = {bagco}> Click Me</button>
        </div>
           
        </>
    )
}
export default Eve;