import mongoose from 'mongoose';

const reservationSchema = mongoose.Schema (
    {
    
        time: {
            type: String
        },

        student_id: {
            type: String
        },

        tutor_id: {
            type: String
        },

        subject: {
            type: String
        }
    }
)

export const Reservation = mongoose.model('Reservation', reservationSchema)


