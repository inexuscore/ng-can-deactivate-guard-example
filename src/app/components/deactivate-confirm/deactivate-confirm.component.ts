import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-deactivate-confirm",
  templateUrl: "./deactivate-confirm.component.html"
})
export class DeactivateConfirmComponent {
  constructor(public modal: NgbActiveModal) {}

  leave() {
    this.modal.close(true);
  }

  stay() {
    this.modal.close(false);
  }
}
