import { StaticList, StaticItem, Label } from "./StatList.styled";

export const StatList = ({ stats }) => {
    
    return (
        <StaticList>
            {stats.map(({ id, label, percentage }) =>
                <StaticItem key={id}>
                    <Label>{label}</Label>
                    <span className="percentage">{percentage}</span>
                </StaticItem>)
            }
        </StaticList>
    );
}