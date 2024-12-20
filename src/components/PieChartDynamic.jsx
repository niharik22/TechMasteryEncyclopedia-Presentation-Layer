import { Box, Typography } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";

const PieChartDynamic = ({ data, title }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Function to generate colors dynamically
  const generateColors = (data) => {
    const hslBase = [
      "hsl(104, 70%, 50%)",
      "hsl(162, 70%, 50%)",
      "hsl(291, 70%, 50%)",
      "hsl(48, 70%, 50%)",
      "hsl(12, 70%, 50%)",
    ];
    return data.map((item, index) => ({
      ...item,
      color: hslBase[index % hslBase.length],
    }));
  };

  const chartData = generateColors(data);

  return (
    <Box width="100%" height="100%">
      <ResponsivePie
        data={chartData}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: colors.grey[100],
              },
            },
            legend: {
              text: {
                fill: colors.grey[100],
              },
            },
            ticks: {
              line: {
                stroke: colors.grey[100],
                strokeWidth: 1,
              },
              text: {
                fill: colors.grey[100],
              },
            },
          },
          legends: {
            text: {
              fill: colors.grey[100],
            },
          },
        }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={colors.grey[100]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        enableArcLabels={true}
        arcLabelsRadiusOffset={0.5}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        arcLabel={(e) => `${e.value}%`}
        tooltip={({ datum }) => (
          <div
            style={{
              background: "white",
              padding: "5px 10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              color: "black",
            }}
          >
            <strong>{datum.id}</strong>: {datum.value}%
          </div>
        )}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        motionConfig="wobbly"
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
      <Typography variant="h6" align="center" mt={2} color={colors.grey[100]}>
        {title}
      </Typography>
    </Box>
  );
};

export default PieChartDynamic;
