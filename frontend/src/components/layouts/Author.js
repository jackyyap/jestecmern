import ManuscriptList from './ManuscriptList';
import DashboardHeader from '../layouts/DashboardHeader';
import AuthorModal from './AuthorModal';

function Author (){
	return(
<>
	<header class="masthead py-5">
    <div class="container-fluid h-100">
      <DashboardHeader name="Bob" />
        
      <div class="d-flex">
            <div class="col-sm-3 col-md-2">
            </div>
            <div class="container col-sm-5 col-md-7">
              <ManuscriptList />

              <button type="button" class="btn border border-secondary btn-block btn-dark text-light" data-toggle="modal" data-target="#submitManuscript">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                Submit Manuscript
              </button>
            </div>
            <div class="col-sm-3 col-md-2">
            </div>
          </div>     
    </div>    
	</header>
  <AuthorModal />
</>
  	);
}

export default Author;