import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EdtTextPage } from './edt-text.page';

describe('EdtTextPage', () => {
  let component: EdtTextPage;
  let fixture: ComponentFixture<EdtTextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdtTextPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EdtTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
