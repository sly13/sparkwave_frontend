import Line from "../../components/UI/line/Line";
import classes from './Admin.module.css'
import AdminBalance from "../../components/AdminBalance/Balance";

function AdminBalancePage() {
	return (
		<>
			<div className={'body'}>
				<div className={'container'}>
					<h1 className={classes.title}>
						Admin Balance
					</h1>
					<Line style={{ marginBottom: '58px' }} />
					<AdminBalance />

				</div>
			</div>
		</>
	);
}

export default AdminBalancePage;