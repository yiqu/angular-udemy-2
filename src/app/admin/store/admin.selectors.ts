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
