import React, {useState, useEffect} from 'react'
import {Form, Button, Alert} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { createMeme, updateMeme } from '../actions/memes'

function isImageUrl(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/)!=null)
}
const Post = ({currentId, setCurrentId}) => {


    const [memeData, setMemeData] = useState({
        name: '',
        caption: '',
        url: '',
        selectedFile: ''

    })
    const [urlError,setUrlError]= useState('')
    
    // sets meme to the existing meme if in edit mode
    const meme=useSelector((state)=> currentId?state.memes.find((p)=>p.id===currentId):null)
    const dispatch = useDispatch()

    // the component gets updated as soon as there is any change in memeData.
    useEffect(()=>{
        if(meme) setMemeData(meme)
    },[meme])
    const handleSubmit=(e)=>{

        // to prevent page refresh upon submit
        e.preventDefault()

        // check if the image is .jpeg, .jpg, .png or image type of not
        if(!isImageUrl(memeData.url)){
            setUrlError('Entered Link is not an image!')
        }
        else{
            setUrlError('')

            // if currentId is set that memes it is in edit mode
            if(currentId){
                dispatch(updateMeme(currentId, memeData))
            }
            // else its in create mode
            else{
                dispatch(createMeme(memeData))
            }
        }

        // clear the form after submission
        clear()
        
    }
    const clear = () =>{
        // resets the edit mode to new mode
        setCurrentId(null)

        // clears the form
        setMemeData({
            name: '',
            caption: '',
            url: '',
            selectedFile: ''
    
        })
    }
    return (
        <React.Fragment>
            <Form className='py-1' onSubmit={handleSubmit}>
                <h2 style={{color: 'white', fontFamily: 'monospace'}}>{currentId? "Edit":"Post"} a meme</h2>
                {urlError?<Alert variant='danger'>{urlError}</Alert>:null}
                
                <Form.Group controlId="name">
                    <Form.Label style={{color: 'white'}}>Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter your name'
                        value={memeData.name}
                        required
                        disabled={currentId}
                        onChange={(e)=>setMemeData({...memeData, name: e.target.value})}
                    ></Form.Control>
                    
                </Form.Group>
                <Form.Group controlId="caption">
                    <Form.Label style={{color: 'white'}}>Caption</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter the most relatable caption'
                        value={memeData.caption}
                        required
                        onChange={(e)=>setMemeData({...memeData, caption: e.target.value})}
                    ></Form.Control>
                </Form.Group>
                
                <Form.Group controlId="url">
                    <Form.Label style={{color: 'white'}}>Meme URL</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter the URL of a funny meme'
                        value={memeData.url}
                        required
                        onChange={(e)=>setMemeData({...memeData, url: e.target.value})}
                    ></Form.Control>
                    
                </Form.Group>
                

                
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
        </React.Fragment>
    )
}

export default Post
