import React, { useState, useRef, useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { API_URL } from '../../utils/constant';

const EditorModal = () => {
    const [filesList, setFilesList] = useState([]);
    const [usersList, setUsersList] = useState([]);
    const [file, setFile] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const [reviewer, setReviewer] = useState({
      firstName: '',
      lastName: '',
      email: '',
    });

    const [editor, setEditor] = useState({
      firstName: '',
      lastName: '',
      email: '',
    });

    const [state, setState] = useState({
      assignedEditor: '',
      assignedReviewers: '',
      status: ''
    })

    useEffect(() => {
    const displayUsers = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/getUsers`);
        setErrorMsg('');
        setUsersList(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };
    displayUsers();

    const displayManuDetails = async (id) => {
      try {
        const {data} = await axios.get(`${API_URL}/getFile/?id`);
        setErrorMsg('');
        setState(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };
    displayManuDetails(state.id);
  }, []);


  const handleAddReviewer = (event) => {
    setReviewer({
      ...reviewer,
      [event.target.name]: event.target.value
    });
  };

  const assignReviewer = (event) => {
    try {
      const { firstName, lastName, email} = reviewer;
      if (firstName.trim() !== '' && lastName.trim() !== '') {
        let reviewerDetails = firstName + " " + lastName + ": " + email + "\n";
        let reviewerList = document.getElementById("assignedReviewers");
        reviewerList.value += reviewerDetails;
        document.getElementById("FirstName").value = '';
        document.getElementById("LastName").value = '';
        document.getElementById("Email").value = '';
      } else {
        setErrorMsg('Please enter all the field values.');
      }
    } catch (error) {
      error.response && setErrorMsg(error.response.data);
    }
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      const {manuscriptTitle, keywords, track, abstract } = state;
      const authors = document.getElementById('authors').value;
      if (manuscriptTitle.trim() !== '' && keywords.trim() !== '') {
        if (file) {
          let formData = new FormData();
          formData.append('authors', authors);
          formData.append('manuscriptTitle', manuscriptTitle);
          formData.append('keywords', keywords);
          formData.append('track', track);
          formData.append('abstract', abstract);
          formData.append('file', file);
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
      <form className="search-form">
        <div class="modal fade" id="editorModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                  
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
              
              <div id="accordion">
              <div class="card" id="test">
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button type="button" class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      Assign an Editor to this manuscript
                    </button>
                  </h5>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                  <div class="card-body">
                    <small class="form-text text-muted mb-1">Select a JESTEC Editor</small>
                      <input class="form-control mb-1" id="assignedEditor" list="editors" placeholder="Enter user email" />
                      <datalist id="editors">
                        {usersList.length > 0 ? (
                          usersList.map(
                            ({ _id, email, firstName, lastName}) => (
                            <option value={email}>{firstName} {lastName}</option>
                            )
                          )
                        ) : (
                            <h5>No users found</h5>
                          )
                        } 
                      </datalist>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h5 class="mb-0">
                    <button type="button" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Assign Reviewer(s) to this manuscript
                    </button>
                  </h5>
                </div>

                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div class="card-body">
                    <div class="form-row">
                      <div class="col-6">
                        <small class="form-text text-muted mb-1">Select a JESTEC Reviewer</small>
                        <input 
                          class="form-control 
                          mb-1" 
                          list="reviewers" 
                          placeholder="Enter user email"
                          id="Email"
                          name="email"
                          value={reviewer.email || ''}
                          onChange={handleAddReviewer} />
                        <datalist id="reviewers">
                          {usersList.length > 0 ? (
                          usersList.map(
                            ({ _id, email, firstName, lastName }) => (
                            <option value={email}>{firstName} {lastName}</option>
                            )
                          )
                        ) : (
                            <h5>No users found</h5>
                          )
                        } 
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
                          <input 
                            type="text" 
                            class="form-control" 
                            id="FirstName" 
                            name="firstName" 
                            placeholder="First Name"
                            value={reviewer.firstName || ''}
                            onChange={handleAddReviewer} />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="LastName">Last Name</label>
                          <input 
                            type="text" 
                            class="form-control" 
                            id="LastName" 
                            name="lastName" 
                            placeholder="Last Name"
                            value={reviewer.lastName || ''}
                            onChange={handleAddReviewer} />
                        </div>
                      </div>
                      <button type="button" class="btn btn-primary mb-2" id="quickAddReviewer" onClick={assignReviewer}>Add</button>
                    </div>
                    <hr />                     
                    <div class="form-group">
                      <label for="assignedReviewers">
                          Reviewer(s) assigned
                      </label>
                      <textarea 
                        class="form-control"
                        rows="3" 
                        id="assignedReviewers"
                        placeholder="No reviewer assigned" 
                        readonly="true" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="headingThree">
                  <h5 class="mb-0">
                    <button type="button" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
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
                <button type="button" class="btn btn-secondary text-light mr-auto">
                  Download
                </button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditorModal;