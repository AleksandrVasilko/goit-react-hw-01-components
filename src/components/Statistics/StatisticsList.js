import Statistics from "./Statistics";
import s from './Statistics.module.css'

function StatisticsList({ title, children }) { 
    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}
            
            {children}
        </section>
    )
};

export default StatisticsList;
