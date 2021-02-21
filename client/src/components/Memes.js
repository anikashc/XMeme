import React, {useState} from 'react'
import {useSelector} from'react-redux'
import Meme from './Meme'
import Pagination from './Pagination'
import {Container, Spinner, Row, CardDeck} from 'react-bootstrap'


const Memes = ({setCurrentId}) => {
    const memes=useSelector((state)=>state.memes)

    // react hooks for replacing traditional class based methods.
    const [currentPage, setCurrentPage] = useState(1);
    const [memesPerPage] = useState(6);

    // calculation of memes per page
    const indexOfLastPage = currentPage * memesPerPage
    const indexOfFirstPage = indexOfLastPage - memesPerPage
    const currentMemes = memes.slice(indexOfFirstPage,indexOfLastPage)

    const paginate = pageNumber => setCurrentPage(pageNumber); 
  
    return (
        !memes.length? <Spinner animation="grow" size="lg"/> : (
            <>
                <CardDeck>
                    {currentMemes.map((meme)=>(
                        <Row className='px-5' key={meme.id} xs={12} sm={3} md={3} lg={3}>
                            <Meme post={meme} setCurrentId={setCurrentId}/>
                        </Row>
                    ))}
                </CardDeck>
                <Container style={{alignContent: 'center', flexWrap: 'wrap'}}>
                <Pagination memesPerPage={memesPerPage} totalMemes={memes.length} paginate={paginate} />

                </Container>
            </>
        )
    )
}

export default Memes
