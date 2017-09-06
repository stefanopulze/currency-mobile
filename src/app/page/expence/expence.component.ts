import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Transastion} from '../../model/transaction.model';
import {Tag} from '../../model/tag.model';
import {TransactionService} from "../../service/transaction.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-expence',
  templateUrl: './expence.component.html',
  styleUrls: ['./expence.component.scss']
})
export class ExpenceComponent implements OnInit {

  @ViewChild('tag') tagElement: ElementRef;

  value = 0.0;
  tags: Tag[] = [];

  lastDigitIsDot = false;

  views = {
    value: {
      name: 'value',
      btnNextLabel: 'Avanza',
      btnCancelLabel: 'Cancella',
      nextView: 'tags',
      cancel: {
        label: 'Cancella',
        transparent: true
      }
    },
    tags: {
      name: 'tags',
      btnNextLabel: 'Salva',
      btnCancelLabel: 'Cancella',
      saveButton: true,
      autoFocus: true,
      cancel: {
        label: 'Cancella',
        transparent: true
      }
    },
    done: {
      name: 'done',
      btnNextLabel: 'Chiudi',
      nextView: 'dashboard',
      isLast: true,
      cancel: {
        label: 'Dashboard',
        transparent: false
      }
    }
  };

  currentView = this.views.value;

  constructor(private service: TransactionService, private router: Router) {
  }

  ngOnInit() {
  }

  digit(number) {
    let v = '' + this.value;

    if (this.lastDigitIsDot) {
      v += '.';
      this.lastDigitIsDot = false;
    }

    v += number;

    this.value = parseFloat(v);
  }

  digitDot() {
    this.lastDigitIsDot = true;
  }

  clearDigit() {
    let v = ('' + this.value).slice(0, -1) || '0';
    this.value = parseFloat(v);
  }

  showSection(section: string) {
    let nextView = this.views[section];

    if (nextView.autoFocus) {
      setTimeout(function() {
        this.tagElement.nativeElement.focus();
      }.bind(this), 250);
    }

    this.currentView = nextView;
  }

  addTag(tag: HTMLInputElement) {
    this.tags.push(new Tag(tag.value));
    tag.value = '';
    tag.focus();
  }

  save() {
    let transaction = new Transastion();
    transaction.value = this.value;
    transaction.tags = this.tags;

    this.service.createTransaction(transaction)
      .subscribe(
        done => this.showSection('done')
      );
  }

  navigateToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
