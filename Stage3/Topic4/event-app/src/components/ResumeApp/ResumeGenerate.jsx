import { useFormik } from 'formik';

function ResumeGenerate({ setData }) {
  const { handleChange, values, handleSubmit, errors } = useFormik({
    initialValues: {
      full_name: '',
      position: '',
      salary: '',
      img_url: '',
      skills: '',
    },
    onSubmit: createResume,
  });

  function createResume(payload, options) {
    console.log(payload);
    setData(payload);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="full_name"
        placeholder="Fullname"
        value={values.full_name}
        onChange={handleChange}
      />
      <br />
      {errors.full_name && <span>{errors.full_name}</span>}
      <br />
      <br />
      <input
        name="position"
        value={values.position}
        placeholder="Position"
        onChange={handleChange}
      />
      <br />
      {errors.position && <span>{errors.position}</span>}
      <br />
      <br />
      <input
        name="salary"
        placeholder="Salary"
        value={values.salary}
        onChange={handleChange}
      />
      <br />
      {errors.salary && <span>{errors.salary}</span>}
      <br />
      <br />
      <input
        name="img_url"
        placeholder="Img url"
        value={values.img_url}
        onChange={handleChange}
      />
      <br />
      {errors.img_url && <span>{errors.img_url}</span>}
      <br />
      <br />
      <input
        name="skills"
        placeholder="Skills"
        value={values.skills}
        onChange={handleChange}
      />
      <br />
      {errors.skills && <span>{errors.skills}</span>}
      <br />
      <br />
      <button type="submit">Send</button>
    </form>
  );
}

export default ResumeGenerate;
