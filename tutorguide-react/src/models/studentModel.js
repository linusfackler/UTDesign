import mongoose from 'mongoose';

const studentSchema = mongoose.Schema (
    {
        
        id: {
            type: Number
        },

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

        appointments: {
            type: Number
        }


    }
)

export const Student = mongoose.model('Student', studentSchema)


