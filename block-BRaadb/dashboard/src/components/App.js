import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Articles from './Articles';
import Peoples from './Peoples';
import Article from './Article';
import '../styles/index.css'
import { Routes, Route } from 'react-router-dom'
import { articlesData } from './Data';


const routes = [
    {
        path: '/',
        main: () => <Home />
    },
    {
        path: '/articles',
        main: () => <Articles data={articlesData} />
    },
    {
        path: '/peoples',
        main: () => <Peoples />
    },
    {
        path: '/help&support',
        main: () => <div >help & support</div>
    }
]


const App = () => {
    return (
        <>
            <Header />

            <div className='col'>
                <Navbar />
                <div className='main'>
                    <Routes>
                        {
                            routes.map((route, index) =>
                            (
                                <Route
                                    key={index}
                                    path={route.path}
                                    end={route.end}
                                    element={<route.main />}>
                                </Route>


                            )
                            )

                        }
                        <Route path='/articles/:id' element={<Article data={articlesData} />} />
                    </Routes >
                </div>
            </div>
        </>
    )
}

function Header() {
    return (
        <header className='width-full app-header'>
            <div className='flex  justify-space width-40 align-center'>
                <div className='flex align-center'>
                    <i className="fa-solid fa-layer-group"></i>
                    <a href='/'>Dashboard</a>
                </div>
                <input placeholder='Seach documentation...' />
            </div>
        </header>
    )
}



export default App