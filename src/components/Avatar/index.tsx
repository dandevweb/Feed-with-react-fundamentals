import { ImgHTMLAttributes } from 'react';
import './styles.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
    return (
        <img
            className={hasBorder ? 'avatarWithBorder' : 'avatar'}
            {...props}
        />
    )
}