import { useState } from 'react';

const initialForm = { full_name: '', age: '', phone: '' };

function Form() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState(initialForm);

  console.log('error', error);

  function handleChange(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    let newForm = { ...form };

    newForm[inputName] = inputValue;

    setForm(newForm);

    //? Fullname Validate
    if (inputName == 'full_name') {
      //First error step
      if (newForm.full_name.length > 20) {
        let newError = { ...error };
        newError.full_name = 'Yazi cox uzundur!';
        setError(newError);
      } else {
        let newError = { ...error };
        newError.full_name = '';
        setError(newError);
      }
    }

    //? Phone Validate
    if (inputName == 'phone') {
      const isAzePhone = true;
      if (!isAzePhone) {
        let newError = { ...error };
        newError.phone = 'Nomre standartlara cvab vermir!';
        setError(newError);
      } else {
        let newError = { ...error };
        newError.full_name = '';
        setError(newError);
      }
    }
  }

  function handleSubmit() {
    const isSubmit = Object.values(error).every((value) => !value);

    if (!isSubmit) {
      alert('Form sehfdir');
      return;
    }

    console.log('form', form);
    // fetching...

    // setForm(initialForm);
  }

  return (
    <div>
      Form
      <div>
        <div>
          <input
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
          />
          {error.full_name && (
            <div style={{ color: 'red' }}>{error.full_name}</div>
          )}
        </div>
        <br />
        <input name="age" value={form.age} onChange={handleChange} />
        <br />
        <input name="phone" value={form.phone} onChange={handleChange} />

        <br />
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
}

export default Form;
