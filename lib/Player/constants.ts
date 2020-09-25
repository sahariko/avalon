export enum Role {
    Good = 'good',
    Evil = 'evil',
    Merlin = 'Merlin'
}

export const CAN_SEE_EVIL_ROLES = new Set([
    Role.Evil,
    Role.Merlin
]);
