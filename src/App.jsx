import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/index.jsx';
import Header from './components/Header/index.jsx';

const App = () => (
    <>
        <Header />
        <Routes>
            <Route path='/' element={<HomePage />} />
        </Routes>
    </>
);

export default App;
