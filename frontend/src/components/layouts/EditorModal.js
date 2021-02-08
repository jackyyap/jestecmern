import React, { useState, useRef } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { API_URL } from '../../utils/constant';

const EditorModal = (props) => {
  const [file, setFile] = useState(null); // state for storing actual image

  const [state, setState] = useState({
    manuscriptTitle: '',
    keyword: '',
    track: '',
    abstract: ''
  });

  const [errorMsg, setErrorMsg] = useState('');

  const dropRef = useRef(); // React ref for managing the hover state of droppable area
  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const onDrop = (files) => {
    const [uploadedFile] = files;
    setFile(uploadedFile);
    const fileReader = new FileReader();

    fileReader.readAsDataURL(uploadedFile);

  };

  const updateBorder = (dragState) => {
    if (dragState === 'over') {
      dropRef.current.style.border = '2px solid #000';
    } else if (dragState === 'leave') {
      dropRef.current.style.border = '2px dashed #e9ebeb';
    }
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      const { manuscriptTitle, keywords, track, abstract } = state;
      if (manuscriptTitle.trim() !== '' && keywords.trim() !== '') {
        if (file) {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('manuscriptTitle', manuscriptTitle);
          formData.append('keywords', keywords);
          formData.append('track', track);
          formData.append('abstract', abstract);
          setErrorMsg('');
          await axios.post(`${API_URL}/upload`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          window.location.reload();
        } else {
          setErrorMsg('Please select a file to add.');
        }
      } else {
        setErrorMsg('Please enter all the field values.');
      }
    } catch (error) {
      error.response && setErrorMsg(error.response.data);
    }
  };

  return (
    <>
      <form className="search-form" onSubmit={handleOnSubmit}>
        <div class="modal fade" id="editorModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalTitle"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
              
              <div id="accordion">
              <div class="card" id="test" style="display: none;">
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      Assign an Editor to this manuscript
                    </button>
                  </h5>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                  <div class="card-body">
                    <small class="form-text text-muted mb-1">Select a JESTEC Editor</small>
                              <input class="form-control mb-1" id="assignedEditor" list="editors" placeholder="Enter user ID" />
                              <datalist id="editors">
                                <option value="Editor1"></option>
                                <option value="Editor2"></option>
                                <option value="Editor3"></option>
                              </datalist>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Assign Reviewer(s) to this manuscript
                    </button>
                  </h5>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div class="card-body">
                    <div class="form-row">
                              <div class="col-6">
                                <small class="form-text text-muted mb-1">Select a JESTEC Reviewer</small>
                                <input class="form-control mb-1" id="assignedReviewers" list="reviewers" placeholder="Enter user ID" />
                                <datalist id="reviewers">
                                  <option value="Reviewer1"></option>
                                  <option value="Reviewer2"></option>
                                  <option value="Reviewer3"></option>
                                </datalist>
                              </div>
                              <div class="col-6">
                                <small class="form-text text-muted mb-1">Or add a Non-JESTEC Reviewer</small>
                                <button class="btn btn-block btn-secondary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Quick Add
                                </button>
                              </div>
                            </div>
                            <div class="collapse w-100 mb-2" id="collapseExample">
                              <div class="form-row">
                                <div class="form-group col-md-6">
                                  <label for="FirstName">First Name</label>
                                  <input type="text" class="form-control" id="FirstName" placeholder="First Name" />
                                </div>
                                <div class="form-group col-md-6">
                                  <label for="LastName">Last Name</label>
                                  <input type="text" class="form-control" id="LastName" placeholder="Last Name" />
                                </div>
                              </div>
                              <div class="form-group">
                                <label for="Email">Email</label>
                                <input type="email" class="form-control" id="Email" placeholder="Email" />
                              </div>
                              <div class="form-row">
                                <div class="form-group col-md-6">
                                  <label for="Affiliation">Affiliation</label>
                                  <input type="text" class="form-control" id="Affiliation" placeholder="Taylor's University" />
                                </div>
                                <div class="form-group col-md-6">
                                  <label for="Title">Title</label>
                                  <input type="text" class="form-control" id="Title" placeholder="Mr, Mrs, Dr, Prof" />
                                </div>
                              </div>
                              <button type="button" class="btn btn-primary mb-2" id="quickAddAuthor">Add</button>
                            </div>

                            <hr>
                              <div class="form-group">
                    <label for="exampleFormControlTextarea1">Reviewer(s) assigned</label>
                    <textarea class="form-control" id="AssignedReviewers" rows="3" placeholder="No reviewer assigned" readonly></textarea>
                  </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Update Manuscript Status
                    </button>
                  </h5>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                  <div class="card-body">
                    <small class="form-text text-muted mb-1">Select a status</small>
                              <select class="form-control mb-1" id="ManuscriptStatus" >
                                <option>Assign paper to editor</option>
                                <option>Assign reviewer</option>
                                <option>Awaiting reviewer request acceptance</option>
                                <option>In review</option>
                                <option>Revision needed</option>
                                <option>In revision</option>
                                <option>Awaiting revision</option>
                                <option>Awaiting decision to accept/decline</option>
                                <option>To publish</option>
                                <option>Published</option>
                              </select>
                  </div>
                </div>
              </div>
            </div>   
         
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary text-light mr-auto" data-dismiss="modal" data-toggle="collapse" data-target="#ChatBox" aria-expanded="false" aria-controls="ChatBox"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-dots-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg> Message</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </>
  );
}

export default EditorModal;