import Statistics from "./Statistics";

function StatisticsList({ items }) { 
    return (
        <section className="statistics">
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
