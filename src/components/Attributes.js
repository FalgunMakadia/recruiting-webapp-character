import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { ATTRIBUTE_LIST } from "../utils/consts";

const Attributes = ({
    attributes,
    handleAttributePlusChange,
    handleAttributeMinusChange,
    modifier,
}) => {
    return (
        <Card
            style={{ width: "19rem", textAlign: "center", marginTop: "15px" }}
        >
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h3>Attributes</h3>
                </ListGroup.Item>
                {ATTRIBUTE_LIST.map((attr, index) => (
                    <ListGroup.Item key={index}>
                        <span>
                            {attr} : {attributes[attr]}{" "}
                        </span>
                        <button onClick={() => handleAttributePlusChange(attr)}>
                            +
                        </button>
                        <span> </span>
                        <button
                            onClick={() => handleAttributeMinusChange(attr)}
                        >
                            -
                        </button>
                        <span> Modifier: {modifier[attr + "Modifier"]}</span>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Card>
    );
};

export default Attributes;
