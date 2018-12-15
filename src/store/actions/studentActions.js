class StudentActions {

    static SEARCH_STUDENT = "SEARCH_STUDENT";
    static SEARCH_STUDENT_SUCCESSFUL = "SEARCH_STUDENT_SUCCESSFUL";
    static SEARCH_STUDENT_FAILED = "SEARCH_STUDENT_FAILED";

    static EDIT_STUDENT = "EDIT_STUDENT";
    static EDIT_STUDENT_SUCCESSFUL = "EDIT_STUDENT_SUCCESSFUL";
    static EDIT_STUDENT_FAILED = "EDIT_STUDENT_FAILED";

    static EDIT_STUDENT_PIC = "EDIT_STUDENT_PIC";
    static EDIT_STUDENT_PIC_SUCCESSFUL = "EDIT_STUDENT_PIC_SUCCESSFUL";
    static EDIT_STUDENT_PIC_FAILED = "EDIT_STUDENT_PIC_FAILED";

    static  searchStudent(data){
        return {
            type : this.SEARCH_STUDENT,
            data : data
        }
    }
    static searchStudentSuccessul(data){
        return {
            type : this.SEARCH_STUDENT_SUCCESSFUL,
            data: data
        }
    }
    static searchStudentFailed(data){
        return {
            type : this.SEARCH_STUDENT_FAILED ,
            data: data
        }
    }

    static editStudent(data){
        return {
            type : this.EDIT_STUDENT,
            data : data
        }
    }
    static editStudentSuccessul(data){
        return {
            type : this.EDIT_STUDENT_SUCCESSFUL,
            data: data
        }
    }
    static editStudentFailed(data){
        return {
            type : this.EDIT_STUDENT_FAILED ,
            data: data
        }
    }

}

export default StudentActions;