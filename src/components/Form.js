import React from 'react';
import './form.css'




class Form extends React.Component {
  
  render() {
  	const {getWeather,clearField,getSuggestions} =this.props;
    return (
    	<div className='pa4  courier br-pill'>
		    <form onSubmit={getWeather} >
		         
				    <label  className='ma2 l'>CITY</label>
				    <input  className='ma2 br-pill input1 '   name='cityName' placeholder="" onChange={getSuggestions}/>
				    <label  className='ma2'>Country</label>
				    <input   className='ma2 br-pill input2'name='countryName' placeholder="" />
				  
				  <button type="submit" className="btn btn-primary ma2 " >check </button>
				  <button type="button" className="btn btn-primary ma2" onClick={clearField}>clear </button>
				 
			</form>
		</div>
    );
 }
}

export default Form;