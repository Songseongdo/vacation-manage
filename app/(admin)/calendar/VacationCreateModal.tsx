import Modal from "@/app/components/Modal";
import { IModal } from "@/app/const";
import { useState } from "react";
import { CreateVacationRequest, EmployeeWithVacations } from "./actions";
import { formatVacationDays, typeUIText } from "@/app/util";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { VACATION_TYPES, VacationType } from "@/lib/constants";

interface IVacationCareteModalProps extends IModal {
	employees: EmployeeWithVacations[];
	clickDate: Date;
	onSuccess: () => void;
}

const ArrowICon = () => {
	return (
		<div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
			<svg
				className="h-4 w-4 text-gray-500"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M19 9l-7 7-7-7"
				/>
			</svg>
		</div>
	);
};

const rowStyle = "w-full flex items-center";
const labelStyle = "mr-1 text-sm font-bold w-15";
const datePickerStyle =
	"border border-gray-500 rounded-lg px-2 w-27 text-center disabled:bg-gray-200";
const selectStyle =
	"w-30 appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 pr-10 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:bg-gray-100";

export default function VacationCreateModal({
	open,
	onClose,
	children,
	title,
	employees,
	clickDate,
	onSuccess,
}: IVacationCareteModalProps) {
	const [curEmployee, setCurEmployee] =
		useState<EmployeeWithVacations | null>(null);
	const [employeeId, setEmployeeId] = useState<number | "">("");
	const [vacationType, setVacationType] = useState<VacationType>("FULL");
	const [vacationTime, setVacationTime] = useState(0);
	const [startDate, setStartDate] = useState<Date | null>(clickDate);
	const [endDate, setEndDate] = useState<Date | null>(clickDate);
	const [reason, setReason] = useState("");
	const [halfType, setHalfType] = useState(1);
	const [hourly, setHourly] = useState("");

	const onNameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const id = Number(e.currentTarget.value);
		setEmployeeId(id);

		// 남은 휴가 시간 계산
		employees.map((e) => {
			if (e.id === id) {
				const vacation = e.vacations[0];
				setVacationTime(vacation.totalHours - vacation.usedHours);

				setCurEmployee(e);
			}
		});

		// 근태 종류 초기화
		setVacationType("FULL");

		setReason("");
		setHalfType(1);
	};
	const onTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setVacationType(e.currentTarget.value as VacationType);
	};
	const onReasonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setReason(e.currentTarget.value);
	};
	const onStartDate = (date: Date | null) => {
		if (!date) return;

		setStartDate(date);
		setEndDate(date);
	};
	const remainTime = () => {
		if (!curEmployee || curEmployee.vacations.length === 0) return;

		const vacation = curEmployee.vacations[0];
		const remaintTime = vacation.totalHours - vacation.usedHours;

		return formatVacationDays(remaintTime);
	};
	const onHalfTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setHalfType(+e.currentTarget.value);
	};

	const onSubmit = async () => {
		if (employeeId === "" || !startDate || !endDate) return;

		const usedDay = countWeekdays(startDate, endDate);
		if (usedDay === 0) {
			alert("주말은 연차를 사용할 수 없습니다.");
			return;
		}

		let startTime = "";
		switch (vacationType) {
			case "FULL":
			case "HALF":
				startTime = halfType === 1 ? "09:00" : "13:00";
				break;
			case "HOURLY":
				startTime = hourly;
				break;
			default:
				break;
		}

		try {
			const res = await CreateVacationRequest({
				employeeId: employeeId,
				vacationType: vacationType,
				startDate: startDate,
				endDate: endDate,
				startTime,
				usedDay,
				reason,
			});

			alert(res.message);

			onSuccess();
			onClose();
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			} else {
				alert("알 수 없는 오류가 발생했습니다.");
			}
		}
	};

	const renderDatePickerUI = () => {
		switch (vacationType) {
			case "FULL":
				return (
					<>
						<span className="mx-2">~</span>
						<DatePicker
							dateFormat="YYYY-MM-DD"
							selected={endDate}
							onChange={setEndDate}
							selectsEnd
							disabled={employeeId === ""}
							startDate={startDate}
							endDate={endDate}
							minDate={startDate!}
							className={datePickerStyle}
						/>
					</>
				);
			case "HALF":
				return (
					<>
						<div className={`${labelStyle} ml-2`}>근태명</div>
						<div className="flex items-center relative">
							<select
								name="employeeName"
								value={halfType}
								onChange={onHalfTypeChange}
								required
								className={`${selectStyle}`}
							>
								<option value="1" key="half-1">
									오전반차
								</option>
								<option value="2" key="half-2">
									오후반차
								</option>
							</select>

							<ArrowICon />
						</div>
					</>
				);
			case "HOURLY":
				return (
					<>
						<div className={`${labelStyle} ml-2`}>시작시간</div>
						<div className="flex items-center relative">
							<select
								name="hourly"
								value={hourly}
								onChange={(e) => setHourly(e.target.value)}
								required
								className={`${selectStyle} max-h-10 overflow-y-auto`}
							>
								{Array.from({ length: 17 }, (_, i) => {
									const minutes = 9 * 60 + i * 30;
									if (minutes > 17 * 60) return null;

									const h = String(
										Math.floor(minutes / 60)
									).padStart(2, "0");
									const m = String(minutes % 60).padStart(
										2,
										"0"
									);

									return (
										<option
											key={minutes}
											value={`${h}:${m}`}
										>
											{h}:{m}
										</option>
									);
								})}
							</select>

							<ArrowICon />
						</div>
					</>
				);
			default:
				return null;
		}
	};
	const renderVacationDayUI = () => {
		switch (vacationType) {
			case "FULL":
				return (
					<>
						<div className="mr-2 text-sm  w-30">
							총일수 :
							<input
								disabled
								className="ml-2 w-7 text-center disabled:bg-gray-300"
								value={countDays(startDate!, endDate!)}
							/>
						</div>
						<div className="mr-2 text-sm  w-30">
							적용일수 :{" "}
							<input
								disabled
								className="ml-2 w-7 text-center disabled:bg-gray-300"
								value={countWeekdays(startDate!, endDate!)}
							/>
						</div>
					</>
				);
			case "HALF":
				return (
					<>
						<div className="mr-2 text-sm  w-30">
							총일수 :
							<input
								disabled
								className="ml-2 w-8 text-center disabled:bg-gray-300"
								value="0.5"
							/>
						</div>
						<div className="mr-2 text-sm  w-30">
							적용일수 :{" "}
							<input
								disabled
								className="ml-2 w-8 text-center disabled:bg-gray-300"
								value="0.5"
							/>
						</div>
					</>
				);
			case "HOURLY":
				return (
					<>
						<div className="mr-2 text-sm  w-40">
							적용시간 :
							<input
								disabled
								className="ml-2 w-7 text-center disabled:bg-gray-300"
								value="2"
							/>
							<span>시간</span>
						</div>
					</>
				);
			default:
				return null;
		}
	};

	return (
		<Modal open={open} onClose={onClose} title={title}>
			<div className="flex flex-col gap-4">
				{/* 직원이름 */}
				<div className={rowStyle}>
					<div className={labelStyle}>직원이름</div>
					<div className="flex items-center relative">
						<select
							name="employeeName"
							value={employeeId}
							onChange={onNameChange}
							required
							className={selectStyle}
						>
							<option value="" disabled>
								직원 선택
							</option>

							{employees.map((employee) => (
								<option key={employee.id} value={employee.id}>
									{employee.name}
								</option>
							))}
						</select>

						<ArrowICon />
					</div>
					<div className="w-34 text-xs text-right text-red-500">
						{vacationTime === 0 ? null : (
							<div>잔여일수: {remainTime()}</div>
						)}
					</div>
				</div>

				{/* 근태종류 */}
				<div className={rowStyle}>
					<div className={labelStyle}>근태종류</div>
					<div className="relative w-30">
						<select
							name="vacationType"
							value={vacationType}
							onChange={onTypeChange}
							required
							disabled={employeeId === ""}
							className={selectStyle}
						>
							{Object.values(VACATION_TYPES).map((type) => (
								<option key={type} value={type}>
									{typeUIText(type)}
								</option>
							))}
						</select>

						<ArrowICon />
					</div>
				</div>

				{/* 신청일자 */}
				<div className={rowStyle}>
					<div className={labelStyle}>신청일자</div>
					<div className="flex items-center justify-start">
						<DatePicker
							dateFormat="YYYY-MM-DD"
							selected={startDate}
							onChange={onStartDate}
							selectsStart
							startDate={startDate}
							endDate={endDate}
							disabled={employeeId === ""}
							className={datePickerStyle}
						/>

						{renderDatePickerUI()}
					</div>
				</div>

				{/* 총일수 */}
				<div className={`${rowStyle}, pl-17 -mt-3`}>
					{renderVacationDayUI()}
				</div>

				{/* 신청사유 */}
				<div className={rowStyle}>
					<div className={labelStyle}>신청사유</div>
					<textarea
						value={reason}
						onChange={onReasonChange}
						disabled={employeeId === ""}
						className="flex-1 w-full resize-none
            appearance-none rounded-md
            border border-gray-500
            px-3 py-2
            text-sm text-gray-900
            shadow-sm
            focus:border-blue-500
            focus:outline-none
            focus:ring-2
            focus:ring-blue-200
            disabled:bg-gray-100
            "
					/>
				</div>
			</div>

			<div className="w-full flex justify-end p-2">
				<button
					type="button"
					onClick={onSubmit}
					disabled={employeeId === ""}
					className="border-2 rounded-xl px-2 py-1 
            bg-blue-700 text-white cursor-pointer 
            disabled:bg-gray-300 disabled:cursor-default"
				>
					저장
				</button>
			</div>

			{children}
		</Modal>
	);
}

function countDays(start: Date, end: Date) {
	const startDate = new Date(
		start.getFullYear(),
		start.getMonth(),
		start.getDate()
	);
	const endDate = new Date(end.getFullYear(), end.getMonth(), end.getDate());

	const diffMs = endDate.getTime() - startDate.getTime();
	return Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;
}
function countWeekdays(start: Date, end: Date) {
	let count = 0;
	const current = new Date(start);

	do {
		const day = current.getDay();

		if (day !== 0 && day !== 6) {
			count++;
		}
		current.setDate(current.getDate() + 1);
	} while (current <= end);

	return count;
}
