import mongoose from 'mongoose';

const studentSchema = mongoose.Schema (
    {

        first_name: {
            type: String
        },

        last_name: {
            type: String
        },
        
        password: {
            type: String
        },

        email: {
            type: String
        },

        favorites: {
            type: Number
        },

        favorite_tutors: {
            type: String
        },

        appointments: {
            type: Number
        }


    }
)

export const Student = mongoose.model('Student', studentSchema)


