import ManuscriptList from './ManuscriptList';
import ReviewerJobTracker from './ReviewerJobTracker';
import Filter from './Filter';
import DashboardHeader from '../layouts/DashboardHeader';

function Reviewer (){
	return(
	<>
	<header class="masthead py-5">
      <div class="container-fluid h-100">
          <DashboardHeader name="Bob" />
          
          <div class="d-flex">
            <div class="col-sm-3 col-md-2">
              <Filter />
            </div>
            <div class="container col-sm-5 col-md-7">
            	<ManuscriptList />
            </div>
            <div class="col-sm-3 col-md-2">
              <ReviewerJobTracker />
            </div>
          </div>
      </div>
  	</header>
  	</>
  	);
}

export default Reviewer;