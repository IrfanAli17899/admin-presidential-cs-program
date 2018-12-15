import StudentActions from '../actions/studentActions';
import axios from 'axios';
import Path from '../../config/path';

class StudetnMiddleware {

    static search(data) {
        return dispatch => {
            dispatch(StudentActions.searchStudent(data))
            axios.post(`${Path.STUDENT_SEARCH}`, {
                type:data.type,
                value:data.value,
                databaseToken: data.databaseToken
            })
            .then((response) => {
                console.log("response from server ",response);
                if (!response.data.success) {
                    dispatch(StudentActions.searchStudentFailed({errorMessage:response.data.message}));
                }
                else {
                    console.log("else",response.data.userData);
                    
                    dispatch(StudentActions.searchStudentSuccessul({success: true, data: response.data.userData}));
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch(StudentActions.searchStudentFailed({errorMessage:"Something Went Wrong, Please Try Again!"}));
            });
        }
    }   
}

export default StudetnMiddleware;