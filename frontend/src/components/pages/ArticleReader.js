
function ArticleReader() {
  return (
  <>
  	<div class="container-fluid mt-5">
			<div class="d-flex justify-content-between">
				<div class="col-sm-2">
				    <div class="card">
				    	<div class="card-body">
				    		<h5 class="card-title">
				    			Jump to
				    			<small class="text-muted"><a class="btn-sm btn-secondary float-right" href="archive"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-arrow-left-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
</svg>Archive</a></small>
				    		</h5>
				    		<hr />
					    	<div id="list-example" class="list-group">
							  <a class="list-group-item list-group-item-action" href="#list-item-1">Abstract</a>
							  <a class="list-group-item list-group-item-action" href="#list-item-2">Full Paper</a>
							</div>
				    	</div>
				    </div>
				</div>

				<div class="container text-light">
					<div class="input-group"> 
					  <input class="form-control bg-transparent text-light" id="myInput" type="text" placeholder="Filter publications by search" />
					  <div class="input-group-append">
					      <button class="btn btn-light" type="button">
					        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						  <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
						  <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
						</svg>
					      </button>
					    </div>
			    	</div>
			    	<hr class="border-light" />

			    	<h4>
			    		<span class="text-success">Manuscript Title </span>
			    		<small class="text-muted">Author1, Author2</small>
			    	</h4>

			    	<div class="d-flex mb-4">
			    		<div class="mr-3">
			    			<strong class="text-info">First Online</strong>: 09/20/2020
			    		</div>
			    		<div class="mr-3">
			    			<strong class="text-info">Publisher</strong>: Publisher 1
			    		</div>
			    		<div class="mr-3">
			    			<strong class="text-info">DOI</strong>: 0000000/000000000000
			    		</div>
			    		<div class="ml-auto">
			    			<button type="button" class="btn btn-sm btn-outline-info mr-1">Cite This</button>
			    			<button type="button" class="btn btn-sm btn-info">PDF</button>
			    		</div>
		    		</div>


			    <div class="scrollspy-target" data-spy="scroll" data-target="#list-example" data-offset="0">	
		    		<div class="media-border">
				    	<h5 id="list-item-1" class="text-info">Abstract</h5>
				    	<hr class='border-info' />
				    	<p>
				    		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				    	</p>
				    	<h5 class="text-info">Keywords</h5>
				    	<p>
				    		<span class="badge badge-info mr-1">Keyword1</span>
				    		<span class="badge badge-info mr-1">Keyword2</span>
				    	</p>
				    </div>

				    <div class="media-border">
				    	<h5 id="list-item-2" class="text-info">Introduction</h5>
				    	<hr class='border-info' />
				    	<p>
				    		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere mi eget magna euismod scelerisque. Donec sit amet sapien tellus. Sed vitae eros lacus. Aliquam laoreet porta est. Quisque odio nisi, gravida eget eleifend eu, pharetra in risus. In vel posuere erat. Aenean vitae sagittis tortor. Ut sapien nulla, iaculis a nulla at, convallis malesuada dui. Vivamus maximus urna justo, nec eleifend neque tristique eu.
				    	</p>
				    	<p>
							Nunc ligula ipsum, tristique id ipsum eget, lobortis consectetur mauris. Ut sodales lobortis lacus, eu auctor lacus euismod nec. Aliquam eu congue nunc, vitae eleifend justo. Proin et lacinia nisi. Quisque feugiat orci et purus malesuada malesuada. Pellentesque felis sapien, varius at velit eget, efficitur cursus dolor. Nulla sollicitudin quam metus, eu sollicitudin sem facilisis quis. Donec aliquam dictum lectus, non maximus metus iaculis eget. Donec efficitur est sed blandit laoreet. Phasellus feugiat ultricies ante, vitae imperdiet justo laoreet eget. Etiam et fringilla eros. Sed ante lacus, dignissim id hendrerit ut, iaculis eu ante. Nunc vel sollicitudin elit. Cras aliquet gravida arcu, quis pellentesque tortor eleifend eget. Curabitur aliquam, mi vel vehicula convallis, sem nulla eleifend augue, at aliquet lacus mi non orci.
						</p>
						<p>
							Morbi dignissim varius purus et tristique. Ut ac massa at purus finibus pulvinar. Donec interdum ipsum dui, ut fermentum enim aliquam nec. Nam fermentum nisi ac semper ultricies. Nunc sollicitudin, ante sit amet laoreet bibendum, nunc tellus facilisis ex, vitae vulputate ligula felis non ipsum. Aliquam quis sem erat. Proin quis erat ut ante tempor rhoncus non non tellus. Proin commodo non sapien in egestas. Nulla condimentum dolor quis dui sodales, vitae egestas sem fringilla. Mauris vehicula urna at nibh pulvinar mattis.
						</p>
				    </div>

				    <div class="media-border">
				    	<h5 id="list-item-3" class="text-info">Chapter 1</h5>
				    	<hr class='border-info' />
				    	<p>
							Vestibulum blandit eu risus in elementum. Pellentesque eget condimentum nulla. Fusce pretium porta tellus, vitae tempus sapien dapibus vel. Ut sit amet aliquet quam. Suspendisse hendrerit nisl ut augue pharetra accumsan. Morbi congue condimentum dictum. Etiam ac ullamcorper massa, eget commodo lectus. Cras porttitor, arcu id faucibus laoreet, massa elit sollicitudin quam, ut vehicula lectus sem non tortor. Nunc interdum diam in ex facilisis cursus. Pellentesque sollicitudin ac sem vel vehicula. Phasellus a tellus sed nibh vestibulum sollicitudin quis vel neque. Sed vitae dui pharetra, finibus lorem ac, placerat nisi. Praesent luctus libero massa, eu pretium odio malesuada vel.
				    	</p>
				    	<p>
							Integer quis ultricies tortor. Nullam efficitur, erat non scelerisque pharetra, felis ligula luctus nibh, quis convallis felis urna tincidunt nisi. Pellentesque eget cursus dolor. Proin cursus sapien eget nulla tempor, ac tincidunt dui tincidunt. Aenean gravida mauris ac elit tempus suscipit. Donec non elit elementum, tempus nibh eget, posuere mauris. Cras fermentum accumsan elit sit amet placerat. Vivamus mi massa, porta a mollis a, varius vel ex. Integer ac urna velit. Duis lacinia risus posuere libero molestie egestas. Praesent eu interdum tellus. Vestibulum odio tellus, varius sit amet augue vitae, dignissim varius quam. Duis eu lobortis tortor.
						</p>
						<p>
							Ut at sodales diam. Nam vitae magna ullamcorper, tempor tortor a, interdum ipsum. Aliquam erat volutpat. Nunc consectetur sapien in leo pharetra, eget consectetur ante suscipit. Vivamus eu pharetra sem. Pellentesque dignissim nunc vel diam sollicitudin sollicitudin. Nunc elit arcu, porttitor vel pretium quis, consectetur ut est.
						</p>
						<p>
							Praesent id ornare nulla. Praesent tempus justo eu viverra ultrices. Nam pellentesque libero odio, at eleifend orci finibus nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras lectus odio, tempus quis sollicitudin ut, congue commodo lacus. Quisque rhoncus massa dolor, a fringilla ante facilisis nec. Integer elementum ut urna non fringilla. Vivamus in consectetur ante. Aenean vel felis sit amet nisi maximus fringilla in vel quam. Vivamus pretium at urna nec pulvinar.
						</p>
						<p>
							Duis hendrerit nisi at quam semper, at viverra mi ullamcorper. Cras ut eros auctor, egestas lectus scelerisque, iaculis orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse auctor condimentum malesuada. Sed mi tortor, dignissim at lectus nec, scelerisque ultricies libero. Proin volutpat ligula eget odio malesuada, at blandit nunc auctor. Nunc quam nisl, tristique at malesuada ut, venenatis eu tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
						</p>
				    </div>

				    <div class="media-border">
				    	<h5 id="list-item-4" class="text-info">Chapter 2</h5>
				    	<hr class='border-info' />
				    	<p>
							Vestibulum blandit eu risus in elementum. Pellentesque eget condimentum nulla. Fusce pretium porta tellus, vitae tempus sapien dapibus vel. Ut sit amet aliquet quam. Suspendisse hendrerit nisl ut augue pharetra accumsan. Morbi congue condimentum dictum. Etiam ac ullamcorper massa, eget commodo lectus. Cras porttitor, arcu id faucibus laoreet, massa elit sollicitudin quam, ut vehicula lectus sem non tortor. Nunc interdum diam in ex facilisis cursus. Pellentesque sollicitudin ac sem vel vehicula. Phasellus a tellus sed nibh vestibulum sollicitudin quis vel neque. Sed vitae dui pharetra, finibus lorem ac, placerat nisi. Praesent luctus libero massa, eu pretium odio malesuada vel.
				    	</p>
				    	<p>
							Integer quis ultricies tortor. Nullam efficitur, erat non scelerisque pharetra, felis ligula luctus nibh, quis convallis felis urna tincidunt nisi. Pellentesque eget cursus dolor. Proin cursus sapien eget nulla tempor, ac tincidunt dui tincidunt. Aenean gravida mauris ac elit tempus suscipit. Donec non elit elementum, tempus nibh eget, posuere mauris. Cras fermentum accumsan elit sit amet placerat. Vivamus mi massa, porta a mollis a, varius vel ex. Integer ac urna velit. Duis lacinia risus posuere libero molestie egestas. Praesent eu interdum tellus. Vestibulum odio tellus, varius sit amet augue vitae, dignissim varius quam. Duis eu lobortis tortor.
						</p>
						<p>
							Ut at sodales diam. Nam vitae magna ullamcorper, tempor tortor a, interdum ipsum. Aliquam erat volutpat. Nunc consectetur sapien in leo pharetra, eget consectetur ante suscipit. Vivamus eu pharetra sem. Pellentesque dignissim nunc vel diam sollicitudin sollicitudin. Nunc elit arcu, porttitor vel pretium quis, consectetur ut est.
						</p>
						<p>
							Praesent id ornare nulla. Praesent tempus justo eu viverra ultrices. Nam pellentesque libero odio, at eleifend orci finibus nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras lectus odio, tempus quis sollicitudin ut, congue commodo lacus. Quisque rhoncus massa dolor, a fringilla ante facilisis nec. Integer elementum ut urna non fringilla. Vivamus in consectetur ante. Aenean vel felis sit amet nisi maximus fringilla in vel quam. Vivamus pretium at urna nec pulvinar.
						</p>
						<p>
							Duis hendrerit nisi at quam semper, at viverra mi ullamcorper. Cras ut eros auctor, egestas lectus scelerisque, iaculis orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse auctor condimentum malesuada. Sed mi tortor, dignissim at lectus nec, scelerisque ultricies libero. Proin volutpat ligula eget odio malesuada, at blandit nunc auctor. Nunc quam nisl, tristique at malesuada ut, venenatis eu tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
						</p>
				    </div>
				</div>
			</div>

			<div class="col-sm-2">
				    
			</div>

			</div>
		</div>
  </>
  );  
}

export default ArticleReader;