import { createAction, props } from '@ngrx/store';
import { AdminNewExerSubMenu } from './admin.state';

const ADMIN_PAGE_NAVIGATION: string = "[Admin/UI] Admin page navigation";
const ADD_NEW_EXER: string = "[Admin/UI] Add a new exer";

const SAVE_ALL_EXER_START: string = "[Admin/API] Save all exer start";

const DELETE_ALL_EXER_START: string = "[Admin/API] delete all exer start";

export const onAdminPageNavigation = createAction(
  ADMIN_PAGE_NAVIGATION,
  props<{page: string | null}>()
);

export const onAddAnotherExer = createAction(
  ADD_NEW_EXER,
  props<{exerUnitType: AdminNewExerSubMenu | undefined}>()
);
