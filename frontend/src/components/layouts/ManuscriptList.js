import Manuscript from '../classes/Manuscript';

function ManuscriptList() {
  return (
  	<>
	  	<div class="row text-light">
			<div class="col-sm-2">ID</div>
			<div class="col-sm-5">Title</div>
			<div class="col-sm-2">Date Submitted</div>
			<div class="col-sm-2">Review By</div>
			<div class="col-sm-1"></div>
		</div>

		<Manuscript manuid="2" title="asd" submit="21/1/2021" review="21/2/2021" />
		<Manuscript manuid="2" title="asd" submit="21/1/2021" review="21/2/2021" />
		<Manuscript manuid="2" title="asd" submit="21/1/2021" review="21/2/2021" />
		<Manuscript manuid="2" title="asd" submit="21/1/2021" review="21/2/2021" />
		<Manuscript manuid="2" title="asd" submit="21/1/2021" review="21/2/2021" />
		<Manuscript manuid="2" title="asd" submit="21/1/2021" review="21/2/2021" />
		<Manuscript manuid="2" title="asd" submit="21/1/2021" review="21/2/2021" />
		<Manuscript manuid="2" title="asd" submit="21/1/2021" review="21/2/2021" />
	</>
  );
}

export default ManuscriptList;