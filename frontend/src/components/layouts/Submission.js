import React, { useState, useRef } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { API_URL } from '../../utils/constant';

const Submission = (props) => {
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
        <React.Fragment>
            <div class="px-5 py-5">
                <Form className="search-form" onSubmit={handleOnSubmit}>
                    {errorMsg && <p className="errorMsg">{errorMsg}</p>}
                    <Row>
                        <Col>
                            <Form.Group controlId="manuscriptTitle">
                                <Form.Control
                                    type="text"
                                    name="manuscriptTitle"
                                    value={state.manuscriptTitle || ''}
                                    placeholder="Enter manuscript title"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="keywords">
                                <Form.Control
                                    type="text"
                                    name="keywords"
                                    value={state.keywords || ''}
                                    placeholder="Enter keywords"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="track">
                                <Form.Control
                                    type="text"
                                    name="track"
                                    value={state.track || ''}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="abstract">
                                <Form.Control
                                    type="text"
                                    name="abstract"
                                    value={state.abstract || ''}
                                    placeholder="Enter abstract"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="upload-section">
                        <Dropzone onDrop={onDrop}>
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
                    <Button variant="primary" type="submit">
                        Submit
        </Button>
                </Form>
            </div>
        </React.Fragment>
    );
};
export default Submission;