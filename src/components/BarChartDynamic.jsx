import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";

const BarChartDynamic = ({ data = [], type = "item", isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Sort the data in descending order by percentage
  const sortedData = [...data].sort((a, b) => b.percentage - a.percentage);

  // Custom color palette inspired by your desired tones
  const customPalette = [
    "#6baed6", // Light blue
    "#3182bd", // Medium blue
    "#08519c", // Dark blue
    "#9ecae1", // Pale blue
    "#c6dbef", // Soft neutral blue
    "#fdae61", // Warm beige-orange
    "#fdbb84", // Soft orange
  ];

  const generateCustomPalette = (count) => {
    while (customPalette.length < count) {
      customPalette.push(...customPalette);
    }
    return customPalette.slice(0, count);
  };

  const dynamicColors = generateCustomPalette(sortedData.length);

  return (
    <ResponsiveBar
      data={sortedData}
      theme={{
        axis: {
          domain: { line: { stroke: colors.grey[100] } },
          legend: { text: { fill: colors.grey[100] } },
          ticks: {
            line: { stroke: colors.grey[100], strokeWidth: 1 },
            text: { fill: colors.grey[100] },
          },
        },
        labels: { text: { fontSize: 14, fontWeight: "bold", fill: colors.blueAccent[100] } },
        tooltip: {
          container: {
            background: colors.grey[900], // Dark background for tooltip
            color: colors.grey[100], // Light text for contrast
            fontSize: 14,
            borderRadius: 4,
            padding: "8px",
          },
        },
      }}
      keys={["percentage"]}
      indexBy={type}
      margin={{ top: 40, right: 20, bottom: 70, left: 50 }} // Increased bottom margin for rotated labels
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={({ index }) => dynamicColors[index % dynamicColors.length]}
      borderColor={{ from: "color", modifiers: [["darker", "1.6"]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -45, // Rotate labels 45 degrees for better readability
        legend: isDashboard ? undefined : type.charAt(0).toUpperCase() + type.slice(1),
        legendPosition: "middle",
        legendOffset: 50, // Adjusted legend offset for vertical space
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Percentage",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableGridY={false}
      enableLabel={true}
      labelSkipWidth={12}
      labelSkipHeight={12}
      label={({ value }) => `${value}%`}
      legends={[]}
      role="application"
      barAriaLabel={(e) => `${e.id}: ${e.formattedValue}% in ${type}: ${e.indexValue}`}
    />
  );
};

export default BarChartDynamic;
