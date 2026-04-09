"use client";
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Link } from 'react-router';

export default function SideBar() {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <>
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <div className="flex flex-col gap-6">
                    <h2 className="font-bold">Blog Posts</h2>
                    <Link
                        to="/aiinfo"
                        className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
                    >
                        How AI impacts our environment
                    </Link>
                </div>

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
