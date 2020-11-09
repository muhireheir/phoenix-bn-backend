/* eslint-disable no-undef */
import welcome from './welcome.test';
import manualRegistration from './registration/manualSignUp';
import facebookLoginTest from './signinTest/facebookLogin.test';
import googleLoginTest from './signinTest/googleLogin.test';
import manualLogintest from './signinTest/manualLogin.test';
import resetPassword from './registration/resetPassword';
import logoutTest from './logoutTest/logout.test';
import permissionTest from './permissions/permissions';
import roleTest from './roles/roles';
import rolePermissionTest from './rolePermissions/rolePermissions';
import { loginTests } from './users/login.test';
import createTrip from './trips/createTripRequest';
import manageTrip from './trips/manageTripRequests'
import assignUsers from './roles/assignUsers';

describe('test the first endpoint', welcome);
describe('test the manual login endpoint', manualLogintest);
describe('logIn pre defined users', loginTests);
describe('User Registration and Verification', manualRegistration);
describe('test the facebook login api', facebookLoginTest);
describe('test the google login endpoint', googleLoginTest);
describe('Resetting User Password', resetPassword);
describe('Test the user logout endpoints', logoutTest);
describe('test for accessing permission endpoint', permissionTest);
describe('test for accessing role endpoint', roleTest);
describe('test for accessing rolePermission endpoint', rolePermissionTest);
describe('Test for assigning users to manager endpoints', assignUsers);
describe('test for creating and view trip request', createTrip);
describe('Test for managing trip request',manageTrip);