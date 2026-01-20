"use client";

import { useEffect } from "react";
import { IModal } from "../const";

export default function Modal({ open, onClose, children, title }: IModal) {
	useEffect(() => {
		function onKeyDown(e: KeyboardEvent) {
			if (e.key === "Escape") onClose();
		}

		document.addEventListener("keydown", onKeyDown);
		return () => document.removeEventListener("keydown", onKeyDown);
	}, [onClose]);

	if (!open) return null;

	return (
		<div
			onClick={onClose}
			className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 "
		>
			<div
				className="bg-white rounded-lg py-3 min-w-[320px] translate-y-[6vh]"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Header */}
				<div className="flex justify-between items-center border-b-gray-400 border-b pb-1 px-2 mb-2">
					<div></div>
					<span className="text-xl font-semibold">{title}</span>

					<button
						onClick={onClose}
						aria-label="닫기"
						className="
              rounded-full
              p-1
              text-gray-500
              hover:bg-gray-100
              hover:text-gray-700
              focus:outline-none
              focus:ring-2
              focus:ring-gray-300
            "
					>
						✕
					</button>
				</div>

				{/* Content */}
				<div className="px-3">{children}</div>
			</div>
		</div>
	);
}
