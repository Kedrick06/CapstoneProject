import React, { useContext, useEffect }  from 'react'
import { ShopContext } from './shopContext';
import { Text, Div, Row, Col, Container } from "atomize";
import { Link } from 'react-router-dom';
import Loading from'./Loading';



const Home = () => {
    const {fetchAllProducts, products} = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()

        return () => {

        };
    }, [fetchAllProducts])


    if (!products) return <Loading/>
    return (
        <Container>
            <Row>
                {products.map(product => (
                    <Col key={product.id} size="3" >
                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                            <Div p="2rem">
                                <Div 
                                    h="20rem"
                                    bgImg={product.images[0].src}
                                    bgSize="cover"
                                    bgPos="center center"
                                    shadow="3"
                                    hoverShadow="4"
                                    transition="0.3s"
                                    m={{ b: "1.5rem" }}
                                    >
                                </Div>
                                <Text tag="h1" textWeight="300" textSize="subheader" textDecor="none" textColor="orange">{product.title}</Text>
                                <Text tag="h2" textWeight="300" textSize="body" textDecor="none" textColor="white">${product.variants[0].price}</Text>
                            </Div>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Home