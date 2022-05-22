

export const SimpleImage = ({ props }) => {
    const { src, alt,
        withBadge, badgeContent, badgeStyle } = props;
    return <>
        {
            withBadge ? <div className="imgWithBadge">
                <img alt={alt}
                    src={require('../Assets/images/' + src).default} />
                <span style={badgeStyle} >{badgeContent}</span>
            </div> : <img alt={alt}
                src={require('../Assets/images/' + src).default} />
        }

    </>
}

export const ImageWithBadge = ({ props }) => {
    const { src, alt } = props;
    return <img alt={alt}
        src={require('../Assets/images/' + src).default} />
}

export const ProfilImage = ({ props }) => {
    const { src, alt } = props;
    return <img alt={alt}
        src={require('../Assets/images/profils/' + src).default} />
}

export const IllustrationImage = ({ props }) => {
    const { src, alt } = props;
    return <img alt={alt}
        src={require('../Assets/images/illustrations/' + src).default} />
}


// export const ProductImage = ({ props }) => {
//     const { src, alt } = props;
//     return <img alt={alt}
//         src={require('../Assets/images/produits/' + src).default} />
// }

export const UrlImage = ({ props }) => {
    const { src, alt } = props;
    const className = props.className ? props.className : '';
    const id = props.id ? props.id : '';
    return <img alt={alt} className={className}
        src={src} id={id} />
}