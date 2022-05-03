import IncSVG from "../../assets/IncSVG";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const InfoCard = ({title, value, change}) => {
  return (
    <div className="shadow-lg rounded-2xl p-6 flex h-40">
      <div className="flex flex-col flex-1">
        <h2 className="font-semibold text-sm text-[#212B36]">
          {title}
        </h2>
        <div className="flex text-[rgb(84,214,44)] mt-4 mb-2 items-center">
          <div className="bg-[rgba(84,214,44,0.16)] rounded-full w-6 h-6 flex justify-center items-center">
            <IncSVG className="fill-current h-4 w-4 -rotate-12" />
          </div>
          <h4 className="lining-nums ml-2 text-sm font-semibold">
            &#43;{change}&#37;
          </h4>
        </div>
        <h3 className="text-3xl font-bold">{Number(18765).toLocaleString()}</h3>
      </div>
      <div className="flex justify-center items-center">
        <Chart
          height="96px"
          width="90px"
          type="bar"
          series={[{ data: [5, 40, 20, 54, 70, 61, 4, 90, 50, 10] }]}
          options={{
            chart: {
              toolbar: { show: false },
              offsetY: 0,
              offsetX: 0,
            },
            grid: {
              show: false,
            },
            xaxis: {
              show: false,
              labels: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
            },
            yaxis: {
              show: false,
              axisBorder: {
                show: false,
              },
            },
            plotOptions: {
              bar: {
                borderRadius: 2,
                columnWidth: "60%",
              },
            },
            dataLabels: {
              enabled: false,
            },
            tooltip: {
              x: {
                show: false
              },
              y: {
                title: {
                  formatter: () => null
                }
              },
              marker: {
                show: false
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default InfoCard;
