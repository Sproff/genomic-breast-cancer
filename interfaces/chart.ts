export interface ChartData {
	labels: string[];
	datasets: {
		label: string;
		data: string[];
		backgroundColor: string[];
		borderColor: string[];
		borderWidth: number;
	}[];
}

export interface ChartOptions {
	responsive: boolean;
	plugins: {
		legend: {
			position: "top" | "left" | "bottom" | "right";
			display: boolean;
		};
	};
	layout: {
		padding: {
			left: number;
			right: number;
			top: number;
			bottom: number;
		};
	};
	scales: {
		x: {
			grid: {
				display: boolean;
			};
			ticks: {
				color: string;
				fontSize: string;
				fontWeight: string;
			};
		};
		y: {
			grid: {
				display: boolean;
				drawBorder: boolean;
			};
			ticks: {
				display: boolean;
			};
		};
	};
}
