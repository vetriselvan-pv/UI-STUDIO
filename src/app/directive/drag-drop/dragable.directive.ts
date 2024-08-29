/* eslint-disable @typescript-eslint/ban-types */
import {
    Directive,
    ElementRef,
    Input,
    OnDestroy,
    OnInit,
    Renderer2,
} from '@angular/core';
import { IUiElement } from '@ui/model';
import { DragService } from '@ui/services';

// 1
@Directive({
    selector: '[uiDraggable]',
    standalone : true
})
export class UIDraggableDirective implements OnInit, OnDestroy {
    // Events
    private onDragStart!: Function;
    private onDragEnd!: Function;

    // Options for the directive
    private options!: IUiElement;

    // 2
    @Input()
    set uiDraggable(options: IUiElement) {
        if (options) {
            this.options = options;
        }
    }

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
        private dragService: DragService
    ) {
        // 3
        this.renderer.setProperty(
            this.elementRef.nativeElement,
            'draggable',
            true
        );
        this.renderer.addClass(this.elementRef.nativeElement, 'ui-draggable-element');
    }

    // 4
    ngOnInit() {
        this.addDragEvents();
    }

    // 5
    ngOnDestroy() {
        // Remove events
        this.onDragStart();
        this.onDragEnd();
    }

    /**
     * @desc responsible for adding the drag events to the directive
     * @note transfers drag data using the Drag and Drop API (Browser)
     * @note known CSS issue where a draggable element cursor cant be set while dragging in Chrome
     */
    // 6
    private addDragEvents(): void {
        // 7
        this.onDragStart = this.renderer.listen(
            this.elementRef.nativeElement,
            'dragstart',
            (event: DragEvent): void => {
                this.dragService.startDrag(this.options?.zones);
                // Transfer the data using Drag and Drop API (Browser)
                event.dataTransfer?.setData(
                    'Text',
                    JSON.stringify(this.options)
                );
                event.stopPropagation();
            }
        );

        // 8
        this.onDragEnd = this.renderer.listen(
            this.elementRef.nativeElement,
            'dragend',
            ( event: DragEvent): void => {
                this.dragService.removeHighLightedAvailableZones();
                event.stopPropagation();
            }
        );
    }
}

// 9
// export interface DraggableOptions extends IUiElement {
//     zones?: Array<string>;
// }
