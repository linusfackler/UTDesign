import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { Tutor } from './models/tutorModel.js'
import { Student } from './models/studentModel.js'
import { Reservation } from './models/reservationModel.js'

const app = express();
const PORT = 8080;

app.get(`/` , (req, res) => {
    res.send(`Hello from Homepage.`);
});

app.listen(
    PORT,
    () => console.log(`its alive on http://localhost:${PORT}`)
)

app.use(express.json())

app.use(cors());

mongoose.connect("mongodb+srv://APIconnection:nZiP2SO10RPgv1xo@t22tutordatabase.0b8tf1u.mongodb.net/TuTour_Guide?retryWrites=true&w=majority")
.then(() => {
    console.log('connected to MongoDB')
}).catch(() => {
    console.log(error)
})


//Tutor routes --------------------------------------------------------------------
app.get(`/tutors` , async(req, res) => {
    try {
        var mysort = { first_name: 1 }
        const tutors = await Tutor.find({}).sort(mysort)
        res.status(200).json(tutors);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

app.get('/tutors/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const tutor = await Tutor.findById(id);
        res.status(200).json(tutor);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

app.get('/tutors/email/:email', async(req, res) => {
    try {
        const {email} = req.params;
        const tutor = await Tutor.findOne({email})
        if (!tutor) {
            return res.status(404).json({ error: 'Tutor not found' });
          }
        res.status(200).json(tutor);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});


app.get(`/tutors/new`, (req, res) => {
    
});

app.post('/tutors', async(req, res) => {
   try {
        const tutor = await Tutor.create(req.body)
        res.status(200).json(tutor);
   } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
   }
});

//Student routes --------------------------------------------------------------------
app.get(`/students` , async(req, res) => {
    try {
        const students = await Student.find({})
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

app.get('/students/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const student = await Student.findById(id);
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

app.get('/students/email/:email', async(req, res) => {
    try {
        const {email} = req.params;
        const student = await Student.findOne({email})
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
          }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

app.get(`/students/new`, (req, res) => {
    
});

app.post('/students', async(req, res) => {
   try {
        const student = await Student.create(req.body)
        res.status(200).json(student);
   } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
   }
});

app.put('/students/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const student = await Student.findByIdAndUpdate(id, req.body);
        console.log(req.body)
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
  
      res.status(200).json(student);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

//reservation routes --------------------------------------------------------------------
app.get(`/reservations` , async(req, res) => {
    try {
        const reservations = await Reservation.find({})
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

app.get(`/reservations/:id`, async(req, res) => {
    try {
        const {id} = req.params;
        const reservation = await Reservation.findById(id);
        res.status(200).json(reservation);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

app.get('/reservations/student_id/:student_id', async(req, res) => {
    try {
        const {student_id} = req.params;
        const app = await Reservation.findOne({student_id})
        if (!app) {
            return res.status(404).json({ error: 'Appointments not found' });
          }
        res.status(200).json(app);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

app.get(`/reservations/new`, (req, res) => {
    
});

app.post(`/reservations`, async(req, res) => {
    try {
        const reservation = await Reservation.create(req.body)
        res.status(200).json(reservation);
   } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
   }
});
