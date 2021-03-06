import TransactionItem from "./TransactionItem"
import s from './Transaction.module.css'

function TransactionHistory({ items }) { 
    return (
        <table className={s.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <TransactionItem key={item.id}
                        type={item.type}
                        amount={item.amount}
                        currency={item.currency}
                    />
                ))}  
            </tbody>
        </table>
    )
};

export default TransactionHistory;