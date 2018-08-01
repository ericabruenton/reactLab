import React, { Component } from 'react';

class Quake extends Component {
	constructor() {
	  super();
	  this.state = {
	    quake: []
	  }
}


	


  render() {
    let earthQuake = this.state.quake.map((info, index) => {
		return (
			<Quake data={info} key={index} />
		)
	})

    return (
      <div className='quake'> 
      	{this.state.quake}

     </div>
       


      
    );
  }
}

export default Quake;
