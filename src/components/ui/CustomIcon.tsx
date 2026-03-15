import React from 'react';

interface CustomIconProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
    src?: string; // URL for an image icon
    svgPath?: string; // Path data for an SVG icon
    className?: string;
}

/**
 * A flexible CustomIcon component that behaves like a Lucide icon.
 * You can pass an image `src`, raw `svgPath` data, or children (SVG content).
 * 
 * Usage:
 * <CustomIcon src="/icons/my-icon.svg" size={24} />
 * <CustomIcon svgPath="M10 10 H 90 V 90 H 10 L 10 10" size={24} color="red" />
 */
const CustomIcon: React.FC<CustomIconProps> = ({
    size = 24,
    color = 'currentColor',
    src,
    svgPath,
    className,
    style,
    children,
    ...props
}) => {
    const iconStyle = {
        width: size,
        height: size,
        display: 'inline-block',
        verticalAlign: 'middle',
        color: color,
        ...style,
    };

    if (src) {
        return (
            <img
                src={src}
                alt="icon"
                className={className}
                style={{ ...iconStyle, objectFit: 'contain' }}
                {...props as any}
            />
        );
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            style={iconStyle}
            {...props}
        >
            {svgPath ? <path d={svgPath} /> : children}
        </svg>
    );
};

export default CustomIcon;
