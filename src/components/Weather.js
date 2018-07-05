import React  from 'react';



const Weather =({temp,con,city,hum,des,error })=>{
	
		

    return (
         <div className='ma3 pa3 courier '>
           
           {city && con && <div className='pa1 f2 ba bg-washed-blue b--dark-green '><p>Location:{city},{con}</p></div>}
          {temp && <div className='pa1 ba f2 bg-washed-blue b--dark-green '><p>Temperature:{temp} degree Celsius</p></div>}
           {des && <div className='pa1 ba f2 bg-washed-blue b--dark-green '><p>Humidity:{hum}</p></div>}
           {des && <div className='pa1 ba f2 bg-washed-blue b--dark-green '><p>Conditions:{des}</p></div>}
            {error && <div className='pa1 ba f2 bg-washed-blue b--dark-green '><p>{error}</p></div>}

         </div>
    );
  }


export default Weather;