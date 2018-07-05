import React, { Component } from 'react';
import Form from './components/Form';
import Title from './components/Title';
import Weather from './components/Weather';
import Particles from 'react-particles-js';

import './App.css';


const api_key='ebf8191e278563ca710f48d38512c7f6';
const particleOptions ={
                particles: {

                  number:{
                    value:80,
                    density:{
                      enable:true,
                      value_area:700
                    }

                  }
                },
                  interactivity:{
                    detect_on: "canvas",
                      events: {
                        onhover: {
                          enable: true,
                          mode: "repulse"
                        },
                        onclick: {
                          enable: true,
                          mode: "push"
                        },
                        resize: true
                  }
                  
                }  
              };

      const initialState={
              city:'',
              country:'',
              temperature:'',
              humidity:'',
              description:'',
              error:''
              
}        
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
fetch(endpoint)
  .then(response => response.json())
  .then(data => cities.push(...data));

const error_message="plz input valid city and country";
class App extends Component {

    state={
      initialState,
    }

    getWeather=async (e)=>{
      e.preventDefault();
      const city=e.target.elements.cityName.value;
      const country=e.target.elements.countryName.value;
      const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}&units=metric`)
      const data =await api_call.json()
      if(city && country)
      {
      this.setState({
              city:data.name,
              country:data.sys.country ,
              temperature:data.main.temp,
              humidity:data.main.humidity,
              description:data.weather[0].description,
              error:''
      });
   
    }else{
      this.setState({error:error_message});
    }
}



  clearField=(event)=>{
      const input1=document.querySelector('.input1')
      const input2=document.querySelector('.input2')
    input1.value='';
    input2.value='';
    this.setState(initialState);
  }
  
  render() {
    const {temperature,city,humidity,description,error,country}=this.state;
    return(
      <div className="App">
        <Particles className="particles" 
                params={particleOptions}/>
          
          
         <div>
           <Title />
            <Form getWeather={this.getWeather}getSuggestions={this.getSuggestions}clearField={this.clearField}/>
            <Weather
            temp={temperature}
            city={city}
            hum={humidity}
            con={country}
            des={description}
            error={error}/>
            </div>
           
            
      </div>

    );
  }
}

export default App;
