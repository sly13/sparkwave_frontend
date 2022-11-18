import { ErrorMessage, Field } from 'formik'
import React from 'react'
import MyButton from '../UI/button/MyButton';
import CustomFileInput from '../UI/FileInput'
import classes from './DropsCard.module.css'

export default function DropsCard({ avatar, error, touched, text, color, style, setFieldValue }) {
  console.log('error', error);
  return (
    <>
      {/* <div className={classes.card} style={{ background: `linear-gradient(353deg, ${color} -16%, rgba(15,15,15,1) 40%`, ...style }}> */}

      {
        !avatar ? (
          <>
            <Field
              id="avatar"
              name="avatar"
              component={CustomFileInput}
              type="text"
              accept=".png, .jpg, .jpeg"
              label="Upload avatar"
              labelTypes="PNG, JPG, JPEG (Max 10mb)"
              actionText="Click to upload avatar"
              // fileSizePreferer="Preferred image size: 1280x280px"
              maxFiles="1"
            />
            {error && touched && <div className={classes.error}>{error}</div>}
          </>
        ) : (
          <>
            <div className={classes.card}>
              <img src={avatar.preview} className={classes.image} alt="" maxWidth={"100px"} />
              {/* <p className={classes.text}>{text}</p> */}
            </div>
            <MyButton style={{ width: '100%', marginTop: '35px' }} onClick={() => setFieldValue('avatar', '')}>Change</MyButton>
          </>
        )
      }
    </>

  )
}
