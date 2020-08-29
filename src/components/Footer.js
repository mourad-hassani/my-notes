import React from 'react';
import { Navbar } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <Navbar className="fixed-bottom">
            <button className="btn"><FontAwesomeIcon icon={faPlusCircle} size="2x" /></button>
        </Navbar>
    );
}