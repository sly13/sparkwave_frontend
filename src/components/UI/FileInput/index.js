import { getIn } from 'formik';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import MyButton from '../button/MyButton';
import classes from './FileInput.module.css'
// import cancelIcon from '../../../assets/icons/cancel.svg';

const CustomFileInput = (props) => {
  const {
    field,
    form,
    accept,
    label,
    actionText,
    maxFiles,
    labelTypes,
    onChange,
    fileSizePreferer
  } = props;
  const { name } = field;

  const error = getIn(form.errors, name);
  const isTouched = getIn(form.touched, name);
  const isError = !!error && isTouched;

  const [files, setFiles] = React.useState([]);
  const { getRootProps, getInputProps, open } = useDropzone({
    accept,
    noClick: true,
    maxSize: 100000000,
    maxFiles: maxFiles,
    onDrop: (acceptedFiles) => {
      const filesUpload = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      );

      setFiles(files.concat(filesUpload));
      form.setFieldValue(field.name, files.concat(filesUpload));
      if (onChange) {
        onChange(filesUpload);
      }
    }
  });

  React.useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <>
      <div style={{ "cursor": "pointer" }}>
        {/* <label htmlFor="" className="form__label">
          {label}
        </label> */}

        {/* <MyButton style={{ width: '100%', marginTop: '35px' }} {...getRootProps({ className: 'dropzone' })}>
          <input id={name} name={name} {...getInputProps()} />
          Upload
        </MyButton> */}

        <input id={name} name={name} {...getInputProps()} />
        <div className={classes.upload}>
          <div onClick={open} color="#1b39ce" cursor="pointer">
            <div color="white" textAlign="center">
              {actionText ?? 'Click to upload file'}{' '}
            </div>
          </div>
        </div>

        {/* <Box display="flex" flexDirection="row" flexWrap="wrap" marginTop="16" padding="20px">
            {thumbs}
          </Box> */}
      </div>


    </>
  );
};

export default CustomFileInput;
