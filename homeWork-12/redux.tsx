import { createStore } from "redux";
interface IState {
  commands: string[];
  paths: string[];
  commandsNPaths: string[];
  inputs: string[];
}

export const initialState: IState = {
  commands: [],
  paths: ["C:", "Users", "User"],
  commandsNPaths: [],
  inputs: []
};

interface IFolder {
  type: string;
  payload: string;
  input: string;
}

const folderIn = {
  type: "in",
  payload: "Folder"
};

const folderOut = {
  type: "out",
  payload: ".."
};
const printCommand = {
  type: "print",
  payload: "Message"
};

const cdReducer = (state: IState = initialState, action: IFolder) => {
  switch (action.type) {
    case "cd":
      switch (action.payload) {
        case folderOut.payload:
          return {
            commands: [...state.commands, action.type],
            paths: state.paths.slice(0, -1),
            commandsNPaths: [
              ...state.commandsNPaths,
              state.paths.join("\\") + `\>${action.input}`
            ],
            inputs: [...state.inputs, action.input]
          };
        default:
          return {
            commands: [...state.commands, action.type],
            paths: [...state.paths, action.payload],
            commandsNPaths: [
              ...state.commandsNPaths,
              state.paths.join("\\") + `\>${action.input}`
            ],
            inputs: [...state.inputs, action.input]
          };
      }
    case "print":
      return {
        commands: [...state.commands, action.type],
        paths: [...state.paths],
        commandsNPaths: [
          ...state.commandsNPaths,
          state.paths.join("\\") + `\>${action.input}`,
          action.payload
        ],
        inputs: [...state.inputs, action.input]
      };

      break;
    default:
      if (action.input?.length) {
        return {
          commands: [...state.commands, action.type],
          paths: [...state.paths],
          commandsNPaths: [
            ...state.commandsNPaths,
            state.paths.join("\\") + `\>${action.input}`,
            `"${action.input}" не является командой`
          ],
          inputs: [...state.inputs, action.input]
        };
      } else return state;
  }
};

export const store = createStore(cdReducer);
