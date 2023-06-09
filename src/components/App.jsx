import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
function App() {
    return (
        <div>
            <Header />
            <Footer />
            {/* //using arrow function to create a function below */}
            {notes.map(noteItem => 
                    <Note
            key={noteItem.key}
            title={noteItem.title}
            content={noteItem.content}
        />)}
        </div>
    )
}
export default App;