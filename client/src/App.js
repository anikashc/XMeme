import React, {useEffect, useState} from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Post from './components/Post'
import {getMemes} from './actions/memes'
import {useDispatch} from 'react-redux'
import Memes from './components/Memes'
function App() { 

  const dispatch= useDispatch();

  // receives data from the Post.js if the app has been set to edit mode or not.
  // we could have done it without calling it to App.js but we need to call the API
  // to update the data and again send it back to display updated component.
  const [currentId,setCurrentId]=useState(null)

  // used to do component changes as soon as there is any activity with currentId
  useEffect(()=>{
      dispatch(getMemes());
  },[currentId, dispatch])
  return (
    <>
      <Header />
      <main>
        <Container className='py-3'>
          <Row>
            <Col xs={12} md={3} sm={12}>
              <Post currentId={currentId} setCurrentId={setCurrentId}/>
            </Col>
            <Col xs={12}  md={9} sm={12} className='pt-5'>
              <Memes setCurrentId={setCurrentId}/>
            </Col>
          </Row>
          
        </Container>
        
          
        
      </main>
      
      <Footer />
      
    </>
  );
}

export default App;
