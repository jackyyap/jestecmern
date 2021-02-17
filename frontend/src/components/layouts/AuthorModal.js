import React, { useState, useRef, useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { API_URL } from '../../utils/constant';

const AuthorModal = (props) => {
  const [file, setFile] = useState(null); // state for storing actual image
  const [usersList, setUsersList] = useState([]);
  const [state, setState] = useState({
    manuscriptTitle: '',
    keyword: '',
    track: '',
    abstract: '',
  });

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
  }, []);

  const [author, setAuthor] = useState({
    firstName: '',
    lastName: ''
  })

  const [errorMsg, setErrorMsg] = useState('');

  const dropRef = useRef(); // React ref for managing the hover state of droppable area
  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const handleAddAuthor = (event) => {
    setAuthor({
      ...author,
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

  const addAuthor = (event) => {
    try {
      const { firstName, lastName} = author;
      if (firstName.trim() !== '' && lastName.trim() !== '') {
        let authorName = lastName + ", " + firstName.charAt(0) + "., ";
        let authorList = document.getElementById("authors");
        authorList.value += authorName;
        document.getElementById("FirstName").value = '';
        document.getElementById("LastName").value = '';
      } else {
        setErrorMsg('Please enter all the field values.');
      }
    } catch (error) {
      error.response && setErrorMsg(error.response.data);
    }
  };

  const clearAuthors = (event) => {
    document.getElementById("authors").value = '';
  };

  return (
    <>
      <form className="search-form" onSubmit={handleOnSubmit}>
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
                                {usersList.length > 0 ? (
                                    usersList.map(
                                      ({ _id, email, firstName }) => (
                                      <option value={email}>{firstName}</option>
                                      )
                                    )
                                  ) : (
                                      <h5>No users found</h5>
                                    )
                                  }
                              </datalist>
                            </div>
                            <div class="col-6">
                              <small class="form-text text-muted mb-1">Or enter author details</small>
                              <button class="btn btn-block btn-secondary" type="button" data-toggle="collapse" data-target="#nameCollapse" aria-expanded="false" aria-controls="nameCollapse">Quick Add
                            </button>
                            </div>
                          </div>
                          <div class="collapse w-100 mb-2" id="nameCollapse">
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="FirstName">First Name</label>
                                <input 
                                  type="text" 
                                  class="form-control" 
                                  id="FirstName" 
                                  name="firstName" 
                                  placeholder="First Name"
                                  value={author.firstName || ''}
                                  onChange={handleAddAuthor} />
                              </div>
                              <div class="form-group col-md-6">
                                <label for="LastName">Last Name</label>
                                <input 
                                  type="text" 
                                  class="form-control" 
                                  id="LastName" 
                                  name="lastName" 
                                  placeholder="Last Name"
                                  value={author.lastName || ''}
                                  onChange={handleAddAuthor} />
                              </div>
                            </div>
                            
                            <div class="form-row">
                              <button type="button" class="btn btn-primary mb-2 mr-1" id="quickAddAuthor" onClick={addAuthor}>Add</button>
                              <button type="button" class="btn btn-danger mb-2" id="clearAuthors" onClick={clearAuthors}>Clear</button>
                            </div>
                          </div>
                          <input id="authors" class="form-control" type="text" placeholder="No author added" readonly="true" />
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
                        <div class="form-group" controlId="manuscriptTitle">
                          <label for="manuscriptTitle" required>Manuscript Title</label>
                          <Form.Control
                            type="text"
                            name="manuscriptTitle"
                            value={state.manuscriptTitle || ''}
                            placeholder="Enter manuscript title"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div class="form-group" controlId="keywords">
                          <label for="keywords">Keyword(s)</label>
                          <Form.Control
                            type="text"
                            name="keywords"
                            value={state.keywords || ''}
                            placeholder="Enter keywords"
                            onChange={handleInputChange}
                          />
                          <small class="form-text text-muted">Separate keywords with commas (Keyword1, Keyword2)</small>
                        </div>
                        <div class="form-group" controlId="track">
                          <label for="manuscriptTitle" required>Track</label>
                          <Form.Control
                            type="text"
                            name="track"
                            value={state.track || ''}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div class="form-group" controlId="abstract">
                          <label for="keywords">Abstract</label>
                          <Form.Control
                            type="text"
                            name="abstract"
                            value={state.abstract || ''}
                            placeholder="Enter abstract"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div class="form-group">
                          <label for="manuscriptFile">Manuscript (PDF)</label>
                          <div className="upload-section">
                            <Dropzone onDrop={onDrop}
                              onDragEnter={() => updateBorder('over')}
                              onDragLeave={() => updateBorder('leave')}>
                              {({ getRootProps, getInputProps }) => (
                                <div {...getRootProps({ className: 'drop-zone' })} ref={dropRef}>
                                  <input {...getInputProps()} />
                                  <p>Drag and drop a file OR click here to select a file</p>
                                  {file && (
                                    <div>
                                      <strong>Selected file:</strong> {file.name}
                                    </div>
                                  )}
                                </div>
                              )}
                            </Dropzone>
                          </div>
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
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default AuthorModal;