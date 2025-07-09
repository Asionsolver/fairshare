"use client";

import { Authenticated } from "convex/react";

export default function DashboardLayout({ children }) {
    return (
        <Authenticated>
            <div className="container mx-auto mt-24 mb-20">{children}</div>
        </Authenticated>
    )
}