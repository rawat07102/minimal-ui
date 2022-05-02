import dynamic from "next/dynamic";
import { renderToStaticMarkup } from "react-dom/server";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CurrentDownloadSection = () => {
  return (
    <div className="shadow-lg rounded-md row-span-2">
      <h2 className="font-bold text-lg text-gray-700 pt-6 px-6">
        Current Download
      </h2>
      <div className="h-[392px] mt-10">
        <Chart
          type="donut"
          series={[12244, 53345, 44313, 78343]}
          options={{
            labels: ["Mac", "Windows", "iOS", "Android"],
            colors: [
              "rgb(200,250,205)",
              "rgb(91,229,132)",
              "rgb(0,171,85)",
              "rgb(0,123,85)",
            ],
            chart: {
              toolbar: {
                show: false,
              },
            },
            legend: {
              position: "bottom",
              fontSize: "13px",
              itemMargin: {
                horizontal: 12,
                vertical: 2,
              },
            },
            plotOptions: {
              pie: {
                donut: {
                  size: "93%",
                  labels: {
                    show: true,
                    value: {
                      formatter: (val) => {
                        console.log(val, "Valu");
                        return Number(val).toLocaleString();
                      },
                    },
                    total: {
                      show: true,
                      color: "rgba(33, 43, 54)",
                      fontSize: "14px",
                      formatter: (w) => {
                        console.log(w);
                        return w.globals.seriesTotals
                          .reduce((a, b) => {
                            return a + b;
                          }, 0)
                          .toLocaleString();
                      },
                    },
                  },
                },
              },
            },
            tooltip: {
              custom: (options) => {
                const color = options.w.config.colors[options.seriesIndex];
                const label = options.w.config.labels[options.seriesIndex];
                const value = Number(
                  options.series[options.seriesIndex]
                ).toLocaleString();
                return renderToStaticMarkup(
                  <div className="bg-black bg-opacity-5 rounded-xl p-2 text-white flex justify-between items-center">
                    <div
                      className={`rounded-full h-3 w-3`}
                      style={{ backgroundColor: color }}
                    ></div>
                    <div className="mx-2">
                      <span className="mr-1">{label}</span>
                      <span>{value}</span>
                    </div>
                  </div>
                );
              },
            },
            dataLabels: {
              enabled: false,
            },
          }}
        />
      </div>
    </div>
  );
};

export default CurrentDownloadSection;
