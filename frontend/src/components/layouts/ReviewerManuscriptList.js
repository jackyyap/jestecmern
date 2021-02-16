import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/constant';

const ManuscriptList = () => {
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
					<div className="col-sm-2">Manu. ID</div>
					<div className="col-sm-4">Manuscript Title</div>
					<div className="col-sm-2">Keywords</div>
					<div className="col-sm-2">Track</div>
					<div className="col-sm-2">Abstract</div>
				</div>
				<div className="manuscript-list px-2">
					{filesList.length > 0 ? (
						filesList.map(
							({ _id, manuscriptTitle, keywords, track, abstract, file_path, file_mimetype, manuscriptId }) => (
					<div key={_id} className="row rounded text-light shadow-sm bg-secondary align-items-center details">
						<div className="manuscript-id col-sm-2">{manuscriptId}</div>
						<div className="manuscript-title col-sm-4">{manuscriptTitle}</div>
						<div className="keywords col-sm-2">{keywords}</div>
						<div className="track col-sm-2">{track}</div>
						<div className="abstract col-sm-2">{abstract}</div>
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
};

export default ManuscriptList;