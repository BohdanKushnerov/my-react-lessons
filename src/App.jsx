import { Field } from './Field';
import { Form } from './Form';
import { FormProvider } from './FormProvider';

export const App = () => {
  return (
    <FormProvider
      initialValue={{
        login: '',
        password: '',
      }}
      handleSubmit={value => {
        console.log(value);
      }}
    >
      <Form>
        <Field name="login" type="text" />
        <Field name="password" type="password" />
      </Form>
    </FormProvider>
  );
};
