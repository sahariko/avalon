import { Client, Server } from '../lib/events';

interface Events {
    [eventType: string]: Array<(...args: any[]) => any> // eslint-disable-line
}

const events: Events = {};

const execute = (eventType: string, ...args: any[]) => { // eslint-disable-line
    if (!events[eventType]) { return; }

    events[eventType].forEach((callback) => {
        callback(...args);
    });
};

export const on = (eventType: string, callback: (...args: any[]) => any): void => { // eslint-disable-line
    events[eventType] = events[eventType] || [];
    events[eventType].push(callback);
};

export const emit = (eventType: string, ...args: any[]): void => { // eslint-disable-line
    switch (eventType) {
        case Client.UserReady:
            execute(Server.UserReady, ...args);
            break;
        case Client.UserNotReady:
            execute(Server.UserNotReady, ...args);
            break;
        case Client.AbortGame:
            execute(Server.GameAborted, ...args);
            break;
        case Client.UserSelectedForQuest:
            execute(Server.UpdateSelectedUsers, {
                playerData: {
                    [args[0]]: {
                        selected: true
                    }
                }
            });
            break;
        case Client.UserUnselectedForQuest:
            execute(Server.UpdateSelectedUsers, {
                playerData: {
                    [args[0]]: {
                        selected: false
                    }
                }
            });
            break;
        case Client.StartQuest:
            execute(Server.StartQuest, ...args);
            break;
        default:
            break;
    }
};
