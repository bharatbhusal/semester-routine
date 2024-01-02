import React from 'react';
import Table from "./Table";

const App = () => {
    return (
        // Main container for the application
        <div className='routine flex-col'>
            <h1>Class Routine</h1>
            {/* Rendering the Table component */}
            <Table />
        </div>
    );
};

export default App;
