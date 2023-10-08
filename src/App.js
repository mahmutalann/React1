import React, { Component } from 'react'
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Col, Container, Row } from 'reactstrap';

export default class App extends Component {
  state = { currentCategory: "", products: [] };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/productss"
    if (seoUrl) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => thissetState({ products: data }));;
  }

  render() {
    let categoryInfo = { title: "Category List", x: "test" }
    let productInfo = { title: "Product List" }
    return (
      <div className="App">
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList products={this.state.products} currentCategory={this.state.currentCategory} info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


