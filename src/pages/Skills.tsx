import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ComposedChart,
  CartesianGrid,
} from "recharts";

const Skills = () => {
  const data = [
    {
      name: "HTML",
      pv: 80,
    },
    {
      name: "CSS",
      pv: 80,
    },
    {
      name: "JavaScript",
      pv: 70,
    },
    {
      name: "TypeScript",
      pv: 60,
    },
    {
      name: "React",
      pv: 80,
    },
    {
      name: "NextJs",
      pv: 60,
    },
    {
      name: "NodeJs",
      pv: 50,
    },
    {
      name: "PHP",
      pv: 40,
    },
    {
      name: "MySQL/MongoDB",
      pv: 50,
    },
    {
      name: "Python",
      pv: 50,
    },
    {
      name: "C++",
      pv: 50,
    },
    {
      name: "C",
      pv: 30,
    },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="skills">
      <Navbar />

      <div className="projectsh4">
        <h4>Skills</h4>
      </div>

      <div className="graf">
        <BarChart width={1300} height={500} data={data} barSize={60}>
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 30, right: 30 }}
          />
          <YAxis domain={[0, 100]} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>

      <div className="graf2">
        <ComposedChart
          layout="vertical"
          width={380}
          height={450}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" domain={[0, 100]} />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        </ComposedChart>
      </div>

      <Footer />
    </div>
  );
};

export default Skills;
