import { ReactNode } from "react";

export type VacationUsage = {
	id: number;
	date: Date;
	hours: number;
	reason?: string | null;
};

export type Vacation = {
	id: number;
	year: number;
	totalHours: number;
	usedHours: number;
	vacationUsages: VacationUsage[];
};

export interface IModal {
	open: boolean;
	onClose: () => void;
	children?: ReactNode;
	title: string;
}

/**
 * 
 if (!Object.values(VACATION_TYPES).includes(type)) {
  throw new Error('Invalid vacation type')
}

 function usageToEvent(usage: VacationUsage & { vacation: { employee: Employee } }) {
    return {
      id: usage.id,
      title: `${usage.vacation.employee.name} (${usage.type})`,
      start: usage.startTime ?? usage.date,
      end: usage.endTime ?? usage.date,
      allDay: usage.type !== 'HOURLY',
    }
  }

  * 날짜 중복 장지
  const exists = await prisma.vacationUsage.findFirst({
    where: {
      vacationId,
      date,
    },
  })

  if (exists) {
    throw new Error('이미 해당 날짜에 휴가가 존재합니다')
  }

  * usedHours 자동 동기화 전략
  await prisma.$transaction([
    prisma.vacationUsage.create({ data }),
    prisma.vacation.update({
      where: { id: vacationId },
      data: {
        usedHours: { increment: data.usedHours },
      },
    }),
  ])
 */
