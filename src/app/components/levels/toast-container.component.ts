import { Component, TemplateRef } from '@angular/core';
import { ToastService } from './toast.service';


@Component({
	selector: 'app-toast',
	template: `
		<ngb-toast
			*ngFor="let toast of toastService.toasts"
			[class]="toast.classname"
			[autohide]="true"
			[delay]="toast.delay || 1000"
			(hidden)="toastService.remove(toast)"
		>
			<ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text">
				<ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
			</ng-template>

			<ng-template #text>{{ toast.textOrTpl }}</ng-template>
		</ngb-toast>
	`,
	host: { class: 'toast-container d-flex justify-content-center align-items-center w-100 position-fixed top-50 p-3', style: 'z-index: 1200; text-align: center;' },
})
export class ToastContainer {
	constructor(public toastService: ToastService) {}

	isTemplate(toast: any) {
		return toast.textOrTpl instanceof TemplateRef;
	}
}
