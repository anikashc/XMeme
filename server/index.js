import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/db.js'
import cors from 'cors';

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import postRoutes from './routes/posts.js';

const app = express();

connectDB()

// used to limit the file size during api calls
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

//cors should be above the routes otherwise causing problems
app.use(cors());

// swagger docs
const swaggerOptions={
  definition:{
      openapi:'3.0.0',
      info:{
          title:'XMeme API',
          version:'1.0.0',
          description:'XMeme API for memes',
          contact:{
              name:'Anikash Chakraborty',
              email:'anikashchakraborty@gmail.com'
          },
          host: 'http://localhost:8081',
          basePath: '/memes'
      }
  },
  apis:["./routes/posts.js"]
}
const swaggerDocs=swaggerJSDoc(swaggerOptions);
app.use('/swagger-ui',swaggerUI.serve,swaggerUI.setup(swaggerDocs));

// all apis have the baseURL as /memes
app.use('/memes', postRoutes);

// just a home page for the apis
app.get('/',(req,res)=>{
  res.send('Hello to XMeme API. Go to /memes to see data')
})

// port
const PORT = process.env.PORT|| 8081;

app.listen(PORT, console.log(`App is running in development mode on port ${PORT}`))