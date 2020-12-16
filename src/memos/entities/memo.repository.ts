import { MEMO_REPOSITORY } from '../../common/constants';
import { Memo } from './memo.entity';

export const MemoRepository = {
  provide: MEMO_REPOSITORY,
  useValue: Memo,
};
