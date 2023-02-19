import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from "@fortawesome/free-regular-svg-icons";
import { useContext } from 'react';
import { AppContext } from '../context/app-context';

let ExpenseRow = (props) => {
    let appContext = useContext(AppContext);
    let onDeleteHandler = () => {
        // props.onDeleteExpense(props.expense.id);
        appContext.removeExpense(props.expense.id);
    };
    return(
        <tr>
        <td> {props.expense.name} </td>
        <td> {props.expense.date}</td>
        <td>{props.expense.value}$ </td>
        <td colSpan="2">{props.expense.description}</td>
        <td className="text-right">
            <a href="#" onClick={onDeleteHandler} className="delete" >
            <FontAwesomeIcon icon={faTrashCan} />
            </a>
            </td>
      </tr>

    );
};
export default ExpenseRow;