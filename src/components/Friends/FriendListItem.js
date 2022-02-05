import PropTypes from "prop-types";
import s from './Friend.module.css'

function Friend({ avatar, name, status }) { 
    return (
        <li className={s.item}>
            <span className={s.status}style={{color: status ? "green" : "red"}}> ● </span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>        
        </li>
    )
}


Friend.propTypes = {
    avatar: PropTypes.string,
    name :PropTypes.string,
    status: PropTypes.bool,
}

export default Friend;