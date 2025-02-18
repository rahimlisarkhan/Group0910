import { useForm } from 'react-hook-form';

function FormHook() {
  const { register, handleSubmit, getValues } = useForm();

  console.log('formState', getValues());

  return (
    <div>
      FormHook
      <input {...register('full_name')} />
      <input {...register('age')} />
      <input {...register('phone')} />
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
}

export default FormHook;
