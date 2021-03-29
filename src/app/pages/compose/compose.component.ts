import { Component, HostListener } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DeactivateConfirmComponent } from "../../components/deactivate-confirm/deactivate-confirm.component";
import { CanComponentDeactivate } from "../../guards/can-deactivate.guard";

@Component({
  selector: "app-compose",
  templateUrl: "./compose.component.html"
})
export class ComposeComponent implements CanComponentDeactivate {
  constructor(private router: Router, private modalService: NgbModal) {}

  submitted = false;
  isWorking = false;

  composeForm = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    content: new FormControl(null, [Validators.required])
  });

  get f() {
    return this.composeForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.composeForm.invalid) {
      return;
    }

    this.isWorking = true;
    this.composeForm.disable();

    setTimeout(() => {
      this.composeForm.reset();
      this.composeForm.enable();
      this.submitted = false;
      this.isWorking = false;
      this.router.navigate(["/"]);
    }, 1000);
  }

  @HostListener("window:beforeunload")
  canDeactivate() {
    if (this.composeForm.dirty) {
      // uncomment the following line if you want the native browser dialog.
      // return confirm('You have unsaved changes. Discard and leave?');

      const modalRef = this.modalService.open(DeactivateConfirmComponent, {
        backdrop: "static",
        centered: true
      });

      return modalRef.result;
    }

    return true;
  }
}
