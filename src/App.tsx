import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';

import AppRouter from 'components/AppRouter';

const App = () => {
  return (
    <Layout>
      <Content>
        <AppRouter />
      </Content>
    </Layout>
  );
};

export default App;
