"use client";

import { useEffect, useState } from "react";
import HireExpertPopup from "../hire-expert-popup";

export default function AutoPopupOnLoad() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setOpen(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    return <HireExpertPopup open={open} onClose={() => setOpen(false)} />;
}
