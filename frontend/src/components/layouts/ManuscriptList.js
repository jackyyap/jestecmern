import Manuscript from '../classes/Manuscript';
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
		<div className="files-container p-5 text-light">
			<table className="files-table">
				<thead>
					<tr>
						<th>Manuscript Title</th>
						<th>Keywords</th>
						<th>Track</th>
						<th>Abstract</th>
					</tr>
				</thead>
				<tbody>
					{filesList.length > 0 ? (
						filesList.map(
							({ _id, manuscriptTitle, keywords, track, abstract, file_path, file_mimetype }) => (
								<tr key={_id}>
									<td className="manuscript-title">{manuscriptTitle}</td>
									<td className="keywords">{keywords}</td>
									<td className="track">{track}</td>
									<td className="abstract">{abstract}</td>
								</tr>
							)
						)
					) : (
							<tr>
								<td colSpan={3} style={{ fontWeight: '300' }}>
									No files found. Please add some.
              </td>
							</tr>
						)}
				</tbody>
			</table>
		</div>
	);
};

export default ManuscriptList;