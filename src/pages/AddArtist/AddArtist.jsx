import { ErrorMessage, Form, Formik } from "formik";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ColorButton from "../../components/UI/ColorButton/ColorButton";
import FormInput from "../../components/UI/FormInput/FormInput";
import Line from "../../components/UI/line/Line";
import { addArtist, getArtist, updateArtist } from "../../utils/api/api";
import classes from './AddArtist.module.css'
import { ArtistSchema } from "./validation";
import preview from '../../img/Rectangle 25(3).png'
import DropsCard from "../../components/DropsCard/DropsCard";
import MyButton from "../../components/UI/button/MyButton";

function AddArtist() {
	const { id } = useParams();
	let navigate = useNavigate();
	const [formData, setFormData] = useState('');

	const isAddMode = !id;

	const initialValues = {
		soundcloud: '',
		username: '',
		email: '',
		twitter: '',
		address: '',
		soundxyz: '',
		avatar: '',
	};

	const [formValues, setFormValues] = useState(initialValues);

	useEffect(() => {
		if (!isAddMode) {
			const getArtistById = async () => {
				const response = await getArtist({ id });
				setFormValues(response);
			};
			getArtistById();
		}
	}, []);

	const handleSubmit = async () => {
		const { soundcloud, username, email, twitter, address, soundxyz, avatar } = formData.values;
		const actionMethod = !isAddMode ? updateArtist : addArtist;

		const data = new FormData();
		data.append('soundcloud', soundcloud);
		data.append('username', username);
		data.append('email', email);
		data.append('twitter', twitter);
		data.append('address', address);
		data.append('soundxyz', soundxyz);
		data.append('avatar', avatar);

		try {
			const response = await actionMethod({ data, id });
			console.log('response', response);

			if (response.data.success) {
				navigate('/admin')
				console.log('success')
			}
		} catch (e) {
			console.log('error', e);
			// setError: (e) => {
			// 	setError(e);
			// 	formData.actions.setSubmitting(false);
			// 	// console.log('e.response', e.response.data.error_message);
			// 	if (e.response.status === 400) {
			// 		formData.actions.setFieldError('address', 'Wallet already exists');
			// 	}
			// }
		}


	};

	useEffect(() => {
		console.log('handleSubmit');
		if (formData !== '') handleSubmit();
	}, [formData]);

	const onSubmitHandler = useCallback((values, actions) => {
		console.log('onSubmitHandler');
		setFormData({ values, actions });
	}, []);

	console.log('formvalues', formValues)

	return (
		<>
			<div className={'body'}>
				<div className={'container'}>
					<h1 className={classes.title}>
						{isAddMode ? 'Add' : 'Update'} artist
					</h1>
					<Line style={{ marginBottom: '58px' }} />
					<div className={classes.row}>
						<Formik
							initialValues={formValues}
							validationSchema={ArtistSchema}
							validateOnChange={false}
							onSubmit={onSubmitHandler}
							enableReinitialize
						>
							{({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
								<>
									<Form onSubmit={handleSubmit} className={classes.form}>
										<div className={classes.formBlock}>
											<div className={classes.column} style={{ "paddingBottom": '30px' }}>
												<div className={classes.column}>
													<p className={classes.previewInfo}>
														Image, Video, Audio, or 3D Model
													</p>
													<p className={classes.previewComment}>
														File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB
													</p>
													<DropsCard style={{ margin: 0 }} setFieldValue={setFieldValue} avatar={values.avatar && values.avatar[0] ? values.avatar[0].preview : ''} error={errors.avatar} touched={touched.avatar} text={'Archo Sactus'} />
												</div>
											</div>

											<label htmlFor="" className={classes.label} >Name</label>
											<FormInput
												id="username"
												name="username"
												placeholder="Name"
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.username}
											/>
											<div className={classes.error}>
												<ErrorMessage name="username" />
											</div>
										</div>

										<div className={classes.formBlock}>
											<label htmlFor="" className={classes.label} >Email</label>
											<FormInput
												id="email"
												name="email"
												placeholder="Email"
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.email}
											/>
											<div className={classes.error}>
												<ErrorMessage name="email" />
											</div>
										</div>
										<div className={classes.formBlock}>
											<label htmlFor="" className={classes.label} >Soundcloud</label>
											<FormInput
												id="soundcloud"
												name="soundcloud"
												placeholder="Soundcloud"
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.soundcloud}
											/>
											<div className={classes.error}>
												<ErrorMessage name="soundcloud" />
											</div>
										</div>


										<div className={classes.formBlock}>
											<label htmlFor="" className={classes.label} >Twitter</label>
											<FormInput
												id="twitter"
												name="twitter"
												placeholder="Twitter"
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.twitter}
											/>
											<div className={classes.error}>
												<ErrorMessage name="twitter" />
											</div>
										</div>

										<div className={classes.formBlock}>
											<label htmlFor="" className={classes.label} >Address</label>
											<FormInput
												id="address"
												name="address"
												placeholder="Address"
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.address}
											/>
											<div className={classes.error}>
												<ErrorMessage name="address" />
											</div>
										</div>

										<div className={classes.formBlock}>
											<label htmlFor="" className={classes.label} >Soundxyz</label>
											<FormInput
												id="soundxyz"
												name="soundxyz"
												placeholder="Soundxyz"
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.soundxyz}
											/>
											<div className={classes.error}>
												<ErrorMessage name="soundxyz" />
											</div>
										</div>

										<div className={classes.formBlock}>
											<ColorButton color={'#0047FF'} type="submit" textColor={'#fff'} style={{ width: '100%', marginTop: '41px' }}>Submit</ColorButton>
										</div>

									</Form>
								</>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</>
	);
}

export default AddArtist;