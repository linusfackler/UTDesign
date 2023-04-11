import mongoose from 'mongoose';

const productSchema = mongoose.Schema (
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

        email: {
            type: String
        },

        subjects: {
            type: String
        },

        appointments: {
            type: Number
        }


    }
)

export const Tutor = mongoose.model('Tutor', productSchema)

