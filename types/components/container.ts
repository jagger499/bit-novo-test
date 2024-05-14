import { ReactNode } from "react";

export interface ContainerProps {
    children: ReactNode;
    button?: boolean;
    center?: boolean;
    modal?: boolean;
    qr?: boolean;
}