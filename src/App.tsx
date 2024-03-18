import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <button onClick={() => setCount(i => i + 1)}>{count}</button>
        </div>
    );
}

export default App;