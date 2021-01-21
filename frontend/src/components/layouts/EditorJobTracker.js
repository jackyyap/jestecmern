import Job from '../classes/Job';

function EditorJobTracker () {
	return(
		<div class="card">
			<div class="card-header">
				Tasks
			</div>
			<div class="card-body">
				<p><span class="badge badge-primary">1</span> <a href="#">Assign paper to editor</a></p>
				<p><span class="badge badge-primary">1</span> <a href="#">Assign reviewer</a></p>
				<p><span class="badge badge-primary">1</span> <a href="#">Awaiting reviewer request acceptance</a></p>
				<p><span class="badge">0</span> <a href="#" class="text-muted">In review</a></p>
				<p><span class="badge">0</span> <a href="#" class="text-muted">Revision needed</a></p>
				<p><span class="badge">0</span> <a href="#" class="text-muted">In revision</a></p>
				<p><span class="badge">0</span> <a href="#" class="text-muted">Awaiting revision</a></p>
				<p><span class="badge">0</span> <a href="#" class="text-muted">Awaiting decision to accept/decline</a></p>
				<p><span class="badge">0</span> <a href="#" class="text-muted">To publish</a></p>
				<p><span class="badge">0</span> <a href="#" class="text-muted">Published</a></p>
			</div>
		</div>
	);
}

export default EditorJobTracker;