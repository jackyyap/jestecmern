import React, { useState, useEffect } from 'react';
import download from 'downloadjs';
import axios from 'axios';
import { API_URL } from '../../utils/constant';
const FilesList = () => {
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
    const downloadFile = async (id, path, mimetype) => {
        try {
            const result = await axios.get(`${API_URL}/download/${id}`, {
                responseType: 'blob'
            });
            const split = path.split('/');
            const filename = split[split.length - 1];
            setErrorMsg('');
            return download(result.data, filename, mimetype);
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setErrorMsg('Error while downloading file. Try again later');
            }
        }
    };
    return (
        <div className="files-container p-5">
            <table className="files-table">
                <thead>
                    <tr>
                        <th>Manuscript Title</th>
                        <th>Keywords</th>
                        <th>Track</th>
                        <th>Abstract</th>
                        <th>Download File</th>
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
                                    <td>
                                        <a
                                            href="#/"
                                            onClick={() =>
                                                downloadFile(_id, file_path, file_mimetype)
                                            }
                                        >
                                            Download
                    </a>
                                    </td>
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
export default FilesList;