import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Dante from 'Dante2';

const Home = () => {
    const editorChange = editor => {
        console.log(editor.emitSerializedOutput());
    };

    return (
        <div>
            <h1>Create Blog Page</h1>
            <Dante body_placeholder={'Write something'} onChange={editorChange} />;
        </div>
    );
};

export default Home;
