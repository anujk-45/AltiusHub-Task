import { useState, Link} from "react"

export default ListViewInvoices = () => {
    const [invoices, setInvoices] = useState({});
    const navigate = useNavigate();


    function handleClick(){
        navigate('/InvoiceDetailComponent')
    }
    return(
        <div className="InvoicesContainer">
            <button onClick={handleClick}></button>
            <ul>
                {Array.from(invoices).map(invoice => {
                    <Link className="InvoiceCard" to = "/In">
                        <p>Id: {invoice.id}</p>
                        <p>Date: {invoice.date}</p>
                        <p>Amount: {invoice.TotalAmount}</p>
                        <p>Total Items: {invoice.InvoiceItem.length}</p>
                    </Link>
                })}
            </ul>
        </div>
    )
}