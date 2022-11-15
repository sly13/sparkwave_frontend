import axios from 'axios';
import { backendUrl } from '../contants';

export const addArtist = async (data) => {
	const config = {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'x-access-token': localStorage.getItem('accessToken'),
		},
	};

	return await axios.post(`${backendUrl}artists`, data, config);
};



export const getArtists = async () => {
	const response = await axios.get(`${backendUrl}artists`);
	return response.data;
};

export const login = async (data) => {
	const config = {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	};

	return await axios.post(`${backendUrl}auth/login`, data, config);
};
