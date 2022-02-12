import PropTypes from "prop-types";
import s from './Statistics.module.css'

function Statistics({ items }) { 
    return (
        <ul className={s.statlist}>
            {items.map(item => (
                <li key={item.id}>
                    <span className={s.label}>{item.label}</span>
                    <span className={s.percentage}>{item.percentage}%</span>
                </li>
            ))}
        </ul>
    );  
}





Statistics.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number,
}

export default Statistics;
