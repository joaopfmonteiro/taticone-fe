import { min } from "rxjs";

export type ErrorMap = Record<
string,
Partial<Record<string, string | ((e: any) => string)>>>;

export const ERROR_MSGS: ErrorMap = {
    firstName: {
        required: 'The name is required.'
    },
    lastName:{
        required: 'The last name is required.'
    },
    username:{
        required: 'The username is required.',
        minlength:  'The name must be at least 3 characters long.'
    },
    password:{
        required: 'The password is required.',
        minlength: 'The password must be at least 8 characters'
    },
    email:{
        required: 'The email is required.',
    },
    role:{
        required: 'You must select one account type.'
    }
}