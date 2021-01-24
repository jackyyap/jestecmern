function AuthorModal () {
	return(
<>
<form action="includes/author.inc.php"  method="post" enctype="multipart/form-data">
  <div class="modal fade" id="submitManuscript" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Submit Manuscript</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      
      
        <div class="modal-body">
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                  <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Author Details
                  </button>
                </h2>
              </div>

            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div class="card-body">
                      <div class="form-group">
                        <div class="form-row">
                          <div class="col-6">
                            <small class="form-text text-muted mb-1">Select a JESTEC User</small>
                            <input class="form-control mb-1" id="addAuthorSelection" list="usernames" />
                            <datalist id="usernames">
                              <option value="User1"></option>
                              <option value="User2"></option>
                              <option value="User3"></option>
                            </datalist>
                          </div>
                          <div class="col-6">
                            <small class="form-text text-muted mb-1">Or enter author details</small>
                            <button class="btn btn-block btn-secondary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Quick Add
                            </button>
                          </div>
                        </div>
                        <div class="collapse w-100 mb-2" id="collapseExample">
                          <div class="form-row">
                            <div class="form-group col-md-6">
                              <label for="FirstName">First Name</label>
                              <input type="text" class="form-control" id="FirstName" name="firstName" placeholder="First Name" />
                            </div>
                            <div class="form-group col-md-6">
                              <label for="LastName">Last Name</label>
                              <input type="text" class="form-control" id="LastName" name="lastName" placeholder="Last Name" />
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="Email">Email</label>
                            <input type="email" class="form-control" id="Email" name="authorsEmail" placeholder="Email" />
                          </div>
                          <div class="form-row">
                            <div class="form-group col-md-6">
                              <label for="Affiliation">Affiliation</label>
                              <input type="text" class="form-control" id="Affiliation" name="affiliation" placeholder="Taylor's University" />
                            </div>
                            <div class="form-group col-md-6">
                              <label for="Title">Title</label>
                              <input type="text" class="form-control" id="Title" name="title" placeholder="Mr, Mrs, Dr, Prof" />
                            </div>
                          </div>
                          <button type="button" class="btn btn-primary mb-2" id="quickAddAuthor">Add</button>
                        </div>
                        <input class="form-control" type="text" placeholder="No author added" readonly />
                      </div>      
                      </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header" id="headingTwo">
                <h2 class="mb-0">
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Manuscript Details
                  </button>
                </h2>
              </div>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div class="card-body">
                      <div class="form-group">
                        <label for="manuscriptTitle" required>Manuscript Title</label>
                        <input type="text" class="form-control" id="manuscriptTitle" name="manuscriptTitle" aria-describedby="emailHelp" placeholder="Enter manuscript title" />
                      </div>
                      <div class="form-group">
                        <label for="keywords">Keyword(s)</label>
                        <textarea class="form-control" id="keywords" name="keywords" rows="1" required></textarea>
                        <small class="form-text text-muted">Separate keywords with commas (Keyword1, Keyword2)</small>
                      </div>
                      <div class="form-group">
                        <label for="manuscriptTitle" required>Track</label>
                        <select class="custom-select" id="track" name="track">
                          <option selected>Select track</option>
                          <option value="1">Science</option>
                          <option value="2">Engineering</option>
                          <option value="3">Computing/IT</option>
                        </select>   
                      </div>
                      <div class="form-group">
                        <label for="keywords">Abstract</label>
                        <textarea class="form-control" id="keywords" name="abstract" rows="3" required></textarea>
                      </div>
                      <div class="form-group">
                        <label for="manuscriptFile">Manuscript (PDF)</label>
                        <input type="file" class="form-control-file" id="manuscriptFile" name="file" required />
                      </div>
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" required />
                        <label class="form-check-label" for="exampleCheck1">I agree to the JESTEC <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary" id="SubmitBtn" name="submitManuscript">Submit</button>
        </div>
      </div>
    </div>
  </div>
</form>
</>
	);
}

export default AuthorModal;