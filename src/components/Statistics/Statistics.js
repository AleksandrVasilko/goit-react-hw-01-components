import PropTypes from "prop-types";

function Statistics({ label, percentage }) { 
    return (
        <li>              
            <span className="label">{label}</span>                   
            <span className="percentage">{percentage}</span>     
        </li>
    )
};

Statistics.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number,
}

export default Statistics;
