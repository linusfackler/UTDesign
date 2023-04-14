import mongoose from 'mongoose';

const productSchema = mongoose.Schema (
    {

        first_name: {
            type: String
        },

        last_name: {
            type: String
        },

        available_times: {
            type: String
        },

        about_me: {
            type: String
        },

        image: {
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