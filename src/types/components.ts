import { CSSProperties, ReactNode, Ref } from 'react';
import { CalendarData, CalendarItems } from './google';

export interface HeaderProps {
    onNext: () => void;
    onPrev: () => void;
    now: Date;
}

export interface TextProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | null;
    fontSize?: string;
    fontWeight?: string;
    color?: string;
}

export interface ButtonProps {
    children: ReactNode;
    fullWidth?: boolean;
    color?: string;
    gray?: boolean;
    cyan?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    width?: string;
    height?: string;
    fontSize?: string;
    style?: CSSProperties;
}

export interface FlexProps {
    container?: boolean;
    item?: boolean;
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-revers';
    alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'column' | 'row';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    spacing?: string;
    sm?: boolean;
    lg?: boolean;
    ref?: Ref<HTMLDivElement>;
}

export interface ListProps {
    day: string;
    date: Date;
    items: CalendarItems[];
}

export interface CalendarProps {
    items: CalendarData;
    week: Date[];
}
