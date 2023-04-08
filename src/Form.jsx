import { useFormContext } from './FormProvider';

export const Form = ({ children }) => {
  const ctx = useFormContext();

  const handleSubmit = e => {
    e.preventDefault();
    ctx.handleSubmit(ctx.state);
    ctx.dispatch({ type: 'reset' });
  };

  return (
    <form onSubmit={handleSubmit}>
      {children}
      <button type="submit">Submit</button>
    </form>
  );
};
