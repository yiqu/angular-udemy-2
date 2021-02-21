import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AdminNewExerSubMenu, AdminState, NewExerUnitType, PanelButtonType } from "./admin.state";

export const selectAdminState = createFeatureSelector<AdminState>("admin");

export const getCurrentPage = createSelector(
  selectAdminState,
  (state: AdminState): string | null => {
    return state.currentActionPage;
  }
);

export const getAdminPanelButtons = createSelector(
  getCurrentPage,
  (state: string | null) => {
    const buttons: PanelButtonType[] = [];
    if (state === "new") {
      buttons.push({
        btnName: "Add another",
        btnMenu: true,
        btnMenuItems: [
          "Time Based",
          "Rep Based"
        ]
      });
      buttons.push({
        btnName: "Save"
      })
    } else if (state === "edit") {
      buttons.push({
        btnName: "Delete"
      })
    }
    return buttons;
  }
);

export const getNewlyAddedExerType = createSelector(
  selectAdminState,
  (state: AdminState): NewExerUnitType | undefined => {
    return state.newExerType;
  }
);

export const getSaveExerBtnClicked = createSelector(
  selectAdminState,
  (state: AdminState): number | undefined => {
    return state.saveNewExerBtnClickTimeStamp;
  }
);

export const getFormErrorState = createSelector(
  selectAdminState,
  getCurrentPage,
  (state: AdminState, page: string | null): boolean | undefined => {
    if (page === "new") {
      if (state.formErrorState == undefined) {
        return true;
      }
      return state.formErrorState;
    }
    return true;
  }
);
