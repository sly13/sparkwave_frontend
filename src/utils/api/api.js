import axios from 'axios';
import { backendUrl } from '../contants';

export const addArtist = async (data) => {
	const config = {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			// jwt: localStorage.getItem('authToken'),
		},
	};

	return await axios.post(`${backendUrl}artists`, data, config);
};



export const getArtists = async () => {
	const response = await axios.get(`${backendUrl}/artists`);
	return response.data;
};