import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/constant';

const EditorManuscriptList = () => {
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

  return (
  	<>
		<div className="files-container text-light">
			<div className="files-table">
				<div className="row text-light list-header">
					<div class="col-sm-1">Man. ID</div>
					<div class="col-sm-3">Manuscript Title</div>
					<div class="col-sm-1">Author(s)</div>
					<div class="col-sm-1">Keyword(s)</div>
					<div class="col-sm-2">Submitted</div>
					<div class="col-sm-2">Status</div>
					<div class="col-sm-2">Progress</div>
				</div>

				<div className="manuscript-list px-2">
					{filesList.length > 0 ? (
						filesList.map(
							({ _id, manuscriptTitle, keywords, track, abstract, file_path, file_mimetype }) => (
						
						<div key={_id} className="row rounded text-light shadow-sm bg-secondary align-items-center details">
							<div class="col-sm-1">XXXXXX</div>
							<div class="col-sm-3">Manuscript Title</div>
							<div class="col-sm-1">Authors</div>
							<div class="col-sm-1">Keywords</div>
							<div class="col-sm-2">Date Submitted</div>
							<div class="col-sm-2">Status</div>
							<div class="col-sm-2 my-auto">
								<div class="progress border border-light">
									<div class="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
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
		</div>
	</>
  );
}

export default EditorManuscriptList;