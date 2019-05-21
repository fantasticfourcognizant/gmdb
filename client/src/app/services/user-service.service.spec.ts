import { TestBed, getTestBed } from '@angular/core/testing';

import { UserServiceService } from './user-service.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('UserService', () => {

  let  injector: TestBed;
  let  userService: UserServiceService;
  let  httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [UserServiceService]
    });

    const testBed = getTestBed();
    userService = testBed.get(UserServiceService);
    httpMock = testBed.get(HttpTestingController);
  });

  it('it should call login API successfully', () => {
    const credentials = {
      email: 'md2@test.com',
      password: 'md2'
      };
    const dummyData = {
        firstName: 'test',
        lastName: 'test2',
        email: 'test@test.com'
      };
      // We call the service
    userService.validateUser(credentials).subscribe(fakeResponse => {
        expect(fakeResponse).toBeTruthy();
        expect(fakeResponse.firstName).toEqual('test');
        expect(fakeResponse.email).toEqual('test@test.com');

      });
    const req = httpMock.expectOne('https://boiling-ocean-39055.herokuapp.com/login');
    expect(req.request.method).toEqual('POST');

    req.flush(dummyData);
    httpMock.verify();
    });

  it('it should call signup API successfully', () => {
      const credentials = {
        firstName: 'test',
        lastName: 'test2',
        email: 'md2@test.com',
        password: 'md2'
        };
      const dummyData = {
          firstName: 'test',
          lastName: 'test2',
          email: 'test@test.com'
        };
        // We call the service
      userService.createUser(credentials).subscribe(fakeResponse => {
          expect(fakeResponse).toBeTruthy();
          expect(fakeResponse.firstName).toEqual('test');
          expect(fakeResponse.email).toEqual('test@test.com');

        });
      const req = httpMock.expectOne('https://boiling-ocean-39055.herokuapp.com/signup');
      expect(req.request.method).toEqual('POST');

      req.flush(dummyData);
      httpMock.verify();
      });

  it('should be created', () => {
    const service: UserServiceService = TestBed.get(UserServiceService);
    expect(service).toBeTruthy();
  });
});
