import { useState} from "react"

export default invoiceDetailComponent = () => {
    const [invoices, setInvoices] = useState({});
    const navigate = useNavigate();
    const {id, setId} = useState(0);
    const {date, SetDate} = useState('');
    const {invoiceNumber, setInvoiceNumber} = useState('');
    const {customerName, setCustomerName} = useState('');
    const {BillingAddress, setBillingAddress} = useState('');
    const {ShippingAddress, setShippingAddress} = useState('');
    const {itemsText, setItemsText} = useState('');
    const {items, setItems} = useState([]);
    const {billSundrysText, setBillSundrysText} = useState('')
    const {billSundrys, setBillSundrys} = useState([])
    const {totalAmount, setTotalAmount} = useState(0);

    function handleSubmit(e){
        e.preventDefault();
        const arr = itemsText.split(',');
        setItems(arr);

        const arr2 = billSundrysText.split(',');
        setBillSundrys(arr2);
    }

    return(
        <div>
            <form onsubmit = {(e) => handleSubmit(e)}>
                <lable>Id</lable>
                <input type="text" value={id}/>
                <lable>Date</lable>
                <input type="text" value={date} onChange={onDateChange}/>
                <lable>invoiceNumber</lable>
                <input type="number" value={invoiceNumber}/>
                <lable>customerName</lable>
                <input type="text" value={customerName}/>
                <lable>BillingAddress</lable>
                <input type="text" value={BillingAddress}/>
                <lable>ShippingAddress</lable>
                <input type="text" value={ShippingAddress}/>
                <lable>Items</lable>
                <input type="text" value={itemsText} required/>
                <lable>BillSundrys</lable>
                <input type="text" value={billSundrysText}/>
                <lable>BillSundrys</lable>
                <input type="number" value={totalAmount}/>
            </form>
        </div>
    )
}