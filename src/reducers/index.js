import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';


export default combineReducers({
auth: AuthReducer, //auth's state from AuthReducer
employeeForm: EmployeeFormReducer,
employees: EmployeeReducer

});
