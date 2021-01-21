import React from 'react';

class Manuscript extends React.Component {

	constructor(manuid, title, submit, review) {
		super(manuid, title, submit, review);
		this.state = { counter: 0 };
		//this.handleClick = this.handClick.bind(this);
	}

	render() {
		return (
			<>
				<div class="row rounded text-light shadow-sm bg-secondary details">
					<div class="col-sm-2">{this.manuid}</div>
					<div class="col-sm-5">{this.title}</div>
					<div class="col-sm-2">{this.submit}</div>
					<div class="col-sm-2">{this.reviewBy}</div>
					<div class="col-sm-1">
						<a class="text-light" href="#" data-toggle="collapse" data-target="#ChatBox" aria-expanded="false" aria-controls="ChatBox"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-dots-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg></a>
						<a class="text-light" href="#" data-toggle="tooltip" title="Info"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-info-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg></a>
					</div>
				</div>
			</>
		);
	}
}

export default Manuscript;