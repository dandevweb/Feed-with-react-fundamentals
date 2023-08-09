import './styles.css';

export function Avatar({ hasBorder = true, ...props }) {
    return (
        <img
            className={hasBorder ? 'avatarWithBorder' : 'avatar'}
            {...props}
        />
    )
}