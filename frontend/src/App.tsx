import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';

function App() {
  return (
    <Routes>
      {routes.map((route, index) => {
        const { path, element: Element } = route;

        if (route.layout) {
          const { layout: Layout } = route;
          return (
            <Route
              key={index}
              path={path}
              element={
                <Layout>
                  <Element />
                </Layout>
              }
            />
          );
        }

        return <Route key={index} path={path} element={<Element />} />;
      })}
    </Routes>
  );
}

export default App;
