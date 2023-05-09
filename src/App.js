import "./App.css";
import Characters from "./components/Characters";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <header className="App-header" style={{ padding: "20px" }}>
                <h1>React Coding Exercise</h1>
            </header>
            <section className="App-section">
                <Container>
                    <Characters />
                </Container>
            </section>
        </div>
    );
}

export default App;
