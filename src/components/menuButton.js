export default props => {

    return (
            <div className={props.classes} onClick={props.onClick}>{props.btnName}</div>
    )
}