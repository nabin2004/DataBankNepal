import React, { useState } from 'react';

export default function SearchBar() {
    const [searchKey, setSearchKey] = useState('');
    const [matchingButtons, setMatchingButtons] = useState([]);
    const [searchPerformed, setSearchPerformed] = useState(false);

    const handleInputChange = (event) => {
        setSearchKey(event.target.value);
        setSearchPerformed(false);

        // Handle search directly while typing
        const searchValue = event.target.value.trim().toLowerCase();
        const allButtons = document.querySelectorAll('button');
        const matchedButtons = Array.from(allButtons).filter(button => button.textContent.toLowerCase().includes(searchValue));
        setMatchingButtons(matchedButtons);
        setSearchPerformed(searchValue !== ''); 
    };

    return (
        <form className="search-container">
            <div className="search-wrapper display-inline flex sm:gap-2">
                <input 
                    type="text" 
                    className={`search-input hover:bg-white hover:text-black placeholder:text-white placeholder:font-inter mt-4 px-1 py-1 sm:px-3 sm:py-2 w-20 sm:w-40 rounded-full border-2 border-black bg-[#A41034] shadow-md focus:outline-none focus:border-gray-400 text-white ${window.innerWidth < 400 ? 'sm:w-10' : ''}`}
                    value={searchKey} 
                    onChange={handleInputChange} 
                    placeholder="Search..." 
                />
            </div>
            {searchPerformed && matchingButtons.length > 0 && (
                <div className="overlay">
                    <div className="overlay-content">
                        {matchingButtons.map((button, index) => (
                            <div key={index}>
                                <a href="/insights/datacard">{button.textContent}</a>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </form>
    );
}
