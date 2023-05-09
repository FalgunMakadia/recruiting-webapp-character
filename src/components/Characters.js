import { Fragment, useState } from "react";
import Character from "./Character";
import { Button } from "react-bootstrap";

const Characters = () => {
    const [chars, setChars] = useState([<Character count={1} key={1} />]);
    const [charCount, setCharCount] = useState(2);

    const addChar = () => {
        setChars([...chars, <Character count={charCount} key={charCount} />]);
    };

    return (
        <Fragment>
            <Button
                onClick={() => {
                    setCharCount(charCount + 1);
                    addChar();
                }}
                style={{ margin: "20px" }}
            >
                Add New Character
            </Button>
            {chars}
        </Fragment>
    );
};

export default Characters;
