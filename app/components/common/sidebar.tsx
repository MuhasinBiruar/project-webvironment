"use client";
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-green/theme.css';
import 'primereact/resources/primereact.css';

export default function SideBar() {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <>
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <h2>Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>
            <footer className="fixed bottom-0 left-0 right-0 bg-white/0 border-t border-gray-200/0 p-4 shadow-lg">
                <Button 
                    icon="pi pi-arrow-right" 
                    onClick={() => setVisible(true)}
                    label="->"
                    className="p-button-success"
                />
            </footer>
        </>
    )
}
        