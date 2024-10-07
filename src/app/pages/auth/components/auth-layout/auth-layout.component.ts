import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'auth-layout',
  standalone: true,
  imports: [],
  templateUrl: 'auth-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayoutComponent {}