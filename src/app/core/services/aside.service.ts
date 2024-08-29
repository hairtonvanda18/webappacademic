import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsideService {
  private _state = signal<boolean>(true);

  state = () => {
    return this._state();
  };

  setState = () => {
    this._state.set(!this.state());
  };
}
