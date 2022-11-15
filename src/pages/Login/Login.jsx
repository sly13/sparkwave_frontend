import React, { useState } from 'react'
import BalanceOnTopRight from '../../components/BalanceOnTopRight/BalanceOnTopRight'
import FormInput from '../../components/UI/FormInput/FormInput'
import { useNavigate } from 'react-router';
import classes from './Login.module.css'


import ColorButton from '../../components/UI/ColorButton/ColorButton'
import { ErrorMessage, Form, Formik } from 'formik';
import { LoginSchema } from './validation';

export default function Login() {
	let navigate = useNavigate();
	const [formData, setFormData] = useState('');

	const initialValues = {
		email: '',
		password: '',
	};

	const handleLogin = async () => {
		console.log('submit: s', formData.values)
		// await loginUser(formData.values);
	};

	React.useEffect(() => {
		console.log('handleLogin');
		if (formData !== '') handleLogin();
	}, [formData]);

	const onSubmitHandler = React.useCallback((values, actions) => {
		console.log('onSubmitHandler');
		setFormData({ values, actions });
	}, []);

	if (localStorage.getItem('jwtToken')) {
		navigate('/');
	}

	return (
		<div className={'body'}>
			<div className={'container'}>
				<div className={classes.headerRow}>
					<p className={classes.subtitle}>
						Login to admin panel
					</p>
					<BalanceOnTopRight topText='Muteless333.eth' bottomText='$1,034.02 (0.98 ETH)' />
				</div>
				<h1 className={classes.title}>
					Sign in
				</h1>
				<div className={classes.row}>
					<Formik
						initialValues={initialValues}
						validationSchema={LoginSchema}
						validateOnChange={false}
						onSubmit={onSubmitHandler}
					>
						{({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
							<>
								<Form onSubmit={handleSubmit} className={classes.form} >
									<div className={classes.formBlock}>
										<label htmlFor="" className={classes.label} >Email</label>
										<FormInput
											id="email"
											name="email"
											placeholder="Email"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.description}
										/>
										<div className={classes.error}>
											<ErrorMessage name="email" />
										</div>

									</div>
									<div className={classes.formBlock}>
										<label htmlFor="" className={classes.label} >Password</label>
										<FormInput
											id="password"
											name="password"
											placeholder="Password"
											value={values.password}
											onChange={handleChange}
											onBlur={handleBlur}
											type="password"
										/>
										<div className={classes.error}>
											<ErrorMessage name="password" />
										</div>
									</div>

									<div className={classes.formBlock}>
										<ColorButton
											color={'#0047FF'}
											type="submit"
											// disabled={isSubmitting}
											// isLoading={isSubmitting}
											// loadingText="Login... Please wait" textColor={'#fff'}
											style={{ width: '100%', marginTop: '41px' }}
										>
											Submit
										</ColorButton>
									</div>
								</Form>
							</>
						)}
					</Formik>
					{/* </form> */}


					<div className={classes.column}>

					</div>
				</div>
			</div>
		</div>
	)
}
