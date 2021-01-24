import Job from '../classes/Job';

function ReviewerJobTracker () {
	return(
		<div class="card">
			<div class="card-header">
				Jobs
			</div>
			<div class="card-body pt-1">
				<div class="d-flex">
			      <div class="col-sm-6">
			        <strong>Man. ID</strong>
			      </div>
			      <div class="col-sm-6">
			        <strong>Time Rem.</strong>
			      </div>
		      	</div>

		      	<Job />
		      	<Job />
		      	<Job />
		      	<Job />
		      	<Job />
		      	<Job />
			</div>
		</div>
	);
}

export default ReviewerJobTracker;