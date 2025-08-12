import { useForm } from 'react-hook-form';
import type { FieldError } from 'react-hook-form';

type FormData = {
  nombre: string;
  email: string;
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = () => {
    alert('Formulario enviado correctamente!');
  };

  const getErrorMessage = (error: unknown) => {
    if (!error) return null;
    if (typeof error === 'string') return error;
    if (typeof error === 'object' && error !== null && 'message' in error) {
      return (error as FieldError).message;
    }
    return null;
  };

  return (
    <div className="contact-page">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre:</label>
          <input {...register('nombre', { required: 'El nombre es obligatorio' })} />
          {getErrorMessage(errors.nombre) && <span>{getErrorMessage(errors.nombre)}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" {...register('email', { required: 'El email es obligatorio', pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: 'Email inválido' } })} />
          {getErrorMessage(errors.email) && <span>{getErrorMessage(errors.email)}</span>}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
