import Statistics from "./Statistics";
import s from './Statistics.module.css'

function StatisticsList({ items }) { 
    return (
        <section className={s.statistics}>
            <h2 className="title">Upload stats</h2>
            <ul className="stat-list">               
                {items.map(item => (
                   
                        <Statistics key={item.id}
                            label={item.label}
                            percentage={item.percentage} />
                    ))}
            </ul>
        </section>
    )
};

export default StatisticsList;
