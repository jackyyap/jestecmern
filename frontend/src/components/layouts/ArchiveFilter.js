function ArchiveFilter() {
  return (
  <>
  	<div class="card">
		<div class="card-body">
			<h5 class="card-title">Filter publications by:</h5>
			<hr />
			<form>
				<div class="form-group">
				    <label for="categories">Subject Area</label>
				    <select class="form-control mb-2" id="categories">
				      <option value="" selected disabled>Select subject area</option>
				      <option>Engineering</option>
				      <option>Science</option>
				      <option>Computing & IT</option>
				    </select>
				</div>

				<div class="form-group">
					<label for="filters">Keywords</label>
					<div class="form-check" id="filters">
					  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
					  <label class="form-check-label" for="defaultCheck1">
					    Keyword 1 <span class="badge badge-light">23</span>
					  </label>
					</div>
					<div class="form-check">
					  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
					  <label class="form-check-label" for="defaultCheck1">
					    Keyword 2 <span class="badge badge-light">11</span>
					  </label>
					</div>
					<div class="form-check">
					  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
					  <label class="form-check-label" for="defaultCheck1">
					    Keyword 3 <span class="badge badge-light">2</span>
					  </label>
					</div>
				</div>

				<button class="btn btn-primary btn-block mt-3" type="button">Filter</button>
			</form>
		</div>
	</div>
  </>
  );  
}

export default ArchiveFilter;