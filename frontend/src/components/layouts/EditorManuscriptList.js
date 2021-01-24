import Submission from '../classes/Submission';

function EditorManuscriptList() {
  return (
  	<>
	  	<div class="row text-light align-items-end">
			<div class="col-sm-1">Man. ID</div>
			<div class="col-sm-3">Manuscript Title</div>
			<div class="col-sm-1">Author(s)</div>
			<div class="col-sm-1">Keyword(s)</div>
			<div class="col-sm-2">Submitted</div>
			<div class="col-sm-2">Status</div>
			<div class="col-sm-2">Progress</div>
		</div>

		<Submission manuid="2" title="asd" authors="Lee F., Yap J." keywords="keywords" submit="21/1/2021" status="Submitted" />
		<Submission manuid="2" title="asd" authors="Lee F., Yap J." keywords="keywords" submit="21/1/2021" status="Submitted" />
		<Submission manuid="2" title="asd" authors="Lee F., Yap J." keywords="keywords" submit="21/1/2021" status="Submitted" />
		<Submission manuid="2" title="asd" authors="Lee F., Yap J." keywords="keywords" submit="21/1/2021" status="Submitted" />
		<Submission manuid="2" title="asd" authors="Lee F., Yap J." keywords="keywords" submit="21/1/2021" status="Submitted" />
		<Submission manuid="2" title="asd" authors="Lee F., Yap J." keywords="keywords" submit="21/1/2021" status="Submitted" />
	</>
  );
}

export default EditorManuscriptList;