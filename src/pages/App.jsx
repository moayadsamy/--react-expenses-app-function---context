import 'bootstrap/dist/css/bootstrap.css';
import "../resources/css/custom.css";
import Image from "../resources/img/m1.png";
import ExpenseForm from '../components/ExpenseForm';
import ExpensesTable from '../components/ExpensesTable';
let App = () => {
  return <div className="container mt-5">
  <div className="row">
    <div className="col-sm-6">
      <img src={Image} className="img-fluid" alt="" />
    </div>
    <div className="col-sm-6 mt-5">
      <div className="row tit">
        <h4 className="">wellcom to Momen Expense Manager </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. Ut enim ad minim veniam
        </p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid minima veniam aut. Iste quas nulla provident deleniti itaque enim dicta omnis reiciendis ipsam assumenda! Quos voluptatem commodi iusto qui possimus!</p>
      </div>
      <ExpenseForm />
    </div>
  </div>
<ExpensesTable />
</div>
}
export default App;