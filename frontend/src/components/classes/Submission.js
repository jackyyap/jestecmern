import React from 'react';

class Submission extends React.Component {

	// authors is lastName + firstName(Abbr) e.g. Lee F.
	constructor(props) {
		super(props);
		this.state = { counter: 0 };
		//this.handleClick = this.handClick.bind(this);
	}

	render() {
		return (
			<>
				<div class="row bg-secondary text-light align-items-center rounded details manuscript-item" data-toggle="modal" data-target="#editorModal">
					<div class="col-sm-1">Manu. ID</div>
					<div class="col-sm-3">Manuscript Title</div>
					<div class="col-sm-1">Authors</div>
					<div class="col-sm-1">Keywords</div>
					<div class="col-sm-2">Date Submitted</div>
					<div class="col-sm-2">Status</div>
					<div class="col-sm-2 my-auto">
						<div class="progress border border-light">
							<div class="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Submission;