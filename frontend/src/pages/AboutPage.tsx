import { useEffect } from 'react';

function AboutPage() {
  useEffect(() => {
    document.title = 'About';
  });

  return <h1>About page</h1>;
}

export default AboutPage;
