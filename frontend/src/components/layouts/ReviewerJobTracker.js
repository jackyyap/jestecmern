import Job from '../classes/Job';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/constant';

function ReviewerJobTracker () {
	const [filesList, setFilesList] = useState([]);
	const [errorMsg, setErrorMsg] = useState('');
	useEffect(() => {
		const getFilesList = async () => {
			try {
				const { data } = await axios.get(`${API_URL}/getAllFiles`);
				setErrorMsg('');
				setFilesList(data);
			} catch (error) {
				error.response && setErrorMsg(error.response.data);
			}
		};
		getFilesList();
	}, []);

	return(
		<>
		<div class="card">
			<div class="card-header">
				Jobs
			</div>
			<div class="card-body pt-1 px-4 job-tracker text-center">
				<div class="row">
			      <div class="col-sm-8">
			        <strong>Manuscript ID</strong>
			      </div>
			      <div class="col-sm-4">
			        <strong>File</strong>
			      </div>
		      	</div>
		      	{filesList.length > 0 ? (
						filesList.map(
							({ _id, manuscriptTitle, keywords, track, abstract, file_path, file_mimetype, manuscriptId }) => (
					<div class="row bg-secondary mb-1 rounded text-light align-items-center details">
				      <div class="col-sm-8">
				        {manuscriptId}
				      </div>
				      <div class="col-sm-4">
				        <a class="btn btn-link text-light">
				        	<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
			                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
			                </svg>
				        </a>
				      </div>
			      	</div>
							)
						)
					) : (
							<div className="text-light text-center">
								<strong>
								You haven't submitted any manuscripts yet.
								</strong>
							</div>
						)
					}
			</div>
		</div>
		</>
	);
}

export default ReviewerJobTracker;