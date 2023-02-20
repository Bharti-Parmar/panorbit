import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import "./card.css";

const AccountCard = () => {
  return (
    <React.Fragment>
      <Card>
        <Card.Header className="px-5 py-4 font-weight-bold">
          Select an account
        </Card.Header>
        <ListGroup
          variant="flush"
          className="overflow-auto flex align-items-start"
        >
          <ListGroup.Item>
            <div className="float-left">
              <img
                src="cinqueterre.jpg"
                className="rounded-circle mr-2"
                alt=""
              />
              <span>Cras justo odio</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="float-left">Cras justo odio</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="float-left">Cras justo odio</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="float-left">Cras justo odio</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="float-left">Cras justo odio</span>
          </ListGroup.Item>
          {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
        </ListGroup>
      </Card>
    </React.Fragment>
  );
};

export default AccountCard;
