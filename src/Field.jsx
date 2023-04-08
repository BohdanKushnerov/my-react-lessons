import { useFormContext } from './FormProvider';

export const Field = ({ name, type }) => {
  const ctx = useFormContext();

  // console.log(ctx);

  return (
    <input
      name={name}
      type={type}
      value={ctx.state[name]}
      onChange={ctx.handleChange}
    />
  );
};
