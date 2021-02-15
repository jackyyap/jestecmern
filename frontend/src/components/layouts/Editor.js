import EditorManuscriptList from './EditorManuscriptList';
import DashboardHeader from '../layouts/DashboardHeader';
import EditorJobTracker from './EditorJobTracker';
import Filter from './Filter';
import EditorModal from '../layouts/EditorModal';

function Editor (){
	return(
	<>
  <header class="masthead py-5">
      <div class="container-fluid h-100">
          <DashboardHeader />
          
          <div class="d-flex">
            <div class="col-sm-3 col-md-2">
              <Filter />
            </div>
            <div class="container col-sm-5 col-md-7">
              <EditorManuscriptList />
            </div>
            <div class="col-sm-3 col-md-2">
              <EditorJobTracker />
            </div>
          </div>
      </div>
    </header>
    <EditorModal />
    </>
  	);
}

export default Editor;