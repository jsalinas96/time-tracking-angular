export interface Datos{
    title: string;
    timeframes: {
        daily: {
            current: string;
            previous: string;
        },
        weekly: {
            current: string;
            previous: string;
        },
        monthly: {
            current: string;
            previous: string;
        }
    };
}