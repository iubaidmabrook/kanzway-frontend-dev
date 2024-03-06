// Types
import { ApiServiceErr, MutOpt } from '@/types/api.type';

// React Query
import { useMutation } from 'react-query';

// Services
import { careerApply } from '@/api/career.service';

/**
 * Apply Career
 * @param opt
 * @returns
 */
export const useCareerApply = (opt?: MutOpt<{}>) => {
  return useMutation<{}, ApiServiceErr, { id: number; payload: FormData }>(
    async ({ id, payload }) => {
      const resp = await careerApply(id, payload);
      return resp;
    },
    opt,
  );
};
