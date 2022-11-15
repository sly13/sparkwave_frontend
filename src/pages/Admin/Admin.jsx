import MyButton from "../../components/UI/button/MyButton";
import Line from "../../components/UI/line/Line";
import classes from './Admin.module.css'
import { useNavigate } from "react-router-dom";

function Admin() {
	const navigate = useNavigate();

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
				</div>
			</div>
		</>
	);
}

export default Admin;