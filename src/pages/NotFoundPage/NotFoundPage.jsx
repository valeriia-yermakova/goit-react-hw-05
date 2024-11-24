import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <main>
      <h1>Page Not Found</h1>
      <Link to="/">Go to Home</Link>
    </main>
  );
};

export default NotFoundPage;
