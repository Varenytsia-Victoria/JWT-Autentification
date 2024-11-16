const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')

const dbURI =
	'mongodb+srv://victoriavarenytsia:122333@auth.kz5nm.mongodb.net/?retryWrites=true&w=majority'
mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(result =>
		app.listen(3000, () => console.log('Server is running on port 3000'))
	)
	.catch(err => console.log('Database connection error:', err))

app.get('/', (req, res) => res.render('home'))
app.get('/smoothies', (req, res) => res.render('smoothies'))
