import MyButton from "../../components/UI/button/MyButton";
import Line from "../../components/UI/line/Line";
import classes from './Admin.module.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArtists } from "../../utils/api/api";

function Admin() {
	const navigate = useNavigate();
	const [artists, setArtists] = useState();


	useEffect(() => {
		const getArtistsList = async () => {
			const artists = await getArtists();
			setArtists(artists);
		}

		getArtistsList();
	}, []);

	return (
		<>
			<div className={'body'}>
				<div className={'container'}>
					<h1 className={classes.title}>
						Admin
					</h1>
					<Line style={{ marginBottom: '58px' }} />
					<div className={classes.row}>
						<MyButton onClick={() => navigate("/create-artist")}> Add Artist</MyButton>
					</div>
					<div className={classes.artistsTable}>
						<table className={classes.table}>
							<thead>
								<tr>
									<th>Name</th>
									<th>Email</th>
									<th>Address</th>
									{/* <th>Action</th> */}
									{/* <th>Soundcloud</th>
								<th>Twitter</th>
								<th>Soundxyz</th>
								<th>timeCreated</th> */}
								</tr>
							</thead>
							<tbody>

								{artists && artists.map((item, index) => {
									return (
										<tr>
											<td>{item.username}</td>
											<td>{item.email}</td>
											<td>{item.address}</td>
											{/* <td></td> */}
											{/* <td>{item.soundcloud}</td>
										<td>{item.twitter}</td>
										<td>{item.soundxyz}</td>
										<td>{item.timeCreated}</td> */}
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
}

export default Admin;