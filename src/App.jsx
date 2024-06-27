import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/index.jsx';
import Header from './components/Header/index.jsx';
import Details from './pages/Details/index.jsx';
import Main from './components/Main/index.jsx';

const App = () => (

    <>
        <Main>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/country/:name' element={<Details />} />
            </Routes>
        </Main>
    </>
);

export default App;
