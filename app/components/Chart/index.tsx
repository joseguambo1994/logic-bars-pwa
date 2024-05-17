import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts";
import { colors } from "~/utils/colors";

interface Score {
    category: string;
    score: number;
}

interface Props {
    data: Score[];
}

const Chart = ({ data }: Props) => {
    return (
        <div className="bg-transparent flex items-center justify-center">            <RadarChart outerRadius={90} width={400} height={300} data={data}>
            <PolarGrid stroke={colors.green} />
            <PolarAngleAxis stroke={colors.pink} dataKey="category" />
            <PolarRadiusAxis angle={30} domain={[0, 10]} stroke={colors.transparent} />
            <Radar name="Juan" dataKey="score" stroke="#EE840" fill={colors.cyan} fillOpacity={0.8} />
        </RadarChart>
        </div>
    );
}

export default Chart;