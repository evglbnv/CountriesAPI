import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/index.jsx';
import Header from './components/Header/index.jsx';
import Details from './pages/Details/index.jsx';

const App = () => (

    <>
        <Header />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/country' element={<Details />} />
        </Routes>
    </>
);

export default App;
