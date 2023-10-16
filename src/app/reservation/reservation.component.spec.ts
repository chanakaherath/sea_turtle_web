import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Import FormsModule if your component uses [(ngModel)]
import { By } from '@angular/platform-browser'; // for querying the DOM

import { ReservationComponent } from './reservation.component';

describe('ReservationComponent', () => {
  let component: ReservationComponent;
  let fixture: ComponentFixture<ReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationComponent ],
      imports: [ FormsModule ] // Add this if your component uses [(ngModel)]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not submit the form if any field is empty', () => {
    const form = fixture.debugElement.query(By.css('.sign-up-form')).nativeElement;

    // Here, we assume that the form submission is prevented by showing an alert message.
    // We'll mock the window.alert function to track if it was called.
    spyOn(window, 'alert').and.stub();

    form.submit();

    expect(window.alert).toHaveBeenCalledWith('Please fill all the fields');
  });
});

