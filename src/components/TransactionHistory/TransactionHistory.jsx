import { Transaction } from "./Transaction";
import { Table, Thead, Th} from "./TransactionHistory.styled";

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <Thead>
                <tr>
                    <Th>Type</Th>
                    <Th>Amount</Th>
                    <Th>Currency</Th>
                </tr>
            </Thead>
            <tbody>
                {items.map(item => <Transaction
                    key={item.id}
                    type={item.type}
                    amount={item.amount}
                    currency={item.currency}
                    />
                )}
            </tbody>
        </Table>
        
    );

}

// id — унікальний ідентифікатор транзакції
// type — тип транзакції
// amount - сума транзакції
// currency - тип валюти