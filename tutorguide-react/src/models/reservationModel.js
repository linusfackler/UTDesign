import mongoose from 'mongoose';

const reservationSchema = mongoose.Schema (
    {
    
        time: {
            type: String
        },

        student: {
            type: String
        },

        tutor: {
            type: String
        },

        subject: {
            type: String
        }
    }
)

export const Reservation = mongoose.model('Reservation', reservationSchema)


