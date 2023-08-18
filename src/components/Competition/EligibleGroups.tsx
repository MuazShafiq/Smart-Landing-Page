function EligibleGroups(props) {
    console.log(props)
    return (
        <>
            <div className='relative'>
                <img src={props.eligible.imgSrc} alt={props.eligible.imgAlt} className={props.eligible.imgStyle} />
                <div className={props.eligible.pDivStyle}>
                    <p className={props.eligible.pStyle}>
                        {props.eligible.pText}
                    </p>
                </div>
            </div>
        </>
    )
}

export default EligibleGroups