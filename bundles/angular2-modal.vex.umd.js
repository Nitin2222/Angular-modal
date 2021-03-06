(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/add/operator/first'), require('rxjs/add/operator/combineLatest'), require('@angular/core'), require('angular2-modal'), require('@angular/common')) :
        typeof define === 'function' && define.amd ? define(['exports', 'rxjs/add/operator/first', 'rxjs/add/operator/combineLatest', '@angular/core', 'angular2-modal', '@angular/common'], factory) :
            (factory((global.angular2Modal = global.angular2Modal || {}, global.angular2Modal.plugins = global.angular2Modal.plugins || {}, global.angular2Modal.plugins.vex = global.angular2Modal.plugins.vex || {}), global.rxjs_add_operator_first, global.rxjs_add_operator_combineLatest, global.ng.core, global.angular2Modal, global.ng.common));
}(this, (function (exports, rxjs_add_operator_first, rxjs_add_operator_combineLatest, _angular_core, angular2Modal, _angular_common) {
    'use strict';
    /**
     * A Dialog is a
     */
    var VEXDialogButtons = (function () {
        function VEXDialogButtons() {
            /**
             * Emitted when a button was clicked
             * @type {EventEmitter<VEXButtonClickEvent>}
             */
            this.onButtonClick = new _angular_core.EventEmitter();
        }
        VEXDialogButtons.prototype.onClick = function (btn, $event) {
            $event.stopPropagation();
            this.onButtonClick.emit({ btn: btn, $event: $event });
        };
        VEXDialogButtons.decorators = [
            { type: _angular_core.Component, args: [{
                        selector: 'vex-dialog-buttons',
                        encapsulation: _angular_core.ViewEncapsulation.None,
                        template: "<div class=\"vex-dialog-buttons\">\n    <button type=\"button\" \n         *ngFor=\"let btn of buttons;\"\n         [class]=\"btn.cssClass\"\n         (click)=\"onClick(btn, $event)\">{{btn.caption}}</button>\n</div>"
                    },] },
        ];
        /** @nocollapse */
        VEXDialogButtons.ctorParameters = function () { return []; };
        VEXDialogButtons.propDecorators = {
            'buttons': [{ type: _angular_core.Input },],
            'onButtonClick': [{ type: _angular_core.Output },],
        };
        return VEXDialogButtons;
    }());
    /**
     * A Dialog with customized buttons wrapped in a form.
     *
     */
    var DialogFormModal = (function () {
        function DialogFormModal(dialog) {
            this.dialog = dialog;
            this.context = dialog.context;
        }
        DialogFormModal.prototype.onButtonClick = function ($event) {
            $event.btn.onClick(this, $event.$event);
        };
        DialogFormModal.decorators = [
            { type: _angular_core.Component, args: [{
                        selector: 'modal-dialog',
                        encapsulation: _angular_core.ViewEncapsulation.None,
                        template: "<form class=\"vex-dialog-form\">\n    <template [swapCmp]=\"context.content\"></template>\n    <vex-dialog-buttons [buttons]=\"context.buttons\"\n                        (onButtonClick)=\"onButtonClick($event)\"></vex-dialog-buttons>\n</form>"
                    },] },
        ];
        /** @nocollapse */
        DialogFormModal.ctorParameters = function () {
            return [
                { type: angular2Modal.DialogRef, },
            ];
        };
        return DialogFormModal;
    }());
    var FormDropIn = (function () {
        function FormDropIn(dialog) {
            this.dialog = dialog;
            this.context = dialog.context;
        }
        FormDropIn.decorators = [
            { type: _angular_core.Component, args: [{
                        selector: 'drop-in-dialog',
                        encapsulation: _angular_core.ViewEncapsulation.None,
                        template: "<div class=\"vex-dialog-message\">{{context.message}}</div>\n <div *ngIf=\"context.showInput\" class=\"vex-dialog-input\">\n   <input #input\n          autofocus\n          name=\"vex\" \n          type=\"text\" \n          class=\"vex-dialog-prompt-input\"\n           (change)=\"context.defaultResult = input.value\" \n          placeholder=\"{{context.placeholder}}\">\n </div>\n <div *ngIf=\"context.showCloseButton\" \n      [class]=\"context.closeClassName\"\n      (click)=\"dialog.dismiss()\"></div>"
                    },] },
        ];
        /** @nocollapse */
        FormDropIn.ctorParameters = function () {
            return [
                { type: angular2Modal.DialogRef, },
            ];
        };
        return FormDropIn;
    }());
    var __extends$3 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var DEFAULT_VALUES$1 = {
        className: 'default',
        overlayClassName: 'vex-overlay',
        contentClassName: 'vex-content',
        closeClassName: 'vex-close'
    };
    var DEFAULT_SETTERS$2 = [
        'className',
        'overlayClassName',
        'contentClassName',
        'closeClassName',
        'showCloseButton'
    ];
    var VEXModalContext = (function (_super) {
        __extends$3(VEXModalContext, _super);
        function VEXModalContext() {
            _super.apply(this, arguments);
        }
        VEXModalContext.prototype.normalize = function () {
            if (!this.className) {
                this.className = DEFAULT_VALUES$1.className;
            }
            if (!this.overlayClassName) {
                this.overlayClassName = DEFAULT_VALUES$1.overlayClassName;
            }
            if (!this.contentClassName) {
                this.contentClassName = DEFAULT_VALUES$1.contentClassName;
            }
            if (!this.closeClassName) {
                this.closeClassName = DEFAULT_VALUES$1.closeClassName;
            }
            _super.prototype.normalize.call(this);
        };
        return VEXModalContext;
    }(angular2Modal.ModalOpenContext));
    var VEXModalContextBuilder = (function (_super) {
        __extends$3(VEXModalContextBuilder, _super);
        function VEXModalContextBuilder(defaultValues, initialSetters, baseType) {
            if (defaultValues === void 0) {
                defaultValues = undefined;
            }
            if (initialSetters === void 0) {
                initialSetters = undefined;
            }
            if (baseType === void 0) {
                baseType = undefined;
            }
            _super.call(this, angular2Modal.extend(DEFAULT_VALUES$1, defaultValues || {}), angular2Modal.arrayUnion(DEFAULT_SETTERS$2, initialSetters || []), baseType || VEXModalContext // https://github.com/Microsoft/TypeScript/issues/7234
            );
        }
        /**
         *
         * @aliasFor isBlocking
         */
        VEXModalContextBuilder.prototype.overlayClosesOnClick = function (value) {
            this[angular2Modal.privateKey('isBlocking')] = !value;
            return this;
        };
        return VEXModalContextBuilder;
    }(angular2Modal.ModalOpenContextBuilder));
    var __extends$2 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var DEFAULT_SETTERS$1 = [
        'content'
    ];
    /**
     * Data definition
     */
    var DialogPreset = (function (_super) {
        __extends$2(DialogPreset, _super);
        function DialogPreset() {
            _super.apply(this, arguments);
        }
        return DialogPreset;
    }(VEXModalContext));
    /**
     * A Preset representing the configuration needed to open MessageModal.
     * This is an abstract implementation with no concrete behaviour.
     * Use derived implementation.
     */
    var DialogPresetBuilder = (function (_super) {
        __extends$2(DialogPresetBuilder, _super);
        function DialogPresetBuilder(modal, defaultValues, initialSetters, baseType) {
            if (defaultValues === void 0) {
                defaultValues = undefined;
            }
            if (initialSetters === void 0) {
                initialSetters = undefined;
            }
            if (baseType === void 0) {
                baseType = undefined;
            }
            _super.call(this, angular2Modal.extend({ modal: modal, component: DialogFormModal, buttons: [], defaultResult: true }, defaultValues || {}), angular2Modal.arrayUnion(DEFAULT_SETTERS$1, initialSetters || []), baseType || DialogPreset // https://github.com/Microsoft/TypeScript/issues/7234
            );
        }
        DialogPresetBuilder.prototype.addButton = function (css, caption, onClick) {
            var btn = {
                cssClass: css,
                caption: caption,
                onClick: onClick
            };
            var key = angular2Modal.privateKey('buttons');
            this[key].push(btn);
            return this;
        };
        DialogPresetBuilder.prototype.addOkButton = function (text) {
            if (text === void 0) {
                text = 'OK';
            }
            this.addButton('vex-dialog-button-primary vex-dialog-button vex-first', text, function (cmp, $event) { return cmp.dialog.close(cmp.dialog.context.defaultResult); });
            return this;
        };
        DialogPresetBuilder.prototype.addCancelButton = function (text) {
            if (text === void 0) {
                text = 'CANCEL';
            }
            this.addButton('vex-dialog-button-secondary vex-dialog-button vex-last', text, function (cmp, $event) { return cmp.dialog.dismiss(); });
            return this;
        };
        return DialogPresetBuilder;
    }(VEXModalContextBuilder));
    var __extends$1 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var DEFAULT_VALUES = {
        component: DialogFormModal,
        content: FormDropIn,
        okBtn: 'OK',
        cancelBtn: 'Cancel'
    };
    var DEFAULT_SETTERS = [
        'okBtn',
        'cancelBtn',
        'placeholder'
    ];
    /**
     * Data definition
     */
    var DropInPreset = (function (_super) {
        __extends$1(DropInPreset, _super);
        function DropInPreset() {
            _super.apply(this, arguments);
        }
        Object.defineProperty(DropInPreset.prototype, "showInput", {
            get: function () {
                return this.dropInType === angular2Modal.DROP_IN_TYPE.prompt;
            },
            enumerable: true,
            configurable: true
        });
        return DropInPreset;
    }(DialogPreset));
    /**
     * A Preset representing all 3 drop ins (alert, prompt, confirm)
     */
    var DropInPresetBuilder = (function (_super) {
        __extends$1(DropInPresetBuilder, _super);
        function DropInPresetBuilder(modal, dropInType, defaultValues) {
            if (defaultValues === void 0) {
                defaultValues = undefined;
            }
            _super.call(this, modal, angular2Modal.extend(angular2Modal.extend({ modal: modal, dropInType: dropInType }, DEFAULT_VALUES), defaultValues || {}), DEFAULT_SETTERS, DropInPreset);
        }
        DropInPresetBuilder.prototype.$$beforeOpen = function (config) {
            if (config.okBtn) {
                this.addOkButton(config.okBtn);
            }
            switch (config.dropInType) {
                case angular2Modal.DROP_IN_TYPE.prompt:
                    config.defaultResult = undefined;
                case angular2Modal.DROP_IN_TYPE.confirm:
                    if (config.cancelBtn) {
                        this.addCancelButton(config.cancelBtn);
                    }
                    break;
            }
            return _super.prototype.$$beforeOpen.call(this, config);
        };
        return DropInPresetBuilder;
    }(DialogPresetBuilder));
    var __extends = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Modal$1 = (function (_super) {
        __extends(Modal$$1, _super);
        function Modal$$1(overlay) {
            _super.call(this, overlay);
        }
        Modal$$1.prototype.alert = function () {
            return new DropInPresetBuilder(this, angular2Modal.DROP_IN_TYPE.alert, { isBlocking: false });
        };
        Modal$$1.prototype.prompt = function () {
            return new DropInPresetBuilder(this, angular2Modal.DROP_IN_TYPE.prompt, {
                isBlocking: true,
                keyboard: null
            });
        };
        Modal$$1.prototype.confirm = function () {
            return new DropInPresetBuilder(this, angular2Modal.DROP_IN_TYPE.confirm, {
                isBlocking: true,
                keyboard: null
            });
        };
        Modal$$1.prototype.create = function (dialogRef, content, bindings) {
            var _this = this;
            var backdropRef = this.createBackdrop(dialogRef, angular2Modal.CSSBackdrop);
            var containerRef = this.createContainer(dialogRef, angular2Modal.CSSDialogContainer, content, bindings);
            var overlay = dialogRef.overlayRef.instance;
            var backdrop = backdropRef.instance;
            var container = containerRef.instance;
            dialogRef.inElement ? overlay.insideElement() : overlay.fullscreen();
            // add body class if this is the only dialog in the stack
            if (!document.body.classList.contains('vex-open')) {
                document.body.classList.add('vex-open');
            }
            overlay.addClass("vex vex-theme-" + dialogRef.context.className);
            backdrop.addClass('vex-overlay');
            container.addClass(dialogRef.context.contentClassName);
            container.setStyle('display', 'block');
            if (dialogRef.inElement) {
                overlay.setStyle('padding', '0');
                container.setStyle('margin-top', '20px');
            }
            if (containerRef.location.nativeElement) {
                containerRef.location.nativeElement.focus();
            }
            if (dialogRef.context.className === 'bottom-right-corner') {
                overlay.setStyle('overflow-y', 'hidden');
                container.setStyle('position', 'absolute');
            }
            overlay.beforeDestroy(function () {
                overlay.addClass('vex-closing');
                var completer = new angular2Modal.PromiseCompleter();
                var animationEnd$ = container.myAnimationEnd$();
                if (dialogRef.context.className !== 'bottom-right-corner') {
                    animationEnd$ = animationEnd$.combineLatest(backdrop.myAnimationEnd$(), function (s1, s2) { return [s1, s2]; });
                }
                animationEnd$.subscribe(function (sources) {
                    _this.overlay.groupStackLength(dialogRef) === 1 && document.body.classList.remove('vex-open');
                    completer.resolve();
                });
                return completer.promise;
            });
            overlay.setClickBoundary(containerRef.location.nativeElement);
            return dialogRef;
        };
        Modal$$1.decorators = [
            { type: _angular_core.Injectable },
        ];
        /** @nocollapse */
        Modal$$1.ctorParameters = function () {
            return [
                { type: angular2Modal.Overlay, },
            ];
        };
        return Modal$$1;
    }(angular2Modal.Modal));
    var providers = [
        { provide: angular2Modal.Modal, useClass: Modal$1 },
        { provide: Modal$1, useClass: Modal$1 }
    ];
    var VexModalModule = (function () {
        function VexModalModule() {
        }
        VexModalModule.getProviders = function () {
            return providers;
        };
        VexModalModule.decorators = [
            { type: _angular_core.NgModule, args: [{
                        imports: [angular2Modal.ModalModule, _angular_common.CommonModule],
                        declarations: [
                            VEXDialogButtons,
                            FormDropIn,
                            DialogFormModal
                        ],
                        providers: providers,
                        entryComponents: [
                            DialogFormModal,
                            FormDropIn
                        ]
                    },] },
        ];
        /** @nocollapse */
        VexModalModule.ctorParameters = function () { return []; };
        return VexModalModule;
    }());
    exports.Modal = Modal$1;
    exports.VEXModalContext = VEXModalContext;
    exports.VEXModalContextBuilder = VEXModalContextBuilder;
    exports.DropInPreset = DropInPreset;
    exports.DropInPresetBuilder = DropInPresetBuilder;
    exports.DialogFormModal = DialogFormModal;
    exports.FormDropIn = FormDropIn;
    exports.VEXDialogButtons = VEXDialogButtons;
    exports.DialogPreset = DialogPreset;
    exports.DialogPresetBuilder = DialogPresetBuilder;
    exports.VexModalModule = VexModalModule;
    exports.providers = providers;
    Object.defineProperty(exports, '__esModule', { value: true });
})));
