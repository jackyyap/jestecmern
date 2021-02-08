import React from 'react';

class Job extends React.Component {

	constructor(props) {
		super(props);
		this.state = { counter: 0 };
		//this.handleClick = this.handClick.bind(this);
	}

	render() {
		return (
			<div class="d-flex mb-2 bg-secondary rounded text-light details">
		      <div class="col-sm-6">
		        000
		      </div>
		      <div class="col-sm-6">
		        0 day(s)
		      </div>
		    </div>
		);
	}
}

export default Job;