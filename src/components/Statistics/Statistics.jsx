import { Title } from "./Title/Title";
import { StatList } from "./StatList/StatList";
import data from 'patch/data.json';

export const Statistics = () => {
    return (
        <section className="statistics">
            <Title title="Upload stats" />
            <StatList stats={data}/>
        </section>
    );
}