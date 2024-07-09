import { BrowserRouter, Route, Routes, Navigate, NavLink } from 'react-router-dom'
import { Cotillea } from '../pages/Cotillea'
import { Desahogate } from '../pages/Desahogate'
import { Inicio } from '../pages/Inicio'
import { Container } from '../components/Container'

export const Navigation = () => {
  return (

    <BrowserRouter>
        <div className="header">
            <div className='logo-container'>
                {/* <span>
                    Tomate
                </span> */}
                <span>
                    <NavLink to={'/inicio'} className={ 'link' }> <img className='logo' title='Quedate a gusto!' src='/assets/logo2.png'/></NavLink>
                </span>
                {/* <span>Podrido ( Y Frito) </span> */}
            </div>
            <div className='nav-container'>
                <nav className='nav'>
                     <span>
                        <NavLink to={'/inicio'} className={ 'link' }> Ultimos salseos </NavLink>
                    </span>
                    <span>
                        <NavLink to={'/cotillea'} className={ 'link' }> Cotillea un poco </NavLink>
                    </span>

                    <span>
                        <NavLink to={'/desahogate'} className={ 'link' }> Diselo bien claro! </NavLink>
                    </span>
                </nav>
            </div>
            <div></div>

        </div>
       
        <Routes>
            <Route path="inicio" element= {<Container children={<Inicio/>}/>} />
            <Route path="cotillea" element= {<Container children={<Cotillea/>}/>}/>
            <Route path="desahogate" element= {<Container children={<Desahogate/>}/>} />
            <Route path="*" element= {<Navigate to="/inicio" replace />}/>
        </Routes>
    </BrowserRouter>


  )
}
