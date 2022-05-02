import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const AreaInstalledSection = () => {
  return (
    <div className="shadow-lg rounded-md col-span-2 row-span-2 p-6">
      <h2 className="font-bold text-lg text-gray-600">Area Installed</h2>
      <Chart
        height={390}
        series={[
          {
            name: "Asia",
            data: [148, 91, 69, 62, 49, 51, 35, 41, 10],
          },
          {
            name: "America",
            data: [45, 77, 99, 88, 77, 56, 13, 34, 10],
          },
        ]}
        options={{
          legend: {
            position: "top",
            horizontalAlign: "right",
            itemMargin: {
              horizontal: 12,
              vertical: 2,
            },
            markers: {
              width: 12,
              height: 12,
            },
          },
          colors: ["#00ab55", "#ffe700"],
          stroke: {
            curve: "smooth",
            width: 3,
          },
          chart: {
            type: "line",
            toolbar: {
              show: false,
            },
          },
          xaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
            ],
          },
        }}
      />
    </div>
  );
};

export default AreaInstalledSection;
