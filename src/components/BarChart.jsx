import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockLangData as originalData } from "../data/mockData";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Sort the data in descending order by percentage
  const data = [...originalData].sort((a, b) => b.percentage - a.percentage);

  // Function to generate a green color palette
  const generateGreenPalette = (count) => {
    const startColor = [0, 255, 102]; // Bright Green (RGB from the uploaded image)
    const endColor = [34, 139, 34]; // Darker Forest Green (for contrast)
    const palette = [];

    for (let i = 0; i < count; i++) {
      const ratio = i / (count - 1);
      const color = `rgb(${startColor
        .map((start, index) =>
          Math.floor(start + (endColor[index] - start) * ratio)
        )
        .join(",")})`;
      palette.push(color);
    }

    return palette;
  };

  // Generate colors dynamically based on the number of data points
  const dynamicColors = generateGreenPalette(data.length);

  return (
    <ResponsiveBar
      data={data}
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
        labels: {
          text: {
            fontSize: 14, // Increase font size
            fontWeight: "bold", // Make the text bold
            fill: colors.blueAccent[100], // Set label color to be visible
          },
        },
      }}
      keys={["percentage"]}
      indexBy="language"
      margin={{ top: 40, right: 20, bottom: 40, left: 50 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={({ index }) => dynamicColors[index % dynamicColors.length]} // Apply dynamic green colors
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Language",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Percentage",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableGridY={false} // Disable Y-axis grid
      enableLabel={true}
      labelSkipWidth={12}
      labelSkipHeight={12}
      label={({ value }) => `${value}%`} // Format label values with percentage symbol
      legends={[]} // Removed the legend
      role="application"
      barAriaLabel={function (e) {
        return `${e.id}: ${e.formattedValue}% in language: ${e.indexValue}`;
      }}
    />
  );
};

export default BarChart;
