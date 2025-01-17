import { LogRecord_Level } from "../generated/index.js";
import { Types } from "../index.js";
import { SettingsManager } from "../settingsManager.js";

/**
 * Global event logger
 * @param emitter Name of calling function
 * @param message Informative message
 * @param level Desired logging level
 */
export const log = (
  scope: Types.EmitterScope,
  emitter: Types.Emitter,
  message: string,
  level: LogRecord_Level
): void => {
  if (level >= SettingsManager.debugMode) {
    switch (level) {
      case LogRecord_Level.TRACE:
        console.info(
          `%c[TRACE]%c ${Types.EmitterScope[scope]}.${Types.Emitter[emitter]}\n%c${message}`,
          "color:grey",
          "color:darkgrey",
          "color:white"
        );
        break;

      case LogRecord_Level.DEBUG:
        console.info(
          `%c[DEBUG]%c ${Types.EmitterScope[scope]}.${Types.Emitter[emitter]}\n%c${message}`,
          "color:lightcyan",
          "color:darkgrey",
          "color:white"
        );
        break;

      case LogRecord_Level.INFO:
        console.info(
          `%c[INFO]%c ${Types.EmitterScope[scope]}.${Types.Emitter[emitter]}\n%c${message}`,
          "color:darkgrey",
          "color:cyan",
          "color:white"
        );
        break;
      case LogRecord_Level.WARNING:
        console.warn(
          `%c[WARNING]%c ${Types.EmitterScope[scope]}.${Types.Emitter[emitter]}\n%c${message}`,
          "color:yellow",
          "color:darkgrey",
          "color:white"
        );
        break;

      case LogRecord_Level.ERROR:
        console.error(
          `%c[ERROR]%c ${Types.EmitterScope[scope]}.${Types.Emitter[emitter]}\n%c${message}`,
          "color:orangered",
          "color:darkgrey",
          "color:white"
        );
        break;

      case LogRecord_Level.CRITICAL:
        console.error(
          `%c[CRITICAL]%c ${Types.EmitterScope[scope]}.${Types.Emitter[emitter]}\n%c${message}`,
          "color:red",
          "color:darkgrey",
          "color:white"
        );
        break;
      default:
        break;
    }
  }
};
