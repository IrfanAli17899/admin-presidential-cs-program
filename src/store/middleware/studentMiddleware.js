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
    
    static update(data) {
        return dispatch => {
            dispatch(StudentActions.editStudent(data))
            axios.post(`${Path.STUDENT_EDIT}`, {
                data:data.userData,
                studentCnic:data.originalCnic,
                databaseToken: data.databaseToken
            })
            .then((response) => {
                console.log("response from server ",response);
                if (!response.data.success) {
                    dispatch(StudentActions.editStudentFailed({errorMessage:response.data.message}));
                }
                else {
                    console.log("else",response.data.studentData);
                    
                    dispatch(StudentActions.editStudentSuccessul({success: true, data: response.data.studentData}));
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch(StudentActions.editStudentFailed({errorMessage:"Something Went Wrong, Please Try Again!"}));
            });
        }
    }
}

export default StudetnMiddleware;