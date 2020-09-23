import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from './shopContext';
import { Text, Div, Button, Row, Col, Container } from 'atomize'
import Loading from './Loading';

const ThreadPage = () => {
    let { id } = useParams()
    const { fetchProductWithId, addItemToCheckout, product } = useContext(ShopContext)
 

    useEffect(() => {
        fetchProductWithId(id)
        
       
        return () => {
          
        };
    
    }, [ fetchProductWithId, id])

    if (!product.title) return <Loading />
    return (
        <Container>
            <Row m ={{ b: "2rem" }} p="2rem">
                <Col>
                    <Div bgImg={product.images[0].src} shadow="3" bgSize="cover" w="100%" bgPos="center center" h="40rem"/>
                </Col>
                <Col>
                    <Text tag="h1" textColor="white" textWeight="200" m={{ y: '2rem' }}>{product.title}</Text>
                    <Text tag="h3" m={{ y: '2rem' }} textWeight="200" textColor="orange">${product.variants[0].price}</Text>
                    <Text tag="p" textSize="paragraph" textColor="white" textWeight="200">{product.description}</Text>
                    <Button rounded="0" shadow="3" bg="white" m={{ y: '2rem' }} onClick={() => addItemToCheckout(product.variants[0].id, 1)}>Add To Cart</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default ThreadPage;