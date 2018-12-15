import StudentActions from '../actions/studentActions';

function studentReducer(state = {
    student: null,
    isError: false,
    isLoading: false,
    errorMessage: false,
    userId: null,
    successMessage: null
}, action) {
    switch (action.type) {
        
        case StudentActions.SEARCH_STUDENT:
            return {
                ...state,
                errorMessage:null,
                successMessage:null,
                isLoading : true,
            };
        case StudentActions.SEARCH_STUDENT_SUCCESSFUL:
            console.log('action ',action.data);
            return {
                ...state,
                isError:false,
                isLoading : false,
                student:action.data.data,
                errorMessage:null,
            };
        case StudentActions.SEARCH_STUDENT_FAILED:
            return {
                ...state,
                errorMessage: action.data.errorMessage,
                successMessage:null,
                isError: true,
                isLoading : false
            };
        case StudentActions.EDIT_STUDENT:
            return {
                ...state,
                errorMessage:null,
                successMessage:null,
                isLoading : true,
            };
        case StudentActions.EDIT_STUDENT_SUCCESSFUL:
            console.log('action ',action.data);
            return {
                ...state,
                isError:false,
                isLoading : false,
                student:action.data.data,
                errorMessage:null,
            };
        case StudentActions.EDIT_STUDENT_FAILED:
            return {
                ...state,
                errorMessage: action.data.errorMessage,
                successMessage:null,
                isError: true,
                isLoading : false
            };
        
        default:
            return state;
    }
}
export default studentReducer;