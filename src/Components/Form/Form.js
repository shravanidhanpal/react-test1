import React,{ useRef} from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import classes from './Form.module.css';

const Form = (props) => {
  const idRef = useRef();
  const priceRef = useRef();
  const dishRef = useRef();
  const tableRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const id = idRef.current.value;
    const sp = priceRef.current.value;
    const pn = dishRef.current.value;
    const tab = tableRef.current.value;
    const obj = {
      id , sp, pn ,tab
    }
    props.addItem(obj);
    idRef.current.value = '';
    priceRef.current.value = '';
    dishRef.current.value = '';
    tableRef.current.value = 'Choose';
}
    return (
      <Card className={classes.form}>
        <form onSubmit={submitHandler}>
          <label htmlFor="product-id">Unique-Order-Id:</label>
          <input ref={idRef} type="number" required/>
          <label>choose-Price:</label>
          <input ref={priceRef} type="number" required/>
          <label>Dish-Name:</label>
          <input ref={dishRef} type="text" required/>
          <label htmlFor="category">Choose a Table:</label>
          <select ref={tableRef}>
            <option value="Choose">Choose</option>
            <option value="table-1">table-1</option>
            <option value="table-2">table-2</option>
            <option value="table-3">table-3</option>
          </select>
          <Button >Add to bill</Button>
        </form>
      </Card>
    );
}
export default Form;