import { ErrorMessage, Form, Formik } from "formik";
import { useCallback, useEffect, useState } from "react";
import ColorButton from "../../components/UI/ColorButton/ColorButton";
import FormInput from "../../components/UI/FormInput/FormInput";
import Line from "../../components/UI/line/Line";
import classes from './AddArtist.module.css'
import { ArtistSchema } from "./validation";

function AddArtist() {
	const [formData, setFormData] = useState('');

	const initialValues = {
		soundcloud: '',
		username: '',
		email: '',
		twitter: '',
		address: '',
		soundxyz: '',
	};

	const handleSubmit = async () => {
		console.log('submit: s', formData.values)
		// await loginUser(formData.values);
	};

	useEffect(() => {
		console.log('handleSubmit');
		if (formData !== '') handleSubmit();
	}, [formData]);

	const onSubmitHandler = useCallback((values, actions) => {
		console.log('onSubmitHandler');
		setFormData({ values, actions });
	}, []);

	return (
		<>
			<div className={'body'}>
				<div className={'container'}>
					<h1 className={classes.title}>
						Add artist
					</h1>
					<Line style={{ marginBottom: '58px' }} />
					<div className={classes.row}>
						<Formik
							initialValues={initialValues}
							validationSchema={ArtistSchema}
							validateOnChange={false}
							onSubmit={onSubmitHandler}
						>
							{({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
								<>
									<Form onSubmit={handleSubmit} className={classes.form} >
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
						<div className={classes.column}>

						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AddArtist;