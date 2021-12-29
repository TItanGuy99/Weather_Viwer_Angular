import { PrepareDataService } from 'src/app/core/data/prepare-data.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowDataComponentComponent } from './show-data-component.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('ShowDataComponentComponent', () => {
  let component: ShowDataComponentComponent;
  let fixture: ComponentFixture<ShowDataComponentComponent>;
  let prepareDataService: PrepareDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDataComponentComponent ],
      providers: [
        { provide: PrepareDataService }
      ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDataComponentComponent);
    prepareDataService = TestBed.inject(PrepareDataService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
