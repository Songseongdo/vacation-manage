import Modal from "@/app/components/Modal";
import { IModal } from "@/app/const";
import { deleteUsage, VacationUsage } from "./actions";
import { typeUIText } from "@/app/util";

type VacationDeleteModalProps = IModal & IVacationExtra;

export interface IVacationExtra {
	usage: VacationUsage;
	name: string;
	onSuccess: () => void;
}

const rowStyle = "w-full flex items-center";
const labelStyle = "mr-1 text-sm font-bold w-15";
const dataStyle =
	"inline-flex min-w-20 min-h-7 w-fit bg-gray-300 px-5 py-1 rounded-xl text-sm";

export default function VacationDeleteModal({
	open,
	title,
	onClose,
	usage,
	name,
	onSuccess,
}: VacationDeleteModalProps) {
	const onSubmit = async () => {
		if (window.confirm("휴가를 삭제하시겠습니까?")) {
			try {
				const res = await deleteUsage({
					usageId: usage.id,
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
		}

		return;
	};

	return (
		<Modal open={open} onClose={onClose} title={title}>
			<div className="flex flex-col gap-4">
				{/* 직원 이름 */}
				<div className={rowStyle}>
					<div className={labelStyle}>직원이름</div>
					<div className={dataStyle}>{name}</div>
				</div>
				{/* 근태종류 */}
				<div className={rowStyle}>
					<div className={labelStyle}>근태종류</div>
					<div className={dataStyle}>{typeUIText(usage.type)}</div>
				</div>
				{/* 휴가기간 */}
				<div className={rowStyle}>
					<div className={labelStyle}>휴가기간</div>
					<div className={dataStyle}>
						{usage.startDate.toLocaleDateString()}
						<span className="mx-3">~</span>
						{usage.endDate.toLocaleDateString()}
					</div>
				</div>
				<div className={rowStyle}>
					<div className={labelStyle}>적용일수</div>
					<span className="inline-flex min-h-7 w-fit bg-gray-300 px-5 py-1 rounded-xl text-sm">
						{usage.usedHours / 8} 일
					</span>
				</div>
				{/* 신청사유 */}
				<div className={rowStyle}>
					<div className={labelStyle}>신청사유</div>
					<div className={dataStyle}>{usage.reason ?? ""}</div>
				</div>
			</div>

			<div className="w-full flex justify-end p-2">
				<button
					type="button"
					onClick={onSubmit}
					className="border-2 rounded-xl px-2 py-1 
            bg-red-700 text-white cursor-pointer 
            disabled:bg-gray-300 disabled:cursor-default"
				>
					휴가 삭제
				</button>
			</div>
		</Modal>
	);
}
