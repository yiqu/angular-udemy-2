import { createAction, props } from '@ngrx/store';
import { VerifiedUser } from 'src/app/shared/models/user.model';

const USER_IS_INACTIVE: string = "[UI/Activity] User is inactive for period of time";

export const userHasBeenInActive = createAction(
  USER_IS_INACTIVE,
  props<{inactiveTimeInMilli: number}>()
);
