import { Injectable, signal } from '@angular/core';

export interface ExchangeRate {
    currency: string;
    symbol: string;
    rate: number;
    flag: string;
}

@Injectable({
    providedIn: 'root'
})
export class CurrencyService {
    // Mock data: Base USD
    private _rates = signal<ExchangeRate[]>([
        { currency: 'MXN', symbol: '$', rate: 20.50, flag: '🇲🇽' },
        { currency: 'PEN', symbol: 'S/', rate: 3.80, flag: '🇵🇪' },
        { currency: 'COP', symbol: '$', rate: 3900.00, flag: '🇨🇴' }
    ]);

    readonly rates = this._rates.asReadonly();
}
