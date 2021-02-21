import React from 'react'
import moment from 'moment'
import {Card, Button } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { deleteMeme, likeMeme } from '../actions/memes'
const Meme = ({post, setCurrentId}) => {

    // dispatch used to invoke redux actions
    const dispatch = useDispatch()
    return (
        <div>
            <Card  style={{ width: '16rem' }} className="my-3">
                        <Card.Img src={post.url} variant="top"  className='card-image' style={{ maxHeight: '14rem' }} />
                        <Card.Body>
                            
                        <Card.Title>{post.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{moment(post.createdAt).fromNow()}</Card.Subtitle>
                        <Card.Text>
                            {post.caption}
                        </Card.Text>
                        <Button size='sm' variant="primary" className='mr-5' onClick={()=>dispatch(likeMeme(post.id))}><i className="far fa-heart mr-2 "></i>{post.likeCount}</Button> 
                        <Button size='sm' variant="primary" className='mr-5' onClick={()=>dispatch(deleteMeme(post.id))} ><i class="fas fa-trash-alt"></i></Button>
                        <Button size='sm' variant="primary" onClick={()=>{
                            setCurrentId(post.id)
                            window.scrollTo({top: 0, behavior: 'smooth'})
                        }} ><i class="fas fa-edit"></i></Button>
                        </Card.Body>
                    </Card>
        </div>
    )
}

export default Meme
