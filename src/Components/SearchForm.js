import React, { useState } from 'react'

const SearchForm = ({ searchText }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        searchText(text);
        setText('');
    }

    return (
        <>
            <div className='mt-2'>
                <form className='shadow-lg'>
                    <input type='text'
                        onChange={(e) => setText(e.target.value)}
                        placeholder='e.g Politics'
                        value={text}
                        className='py-2 px-2 outline-0 rounded-l-lg w-100'
                    />

                    <button onClick={handleSubmit}
                        className='bg-neutral-700 hover:bg-blue-400 py-2 px-2 text-white rounded-r-lg'>
                        Search
                    </button>
                </form>
            </div>
        </>
    )
}

export default SearchForm;