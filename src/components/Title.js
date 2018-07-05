import React  from 'react';
import './title.css';


class Title extends React.Component{
  render() {
    return (
    	<div>
         <div className='center bg-washed-green ma4 br-pill'>
           <h1 className=' pa3 f1 dark-green grow courier '>Weather Forecast</h1>
         </div>
         <div>
         <p className='pa3 f1  washed-green grow courier'>Find about Temperature Conditions And More</p>
         </div>
         </div>
    );
  }
}

export default Title;