import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiAlignJustify } from 'react-icons/fi';

export default function Header() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <div className="header">
            <h1>.CineHaven</h1>
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/">Movies</Link>
                <Link to="/">TV Shows</Link>
                <Link to="/">Playlist</Link>
            </div>
            <FiSearch className="search-icon" />
            <FiAlignJustify className="toggle-hide" onClick={toggleDropdown} />
            {dropdownVisible && (
                <div className="dropdown-nav">
                    <Link to="/">Home</Link>
                    <Link to="/">Movies</Link>
                    <Link to="/">TV Shows</Link>
                    <Link to="/">Playlist</Link>
                    <FiSearch className="Dropdownsearech-icon" />
                </div>
            )}
        </div>
    );
}
