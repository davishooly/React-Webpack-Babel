import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Container } from "semantic-ui-react";

const HomeView = () => {
  return (
    <div className="bg--success">
      <Container text textAlign="center" className="pageContent">
        <h1>{`Welcome to Ibiza!`}</h1>
        <h2>
          Be prepared to explore through great tour around The African
          Continent.
        </h2>
        <Link to="/form">
          <Button icon secondary inverted labelPosition="right">
            Register here
            <Icon name="right arrow" />
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default HomeView;
