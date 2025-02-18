import { useFormik } from 'formik';

import * as Yup from 'yup';

const validate = Yup.object({
  full_name: Yup.string()
    .min(3, 'Must be 3 ch')
    .max(15, 'Must be 15 characters or less')
    .required('Required'),

  age: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),

  email: Yup.string().email('Invalid email address').required('Required'),
});

function FormFormik() {
  const formik = useFormik({
    initialValues: {
      full_name: '',
      age: '',
      email: '',
    },
    // validate: (values) => {
    //   const errors = {};

    //   if (!values.email) {
    //     errors.email = 'Required';
    //   } else if (
    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    //   ) {
    //     errors.email = 'Invalid email address';
    //   }

    //   if (!values.full_name) {
    //     errors.full_name = 'Required';
    //   }

    //   //...

    //   return errors;
    // },
    validationSchema: validate,
    onSubmit: sendRequest,
    // validate
  });

  function sendRequest(form, option) {
    console.log(form);
    console.log(option);

    option.resetForm();
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      FormFormik
      <br />
      <input
        name="full_name"
        value={formik.values.full_name}
        onChange={formik.handleChange}
      />
      <br />
      {formik.errors.full_name && <span>{formik.errors.full_name}</span>}
      <br />
      <input
        name="age"
        value={formik.values.age}
        onChange={formik.handleChange}
      />
      <br />
      {formik.errors.age && <span>{formik.errors.age}</span>}
      <br />
      <input
        // name="phone"
        value={formik.values.email}
        onChange={(e) => formik.setFieldValue('email', e.target.value)}
      />
      <br />
      {formik.errors.email && <span>{formik.errors.email}</span>}
      <br />
      <button type="submit">Send</button>
    </form>
  );
}

export default FormFormik;
