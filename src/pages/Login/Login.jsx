import React from 'react'
import BalanceOnTopRight from '../../components/BalanceOnTopRight/BalanceOnTopRight'
import FormInput from '../../components/UI/FormInput/FormInput'
import classes from './Login.module.css'


import preview from '../../img/Rectangle 25(3).png'
import calendar_icon from '../../img/calendar.svg'
import ChoosButton from '../../components/ChoosButton/ChoosButton'
import DropsCard from '../../components/DropsCard/DropsCard'
import MyButton from '../../components/UI/button/MyButton'
import ColorButton from '../../components/UI/ColorButton/ColorButton'

export default function Login() {
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
					<form action="" className={classes.form} >
						<div className={classes.formBlock}>
							<label htmlFor="" className={classes.label} >Email</label>
							<FormInput placeholder="Email" />
						</div>
						<div className={classes.formBlock}>
							<label htmlFor="" className={classes.label} >name</label>
							<FormInput placeholder="username" />
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
	)
}
