import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();

    function handleClickInvoicse(){
        navigate('/Invoices');
    }

    return (
        <nav className='Navbar'>
            <button onClick={handleClickInvoicse} class>Invoices</button>
        </nav>
    )
}