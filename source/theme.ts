import chroma from "chroma-js";

import { DeepRainforest } from "./theme-as-enum";

const COLOR_MODE = "lab";

export default function buildTheme() {
  return {
    name: "Deep Rainforest",
    type: "dark",
    semanticHighlighting: true,
    semanticTokenColors: {
      enumMember: {
        foreground: "#56b6c2",
      },
      "variable.constant": {
        foreground: "#58a564",
      },
      "variable.defaultLibrary": {
        foreground: "#66f0af",
      },
    },
    tokenColors: [
      {
        "name": "Comments",
        "scope": "comment, punctuation.definition.comment",
        "settings": {
          "fontStyle": "italic",
          "foreground": "#4e908793"
        }
      },
    ],
    colors: {
      "checkbox.background": DeepRainforest.background,
      "checkbox.border": DeepRainforest.background,
      "debugExceptionWidget.background": DeepRainforest.background,
      "debugExceptionWidget.border": DeepRainforest.background,
      "debugToolBar.background": DeepRainforest.background,
      "debugToolBar.border": DeepRainforest.background,
      "dropdown.background": DeepRainforest.background,
      "dropdown.border": DeepRainforest.background,
      "editor.background": DeepRainforest.background,
      "editor.findMatchBackground": "#003438",
      "editor.findMatchBorder": "#003438",
      "editor.foreground": DeepRainforest.foreground,
      "editor.lineHighlightBackground": DeepRainforest.highlightBackground,
      "editor.lineHighlightBorder": DeepRainforest.background,
      "editorCursor.background": DeepRainforest.background,
      "editorCursor.foreground": DeepRainforest.foreground,
      "editorGroup.border": DeepRainforest.background,
      "editorGroup.emptyBackground": DeepRainforest.background,
      "editorGroupHeader.border": DeepRainforest.background,
      "editorGroupHeader.tabsBackground": DeepRainforest.background,
      "editorGroupHeader.tabsBorder": DeepRainforest.background,
      "editorGutter.background": DeepRainforest.background,
      "editorHoverWidget.background": DeepRainforest.background,
      "editorHoverWidget.border": DeepRainforest.background,
      "editorLineNumber.activeForeground": DeepRainforest.activeForeground,
      "editorLineNumber.foreground": DeepRainforest.foreground,
      "editorLink.activeForeground": DeepRainforest.activeForeground,
      "editorMarkerNavigation.background": DeepRainforest.background,
      "editorRuler.foreground": chroma(DeepRainforest.foreground).darken(2.1).hex(),
      "editorSuggestWidget.background": DeepRainforest.background,
      "editorSuggestWidget.border": DeepRainforest.background,
      "editorSuggestWidget.foreground": "#d4d4d4",
      "editorSuggestWidget.highlightForeground": DeepRainforest.highlightForeground,
      "editorSuggestWidget.selectedBackground": "#0c7d9d",
      "editorWhitespace.foreground": chroma(DeepRainforest.foreground).darken(2.1).hex(),
      "editorWidget.background": DeepRainforest.background,
      "editorWidget.resizeBorder": DeepRainforest.background,
      focusBorder: DeepRainforest.background,
      "input.background": DeepRainforest.background,
      "input.border": DeepRainforest.background,
      "inputOption.activeForeground": "#ffffff",
      "list.inactiveSelectionForeground": DeepRainforest.background,
      "menu.background": DeepRainforest.background,
      "menu.border": DeepRainforest.background,
      "menu.separatorBackground": DeepRainforest.background,
      "menubar.selectionBorder": DeepRainforest.background,
      "minimap.background": DeepRainforest.background,
      "notificationCenter.border": DeepRainforest.background,
      "notificationCenterHeader.background": DeepRainforest.background,
      "notificationToast.border": DeepRainforest.background,
      "notifications.background": DeepRainforest.background,
      "panel.background": DeepRainforest.background,
      "panel.border": DeepRainforest.background,
      "panelSection.border": DeepRainforest.background,
      "panelTitle.activeBorder": DeepRainforest.background,
      "panelTitle.activeForeground": DeepRainforest.activeForeground,
      "peekView.border": DeepRainforest.background,
      "peekViewResult.background": DeepRainforest.background,
      "peekViewTitle.background": DeepRainforest.background,
      "pickerGroup.border": DeepRainforest.background,
      "sideBar.background": DeepRainforest.background,
      "sideBarTitle.foreground": DeepRainforest.background,
      "tab.activeBackground": DeepRainforest.background,
      "tab.activeBorder": DeepRainforest.background,
      "tab.activeBorderTop": DeepRainforest.background,
      "tab.activeForeground": DeepRainforest.activeForeground,
      "tab.activeModifiedBorder": chroma(DeepRainforest.activeForeground).darken(2.75).hex(), // Only applicable if `workbench.editor.highlightModifiedTabs` is enabled
      "tab.inactiveModifiedBorder": chroma(DeepRainforest.activeForeground).darken(2.75).hex(), // Only applicable if `workbench.editor.highlightModifiedTabs` is enabled
      "tab.unfocusedActiveModifiedBorder": chroma(DeepRainforest.activeForeground).darken(2.75).hex(), // Only applicable if `workbench.editor.highlightModifiedTabs` is enabled
      "tab.unfocusedInactiveModifiedBorder": chroma(DeepRainforest.activeForeground).darken(2.75).hex(), // Only applicable if `workbench.editor.highlightModifiedTabs` is enabled
      "tab.border": DeepRainforest.background,
      "terminal.border": DeepRainforest.background,
      "titleBar.activeBackground": DeepRainforest.background,
      // Match the editor background so that the text in the title bar is not
      // visible
      "titleBar.activeForeground": DeepRainforest.background,
      "titleBar.border": DeepRainforest.background,
      // Match the `titleBar.activeForeground` so the text in the title bar is
      // not visible even when the window is inactive
      "titleBar.inactiveForeground": DeepRainforest.background,
    },
  };
}
