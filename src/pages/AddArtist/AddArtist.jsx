import ColorButton from "../../components/UI/ColorButton/ColorButton";
import FormInput from "../../components/UI/FormInput/FormInput";
import Line from "../../components/UI/line/Line";
import classes from './AddArtist.module.css'

function AddArtist() {
	return (
		<>
			<div className={'body'}>
				<div className={'container'}>
					<h1 className={classes.title}>
						Add artist
					</h1>
					<Line style={{ marginBottom: '58px' }} />
					<div className={classes.row}>
						<form action="" className={classes.form} >
							<div className={classes.formBlock}>
								<label htmlFor="" className={classes.label} >Soundcloud</label>
								<FormInput placeholder="Soundcloud" />
							</div>
							<div className={classes.formBlock}>
								<label htmlFor="" className={classes.label} >Name</label>
								<FormInput placeholder="Name" />
							</div>

							<div className={classes.formBlock}>
								<label htmlFor="" className={classes.label} >Email</label>
								<FormInput placeholder="Email" />
							</div>

							<div className={classes.formBlock}>
								<label htmlFor="" className={classes.label} >Twitter</label>
								<FormInput placeholder="Twitter" />
							</div>

							<div className={classes.formBlock}>
								<label htmlFor="" className={classes.label} >Address</label>
								<FormInput placeholder="Address" />
							</div>

							<div className={classes.formBlock}>
								<label htmlFor="" className={classes.label} >Soundxyz</label>
								<FormInput placeholder="Soundxyz" />
							</div>

							<div className={classes.formBlock}>
								<ColorButton color={'#0047FF'} textColor={'#fff'} style={{ width: '100%', marginTop: '41px' }}>Submit</ColorButton>
							</div>

						</form>
						<div className={classes.column}>

						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AddArtist;